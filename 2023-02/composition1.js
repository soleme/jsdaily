function walk(){
    console.log('걷는중');
}

function run(){
    console.log('달린다달려');
}

class Crong {
    eat(){
        console.log('크롱크롱');
        this.walk();
        this.run();
    }
}
// 합성 : 결합도가 낮아진다.
Object.assign(Crong.prototype, { walk, run });
new Crong().eat();