function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function genPrimes(n) {
  const res = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      res.push(i);
    }
  }
  return res;
}

console.log(genPrimes(1));  // expected []
console.log(genPrimes(2));  // expected [2]
console.log(genPrimes(10));  // expected [2, 3, 5, 7]
console.log(genPrimes(13));  // expected [2, 3, 5, 7, 11, 13]