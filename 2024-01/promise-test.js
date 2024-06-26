const DB = [];

function saveDB(user){
    const oldDBSize = DB.length;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve, reject) => {  // 콜백 대신 Promise 객체 반환
        if(DB.length > oldDBSize){
            resolve(user); // 성공시 유저 정보 반환
        }else{
            reject(new Error("Save DB Error!")); // 실패시 에러 발생
        }
    })
}

function sendEmail(user){
    console.log(`email to ${user.email}`);
    return new Promise((resolve, reject) => {
        resolve(user);
    })
}

function getResult(user){
    return new Promise((resolve, reject) => {
        resolve(`success register ${user.name}`);
    })
}

function registerByPromise(user){
    const result = saveDB(user).then(sendEmail).then(getResult);
    console.log(result);
    return result;
}

const myUSer = { email: 'andy@test.com', password:"1234", name:"andy"};
const result = registerByPromise(myUSer);
result.then(console.log);