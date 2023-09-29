console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling", //0-20//
    "togri boshliq tanlang va koproq hato qiling", //20-30//
    "ustinzigda ishlashingizni boshlang", //30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling, foydasi yuq endi", //60
];

// sync  Sinxron function //
//CALLBACK function//
function maslahat_Bering(a, callback) {
    if(typeof a !== 'number') callback("iltimos raqam yozing", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
             callback(null, list[5]);
        }, 1000);
    }
}

console.log('passed here 0');
maslahat_Bering(65, (err, data) => {
    if(err) console.log("ERROR:", err );
    else {
        console.log('javob:',  data);
    }
});
console.log('passed here 1');

// async asinxron function//
// defination qismida async ishlatildi//
// async function maslahat_Bering(a) {
//     if (typeof a !== "number") throw new Error("iltimos raqam yozing");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
        // return list[5];
// set timeout//
        // return new Promise((resolve, reject) => {        
            // // promise function da set time out va set interval yaxshi ishlaydi//
        // setTimeout(() => {
        //     resolve(list[5]);
        // }, 5000);
        // });

      //set intervall//
//       return new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve(list[5]);
//         }, 1000);
//         });
//     }
// }
//  call via then/catch//
// console.log("passed here 0");
// maslahat_Bering(25)
//     .then((data) => {
//         console.log("javob:", data);
//         console.log();
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");

// call via async & await //
// async function run() {
// let javob = await maslahat_Bering(15);
// console.log(javob);
// let javob = await maslahat_Bering(25);
// console.log(javob);
// let javob = await maslahat_Bering(35);
// console.log(javob);
// let javob = await maslahat_Bering(45);
// console.log(javob);
// }
// run(); 