const views = Array.from(document.querySelectorAll(".view"));
const keepsakePreview = document.querySelector(".review-path");
const soundtrack = document.querySelector(".soundtrack audio");
const seekButton = document.querySelector(".soundtrack-seek");
const seekStatus = document.querySelector(".soundtrack-status");
const soundtrackSource = soundtrack.querySelector("source").src;
const main = document.querySelector("#main");
const skipLink = document.querySelector(".skip-link");
const review = new URLSearchParams(window.location.search).get("preview") === "benefit";

const bud = new URLSearchParams(window.location.search).get("bud");
if (/^(0[1-9]|1[0-9]|2[0-5])$/.test(bud || "")) {
  const artwork = document.querySelector("#edition-artwork");
  artwork.textContent = "View First Cycle Bud #" + bud + " artwork";
  artwork.href = "/premiere/buds/v1/" + bud + ".jpg";
  artwork.hidden = false;
}
keepsakePreview.hidden = !review;
if (review) document.querySelector("#offer .poster-back").href = "#benefit";

let localTrackUrl;
soundtrack.addEventListener("playing", () => {
  if (localTrackUrl || seekButton.disabled) return;
  seekButton.hidden = Array.from({ length: soundtrack.seekable.length }, (_, i) =>
    soundtrack.seekable.end(i) - soundtrack.seekable.start(i)
  ).some((seconds) => seconds > 0);
});

seekButton.addEventListener("click", async () => {
  seekButton.disabled = true;
  seekStatus.hidden = false;
  seekStatus.textContent = "Loading the full track for seeking…";
  try {
    const response = await fetch(soundtrackSource);
    if (!response.ok || !response.headers.get("content-type")?.startsWith("audio/")) {
      throw new Error("Could not load soundtrack");
    }
    const file = await response.blob();
    if (file.size === 0) throw new Error("Empty soundtrack");
    const position = soundtrack.currentTime;
    const wasPlaying = !soundtrack.paused;
    localTrackUrl = URL.createObjectURL(file);
    const restorePlayback = () => {
      if (wasPlaying && document.body.dataset.view === "edition") {
        soundtrack.play().catch(() => {});
      }
    };
    const onError = () => {
      soundtrack.removeEventListener("loadedmetadata", onReady);
      URL.revokeObjectURL(localTrackUrl);
      localTrackUrl = undefined;
      soundtrack.removeAttribute("src");
      soundtrack.load();
      seekButton.disabled = false;
      seekStatus.textContent = "Seeking could not be enabled. You can still play or download the MP3.";
    };
    const onReady = () => {
      soundtrack.removeEventListener("error", onError);
      soundtrack.currentTime = Math.min(position, soundtrack.duration);
      seekButton.hidden = true;
      seekStatus.textContent = "Seeking is ready. Use the player’s time scrubber.";
      restorePlayback();
    };
    soundtrack.addEventListener("error", onError, { once: true });
    soundtrack.addEventListener("loadedmetadata", onReady, { once: true });
    soundtrack.src = localTrackUrl;
  } catch {
    seekButton.disabled = false;
    seekStatus.textContent = "Seeking could not be enabled. You can still play or download the MP3.";
  }
});

skipLink.addEventListener("click", (event) => {
  event.preventDefault();
  main.focus({ preventScroll: true });
  main.scrollIntoView({ block: "start" });
});

function showView(focusHeading) {
  const hash = window.location.hash.slice(1);
  if (review && hash === "keepsake") {
    window.location.replace("devnet.html");
    return;
  }
  const fragment = hash === "main" ? document.body.dataset.view : hash;
  const requested = views.find((view) => view.id === fragment);

  const active = requested && (review || !requested.classList.contains("review-screen"))
    ? requested
    : views[0];

  if (document.body.dataset.view === "edition" && active.id !== "edition") {
    soundtrack.pause();
  }
  for (const view of views) view.hidden = view !== active;
  document.body.dataset.view = active.id;

  if (focusHeading) {
    window.scrollTo(0, 0);
    const heading = hash === "main" ? main : active.querySelector("h1");
    heading.focus({ preventScroll: true });
  }
}

showView(false);
window.addEventListener("hashchange", () => showView(true));
