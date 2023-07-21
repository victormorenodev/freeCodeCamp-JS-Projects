// Função que checa se é uma letra entre [a - z], [0 - 9]
function alphanumericCheck(char) {
  const charCode = char.charCodeAt(0);
  return ((charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122));
}

function palindrome(str) {
  // Transforma a string em minúscula, divide ela caractere por caractere, checa se é alfanumérico e se for o caractere é retornado
  const newStr = str.toLowerCase().split("").filter(element => alphanumericCheck(element));
  // Retrona um booleano conferindo se a string é a mesma backwards
  return newStr.join("") === newStr.toReversed().join("");
}

console.log(palindrome("never odd or even"));