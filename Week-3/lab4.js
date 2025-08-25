function createCar (brand, model, year) {
    return {
        brand: brand,
        model: model,
        year:  year,
        getInfo: function () {
            return `${this.brand} ${this.model} (${this.year})`;

        }
    }
}
const car1 = createCar("ferrari", "F40", 1987);
console.log(car1.getInfo());