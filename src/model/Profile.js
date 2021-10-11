//transformar dados do profile
let data = {
    name: "Anderson",
    avatar: "https://avatars.githubusercontent.com/u/89303684?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "value-hour": 75
};


module.exports = {
    //Habilitando export do objeto
    get() {
        return data;
    },
    update(newData) {
        data = newData;
    }
}

