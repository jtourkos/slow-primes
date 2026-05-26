export function sumPrimes(n: number): number {
  let sum = 0

  for (let c = 2; c <= n + 1; c++) {
    if (c > 2 && c % 2 === 0) continue

    let isPrime = true
    const limit = Math.sqrt(c)

    for (let divisor = 3; divisor <= limit; divisor += 2) {
      if (c % divisor === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) sum += c
  }

  return sum
}
