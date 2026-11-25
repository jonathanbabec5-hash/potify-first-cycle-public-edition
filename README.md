# The First Cycle Edition

[Complete repository directory tree](docs/DIRECTORY.md)

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
