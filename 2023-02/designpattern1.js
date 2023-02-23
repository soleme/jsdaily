
const pipe = (...functions) => (x) => functions.reduce((acc, cur) => cur(acc), x);

const scienceFacility = () => {
    const units = ['Science Vessel'];
    return units;
}

console.log(scienceFacility);

const physicsLab = (baseUnits) => {
    const units = ['BattelCruiser'];
    return [...baseUnits, ...units];
}

const scienceFacilityWithPhysicsLab = pipe(
    scienceFacility,
    physicsLab
)();

console.log(scienceFacilityWithPhysicsLab);

function add(...args){
    let total = 0;
    for(let i=0; i<args.length;i++){
        total += args[i];
    }
    return total;
}

console.log(add(1,2,3,4,5,6,7,8,9,10));