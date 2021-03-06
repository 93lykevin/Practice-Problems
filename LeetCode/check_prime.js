// Question: How would you verify a prime number?

function checkPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
