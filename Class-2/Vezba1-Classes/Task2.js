class Car{
    constructor(name,year) {
        this.name = name;
        this.year = year;
    }


age(x) {
    return x - this.year;
}
}
let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford",2014);
document.getElementById("demo").innerHTML = "My Car is " + myCar.age(year) + " years old.";