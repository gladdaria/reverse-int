module.exports = function reverse (n) {
  let result = '';
  let str = (Math.abs(n)).toString();

  for(let i = 0; i < str.length; i++) {
      result = `${str[i]}${result}`;
  }
  return result;
}
