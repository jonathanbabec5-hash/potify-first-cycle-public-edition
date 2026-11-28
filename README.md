# The First Cycle Edition

## Find your way in

| If you are… | Start here | Try this |
| --- | --- | --- |
| A reader | [Open the free edition](https://potify-first-cycle.wile-e-coyot.chatgpt.site/#edition) | Read the opening and return to a passage. |
| A listener | [Find the Grow Room recording](public/assets/the-soil-remembers-grow-room.mp3) | Hear the song alongside the book. |
| A developer | [Preview the frontend locally](#setup-and-usage) | Explore the reading and listening interface. NFT claims remain paused. |

[Complete repository directory tree](docs/DIRECTORY.md)

## A book you can enter through a song

Book I of The POTIFY Chronicle, *The Soil Remembers (Grow Room Version)* and the *From Seed to Smoke* premiere NFT belong to one First Cycle. Start with the Cultivator’s Note. Read a paragraph at your own pace, then put on the recording. The difference between the rhythm you imagined and the one you hear is a good reason to give both a little time.

The [edition page](public/index.html) keeps the opening pages, Book I handoff and listening controls close together. The [song file](public/assets/the-soil-remembers-grow-room.mp3) identifies the Grow Room recording precisely. Reading and listening stand on their own. The 25 artworks are individual NFT designs; the last verified claim state was paused.

[Open the free edition](https://potify-first-cycle.wile-e-coyot.chatgpt.site/#edition). On a phone, try moving from one paragraph to the track and back. Tell us which step lost your place, if any. For eligibility and recipient-signed claim status, use the [premiere page](https://potify-first-cycle.wile-e-coyot.chatgpt.site/premiere/).

**Public edition frontend.** Let a reader open Book I, hear the Grow Room recording and find the premiere from a single edition.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Open the free edition. Open http://127.0.0.1:8000/#edition in a browser. 

### Developer entry points

The static campaign uses URL fragments to switch between the edition, excerpt and public premiere information. Cross-project links are identified in the source guide. Explore `public/` in the full tree.

### Verification

The edition rendered locally and navigation opened The opening pages. The package excludes live wallet operations.

```sh
node --check public/campaign.js
```

### Release scope

The reviewed public package centers on reading and listening. NFT claims remain paused; wallet and sponsor operations stay in the recovery archive. potify-first-cycle at `7bc29685d6decd1f3d1bbbb0216f837bc7701a51`. Portable public edition at hosted v38. Book, recording, field film and paused premiere information retained. Wallet and sponsorship implementations remain in the original backup. Private original potify-first-cycle GitHub main was directly verified at 576b12201cc9acc31f1064f5cecbabb6a9abadbb. docs/upstream-comparison.json distinguishes byte-equal files from a differing branch.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
