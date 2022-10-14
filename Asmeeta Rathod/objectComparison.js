function objectComparison(obj, source) {
  const matches = Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
  return matches;
}
console.log(
  objectComparison(
    { age: 25, hair: "long", beard: true },
    { hair: "long", beard: true }
  )
); // true
console.log(
  objectComparison(
    { hair: "long", beard: true },
    { age: 25, hair: "long", beard: true }
  )
); // false
console.log(
  objectComparison(
    { hair: "long", beard: true },
    { age: 26, hair: "long", beard: true }
  )
); // false
