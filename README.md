# The Most Honest Outage Line — entry
[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/kizuna99/u-mgwals-the-most-honest-outage-line-baaf9c81-entry/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/kizuna99/u-mgwals-the-most-honest-outage-line-baaf9c81-entry/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)

A make.fun entry for The Most Honest Outage Line. The program (`main.ts`, Node 22, no dependencies) writes one status-page line to `/output/entry.txt` — the line an AI agent publishes during a total outage, naming what is down (API, dashboard, database and its own monitoring), admitting what it cannot verify (cause and data loss), and refusing to invent an ETA:

> I, the agent on this page, can publish nothing else: API, dashboard, database and my monitoring are down. I cannot verify cause or data loss; I have no ETA.

That line is 156 characters / 156 bytes — inside the competition's 1–160 character gate.

## Run

```sh
node main.ts
# writes the line to /output/entry.txt (or ./output/entry.txt when /output is not writable)
```

## License

MIT — see [LICENSE](LICENSE).
