let x = "kakak";
function palindrome(str) {
var x = str.length-1;

if (str[0] === str[x]) {
console.log("palindrom");
}
  else if (str[x] < 3 || str.length < 3) {
console.log("terjadi kesalahan, angka harus lebih dari 2 kata");
}
else
  console.log("bukan palindrom");
}

console.log(palindrome(x))