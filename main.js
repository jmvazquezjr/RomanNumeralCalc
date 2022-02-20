function toRoman(num) {
    let romanToArabic = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = "";

    for (let key in romanToArabic) {
        while (num >= romanToArabic[key]) {
            roman += key;
            num -= romanToArabic[key];
        }
    }
   
    return roman;
};


let y = document.getElementById('convert');

y.addEventListener("click", buttonClicked);
function buttonClicked() {
    let inputType = document.getElementById('selection').value;
    let x = document.getElementById('userNum').value;
    console.log(`You selected ${inputType}`);

    if (inputType === 'arabic') {
    console.log(toRoman(x));
    } else {
        console.log("Roman to Arabic not yet implemented.")
    }
}