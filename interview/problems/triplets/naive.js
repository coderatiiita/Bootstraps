
// Naive approach
// Ot(n^3)
// Os(1)
function findTriplets(a) {

  let n = a.length;
  let found = false

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if ((a[i] + a[j] + a[k]) === 0) {
          console.log(a[i], a[j], a[k]);
          found = true;
        }
      }

    }

  }
  if (!found) {
    console.log('Triplets not found')
  }

}

findTriplets([0, -1, 2, -3, 1])