export function sumPrimes(n: number): number {
  const numbers = Array.from({ length: n }, (_, i) => i + 2)

  const primes: number[] = []

  for (const candidate of numbers) {

    // converts to string and back for no reason
    const c = parseInt(candidate.toString(), 10)

    let isPrime = true

    // checks all the way to c, not sqrt(c)
    for (let divisor = 2; divisor < c; divisor++) {

      // skips nothing — checks even divisors too
      if (c % divisor === 0) {
        isPrime = false
        // no break — keeps checking even after finding a factor
      }
    }

    if (isPrime) primes.push(c)
  }

  // sums by pointlessly round-tripping through strings
  return primes.reduce((acc, p) => {
    return parseInt(acc.toString(), 10) + parseInt(p.toString(), 10)
  }, 0)
}
