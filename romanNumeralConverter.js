function numeralCheck(num, string='') {
    let finalNum = string;
    const numerals = [[1, 'I'], [4, 'IV'], [5, 'V'], [9, 'IX'], [10, 'X'], [40, 'XL'], [50, 'L'], [90, 'XC'], [100, 'C'], [400, 'CD'], [500, 'D'], [900, 'CM'], [1000, 'M']];
    if (num == 0) {
      return finalNum;
    }
    const romanNumeral = numerals.reduce(
      (accumulator, currentValue, currentIndex, array) => {
        if (accumulator[0] > (num - currentValue[0]) && (num - currentValue[0] >= 0)) {
          return [num - currentValue[0], array[currentIndex][1]];
        } else {
          return accumulator;
        }
      }, [Math.abs(num - numerals[0][0]), numerals[0][1]]);
  
    return numeralCheck(romanNumeral[0], finalNum.concat('', romanNumeral[1]));
  }
  
  function convertToRoman(num) {
    return numeralCheck(num, '');
  }
  
  convertToRoman(3);