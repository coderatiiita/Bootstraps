function sqroot(n) {
  let mid = Math.floor(n / 2);

  if (n < 4) return "Number less than 4";

  let sqRootNumber = "Not found";

  for (let index = 2; index <= mid; index++) {
    if (index * index === n) {
      sqRootNumber = index;
    }
  }
  return sqRootNumber;
}

console.log(sqroot(4));
