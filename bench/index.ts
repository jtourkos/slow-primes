import { sumPrimes } from '../src/index'

const N         = 10_000
const RUNS      = 50
const timings:  number[] = []

// warmup
for (let i = 0; i < 3; i++) sumPrimes(N)

// measure
for (let i = 0; i < RUNS; i++) {
  const start = performance.now()
  const result = sumPrimes(N)
  const end   = performance.now()
  timings.push(end - start)

  // sanity check — result must always be the same
  if (result !== 5736396) {
    console.error(`WRONG RESULT: ${result} (expected 5736396)`)
    process.exit(1)
  }
}

timings.sort((a, b) => a - b)

const median = timings[Math.floor(RUNS / 2)]
const p95    = timings[Math.floor(RUNS * 0.95)]
const opsec  = (1000 / median).toFixed(2)

console.log(`sumPrimes(${N})`)
console.log(`  median : ${median.toFixed(2)} ms`)
console.log(`  p95    : ${p95.toFixed(2)} ms`)
console.log(`  ops/sec: ${opsec}`)
