import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sumPrimes } from "./index";

describe("sumPrimes", () => {
  it("returns 0 for n=0", () => {
    assert.equal(sumPrimes(0), 0);
  });

  it("returns 2 for n=1 (only prime is 2)", () => {
    assert.equal(sumPrimes(1), 2);
  });

  it("returns 5 for n=2 (primes: 2, 3)", () => {
    assert.equal(sumPrimes(2), 5);
  });

  it("returns 10 for n=5 (primes: 2, 3, 5)", () => {
    assert.equal(sumPrimes(5), 10);
  });

  it("returns 77 for n=18 (primes up to 19)", () => {
    assert.equal(sumPrimes(18), 77);
  });

  it("sums primes up to 100", () => {
    // Primes up to 101: sum = 1060
    assert.equal(sumPrimes(99), 1060);
  });

  it("handles moderate input for benchmarking", () => {
    const result = sumPrimes(1000);
    assert.equal(typeof result, "number");
    assert.ok(result > 0);
  });
});
