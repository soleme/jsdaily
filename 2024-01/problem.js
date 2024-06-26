// const discounter = discount => {
//     return price => {
//         return price * (1 - discount);
//     }
// }

// function discounter(discount) {
//     return function(price) {
//         return price * (1 - discount);
//     };
// }

const discounter = discount => price => price * (1-discount);

const tenPercentOff = discounter(0.1);
const result = tenPercentOff(100);

console.log(result);



