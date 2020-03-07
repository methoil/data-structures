function abbreviation(a, b) {
  const hash = {};
  let found = false;
  function setHash(a, b, val) {
    hash[a] ? (hash[a][b] = true) : (hash[a] = { [b]: true });
  }

  function getHash(a, b) {
    return (hash[a] && hash[a][b]) || false;
  }

  function recurse(a, b) {
    if (a === b || found) {
      found = true;
    } else if (!a.length || !b.length) {
      if (!a.length) {
        setHash(a, b);
      } else if (a[0].toLowerCase() === a[0]) {
        const subA = a.slice(1, a.length);
        getHash(subA, b) || recurse(subA, b);
      } else {
        setHash(a, b);
      }
    } else {
      const subA = a.slice(1, a.length);
      const subB = b.slice(1, b.length);
      if (a[0].toLowerCase() === a[0]) {
        if (a[0] !== b[0] && a[0].toUpperCase() !== b[0]) {
          getHash(subA, b) || recurse(subA, b);
          setHash(subA, b);
        } else if (a[0] === b[0]) {
          getHash(a, b) || recurse(subA, subB);
          setHash(a, b);
        } else {
          getHash(subA, b) || recurse(subA, b);
          setHash(subA, b);
          getHash(subA, subB) || recurse(subA, subB);
          setHash(subA, subB);
        }
      } else {
        if (a[0] === b[0]) {
          getHash(subA, subB) || recurse(subA, subB);
          setHash(subA, subB);
        } else {
          setHash(a, b);
        }
      }
    }
  }

  recurse(a, b);
  return found ? 'YES' : 'NO';
}
console.log(abbreviation('abcSS', 'AbCSS'));
