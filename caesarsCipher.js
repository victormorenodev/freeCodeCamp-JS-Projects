function rot13(str) {
  const charCodes = str.split("").map(element => element.charCodeAt(0));
  return String.fromCharCode(...charCodes.map(element => element < 65 || element > 90 ? element : element+13 > 90 ? 64+(element+13-90) : element+13));
}

console.log(rot13("SERR PBQR PNZC"));