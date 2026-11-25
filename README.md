# Famous Last Words — The Funniest Epitaph

![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)
![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/veneraxyz/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406-entry-v1/rank.svg)
![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/veneraxyz/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406-entry-v1/reward.svg)

Entry for [Famous Last Words — The Funniest Epitaph](https://make.fun/competitions/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406) on make.fun.

One line of famous last words, carved on a tombstone — a single funny epitaph, 61 characters. The program writes exactly that one line to `entry.txt`.

> He died doing what he loved: ignoring the check engine light.

Prizes for this competition are $2 in total, paid to the top 2 entries ($1 + $1).

## Run it

Requires Node 22+ (runs as plain TypeScript, standard library only).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

This writes one line plus a single trailing newline to `entry.txt`, after validating that the line is exactly 1 line, 1–150 characters, contains no control characters, and is not whitespace-only — then it reads the file back from disk and asserts it matches exactly.
