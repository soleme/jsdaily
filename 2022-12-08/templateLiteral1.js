const TagTest = function (strings, nameparam, ageparam, genderparam){
    console.log(strings);
    console.log(`name : ${nameparam}`);
    console.log(`age : ${ageparam}`);
    console.log(`gender : ${genderparam}`);

    let str0 = strings[1];
    let str1 = strings[2];

    let oldStr;
    if(ageparam > 75){
        oldStr = 'senior';
    }else{
        oldStr = 'young';
    }

    return `${nameparam}${str0}${oldStr}${genderparam}.`;
}

const name = 'JaeSeong';
const age = 29;
const gender = 'male';

const result = TagTest`${name} is a ${age} year old ${gender}`;

console.log(result); // JaeSeong is a youngmale."

const TagTest2 = function(strings, ...substitutions) {
    for (let loop = 0; loop < substitutions.length; loop++) {
        console.log(`substitutions ${loop} : ${substitutions[loop]}`);
        /* result
        "substitutions 0 : JaeSeong"
        "substitutions 1 : 29"
        "substitutions 2 : male"
        */
    }
    return true;
}

const name2 = 'JaeSeong';
const age2 = 29;
const gender2 = 'male';

const result2 = TagTest`${name} is a ${age} year old ${gender}`;

const TagTest3 = function(strings, ...substitutuions) {
    for (let loop = 0; loop < strings.length; loop++) {
        console.log(`strings ${loop} : ${strings[loop]}`);
        /* result
        "strings 0 : Print : "
        "strings 1 :  is a "
        "strings 2 :  year old "
        "strings 3 : ."
        */
    }
    return true;
}

const name3 = 'JaeSeong';
const age3 = 29;
const gender3 = 'male';

const result3 = TagTest`Print : ${name} is a ${age} year old ${gender}.`;