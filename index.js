function isprime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(n, m) {
  let primes = [];
  for (let i = n + 1; i <= m; i++) {
    if (isprime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(getPrimes(7, 20));
