function objectComparison(obj, source) {
  const matches = Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
  return matches;
}
