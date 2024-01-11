const data1 = undefined;
const data2 = '1';

function data(data1, data2){
    if(data1 || data2){
        return data1 || data2;
    }else{
        return 'result is...'
    }
}

console.log(data(data1, data2));