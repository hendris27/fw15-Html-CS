const a =70
const b =90
const c =60
const d =30
let hasil =(a+b+c+d)/4;
console.log(a,"+",b,"+",c,"+",d,"=",hasil)

if (hasil >= 90 ) {
    console.log("A");
  } else if (hasil >= 80 && hasil < 90) {
    console.log("B");
} else if(hasil >70 && hasil < 79 ) {
    console.log("C");
}else if(hasil >60 && hasil < 69 ) {
    console.log("D");
}
  
   else if(a == '' ||b == ''||c == ''||d == '' ) {
    console.log("salah isi nilai tidak boleh kosong");
}
  else {
  console.log("E");
}
