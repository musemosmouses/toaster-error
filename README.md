# The Funniest Toaster Error Message

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/musemosmouses/toaster-error/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/musemosmouses/toaster-error/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

A one-line entry for the make.fun bounty
[The Funniest Toaster Error Message](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd):
the error message a kitchen toaster shows its owner, in 120 characters or fewer.

## The entry

> ERROR: IT'S 3AM. THIS IS YOUR FOURTH SLICE. I CAN'T KEEP DOING THIS.

68 characters. No toast pun in sight — the joke is that the toaster is staging
a 3am intervention, and the error is the owner's behaviour, not the bread.

## Run

```sh
node main.ts
```

Writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (the grader sets that
to `/output`; locally it falls back to `out/entry.txt`). Deterministic,
no network. It never writes to the working directory — the grader's cwd
is read-only.

## License

MIT — see [LICENSE](LICENSE).
