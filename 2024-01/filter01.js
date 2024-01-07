
const user = [
    { name : 'John', age: 25, gender: 'male'},
    { name : 'Doe', age: 31, gender: 'female'},
    { name : 'Kim', age: 20, gender: 'female'},
    { name : 'Liam', age: 40, gender: 'male'},
]

const byProperty = (prop, fun)=>{
    return (user) => {
        return user.hasOwnProperty(prop) && fun(user[prop]);
    }
}

console.log(user.filter(byProperty("gender", user => user === "male")));

const result = user.filter((user=> user.gender === "male"));
console.log("result : " , result);


const byProperty2 = (prop)=>{
    return (user) => {
        return user.hasOwnProperty(prop) && user.gender === "male";
    }
}

console.log(user.filter(byProperty2("gender")));