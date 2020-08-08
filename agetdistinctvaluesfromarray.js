var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 1];

function toUnique(a, b, c) { //array,placeholder,placeholder
  b = a.length;
  while (c = --b)
    while (c--) a[b] !== a[c] || a.splice(c, 1);
  return a // not needed ;)
}
console.log(toUnique(array));