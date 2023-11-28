// //let str = "(KOR (+82)) 010-3428-1819";
// let str = '(KOR (+82)) 011-587-2483';
// let regex = /\d{3}-\d{4}-\d{4}/;
// let match = str.match(regex);
// console.log(match[0]); // "010-3428-1819"



//
// let str3 = '102301230';
//
// let regex = /^\(KOR \(\+82\)\) 01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
// // let regex = /\d{3}-\d{4}-\d{4}/;
// //let regex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
//
//let regex = /\d{3}-\d{4}-\d{4}/;
//let regex2 = /\d{3}-\d{3}-\d{4}/;

let str1 = "(KOR (+82)) 010-5323-2193";
let str2 = "(KOR (+82)) 011-587-2483";

let regex = /\d{3}-\d{4}-\d{4}/;
let regex2 = /\d{3}-\d{3}-\d{4}/;

let result = str1.match(regex) === null ? str2.match(regex2)[0] : str1.match(regex)[0];

console.log(result);

let regex = /^\(KOR \(\+82\)\) 01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

let _regex = /\d{3}-\d{4}-\d{4}/;
let _regex2 = /\d{3}-\d{3}-\d{4}/;

let contact = null;

if(regex.test(cellPhone)){
    contact = cellPhone;
    contact = contact.match(_regex) === null ? contact.match(_regex2)[0] : contact.match(_regex)[0];
}

//let match1 = str1.match(regex);
//let match2 = str2.match(regex);

//console.log(match1 ? match1[0] : 'No match found'); // "010-5323-2193"
//console.log(match2 ? match2[0] : str2.match(regex2)[0]);


// let str = "(KOR (+82)) 010-5323-2193";
// let regex = /^\(KOR \(\+82\)\) 01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
//
// if (!regex.test(str)) {
//     console.log('Invalid format');
// } else {
//     console.log('Valid format');
// }