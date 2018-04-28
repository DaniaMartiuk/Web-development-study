function sumPrimes(num) {
    var res = 0;

    // Function to get the primes up to max in an array
    function getPrimes(max) {
        var sieve = [];
        var i;
        var j;
        var primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }

        return primes;
    }

    // Add the primes
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
        res += primes[p];
    }

    return res;
}