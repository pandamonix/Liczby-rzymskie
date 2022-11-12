function rzymskie() {
let rome={ↈ:100000, ↇ:50000, ↂ:10000, ↁ:5000, M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XL: 40, X:10, IX:9, V:5, IV:4, I:1};
let num=Number(document.getElementById("liczba").value);
let rom="";
    for(let key in rome){
        let a = Math.floor(num / rome[key]);
        if(a >= 0){
            for(let i = 0; i < a; i++){
              rom += key;
            }
          }
        num = num % rome[key];
    }
 return document.getElementById("wynik").innerHTML = "Twoja liczba zapisana w systemie rzymskim: <strong>"+rom+"</strong>";
}
