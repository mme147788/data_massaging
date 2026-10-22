const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["cow", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["bass", "tuna"],
        },
    },
];

//1Create a function that returns all the names from the array. 



let getName = data.map(function (person) {
    return person.name
})

console.log(getName)

// 2 Create a function that returns all the objects that are born before 1990.

let bornBefore1990 = data.filter(function (person) {
    let birthYear = person.birthday.split("-")[2]
    if (birthYear < 1990) {
        return person
    }
})
console.log(bornBefore1990)

// 3 Create a function that returns an object of all the different foods from all the objects
//  as the key and the number of times that food is present in all the objects as the value.

// let collectFood = data.map(function (person) {
//     return Object.values(person.favoriteFoods).flat()
// }).flat()


function foodFavSummary(data) {
    let collectFood = data.map(function (person) {
        return Object.values(person.favoriteFoods).flat()
    }).flat()

    let foodObj = {}
    for (let i = 0; i < collectFood.length; i++) {
        let count = 0;
        for (let j = collectFood.length - 1; j >= 0; j--) {
            if (collectFood[i] === collectFood[j]) {
                count++;
                collectFood.splice[j]
            }
            foodObj[collectFood[i]] = count
        }
    }
    return foodObj
}
console.log(foodFavSummary(data))