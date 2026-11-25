(() => {
  const address = document.getElementById('potify-mint');
  const button = document.getElementById('copy-mint');
  const status = document.getElementById('mint-status');
  if (!address || !button || !status) return;

  function selectForCopy() {
    try {
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(address);
        address.focus({ preventScroll: true });
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'Address selected. Choose Copy from the selection menu, or press Ctrl+C or ⌘C.';
        return;
      }
    } catch {
      // Some mobile browsers allow text selection only through their native menu.
    }
    status.textContent = 'Press and hold the address, or select it and choose Copy.';
  }

  button.addEventListener('click', async () => {
    try {
      if (window.isSecureContext && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(address.textContent.trim());
        status.textContent = 'Mint copied.';
        return;
      }
    } catch {
      // Clipboard permissions can vary between the Replit preview and its own tab.
    }
    selectForCopy();
  });
  button.hidden = false;
})();
