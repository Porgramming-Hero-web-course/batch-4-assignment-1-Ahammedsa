"use strict";
{
    // 
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            const year = currentYear - this.year;
            return year;
        }
    }
    const myCar = new Car("Honda", "civic", 2018);
    console.log(myCar.getCarAge());
    //
}
