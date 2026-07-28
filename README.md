# slow-primes

A deliberately slow TypeScript prime-summation function for benchmarking and optimization exercises.

## What it does

`sumPrimes(n)` checks every integer from `2` through `n + 1` and returns the sum of the prime numbers it finds.

Examples:

```ts
import { sumPrimes } from "./src/index";

sumPrimes(0);  // 0
sumPrimes(1);  // 2
sumPrimes(2);  // 5  (2 + 3)
sumPrimes(18); // 77 (primes through 19)
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the test suite:

```bash
npm test
```

Run the benchmark:

```bash
npm run bench
```

The benchmark runs `sumPrimes(10000)` multiple times and reports median latency, p95 latency, and operations per second.

## Project layout

- `src/index.ts` — implementation of `sumPrimes`
- `src/index.test.ts` — Node test suite
- `bench/index.ts` — simple benchmark runner

## Notes

The implementation is intentionally straightforward and not optimized with a sieve. This makes it useful as a small target for profiling, benchmarking, and optimization practice.
