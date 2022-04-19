
const league_data = {
    manutd: {
        name: "Manchester United FC",
        table: {
            played: 38,
            wins: 27,
            loss: 6,
            draws: 5
        }
    },
    livepool: {
        name: "Liverpool FC",
        table: {
            played: 38,
            wins: 29,
            loss: 8,
            draws: 1
        }
    },
    chelsea: {
        name: "Chelsea FC",
        table: {
            played: 38,
            wins: 23,
            loss: 3,
            draws: 12
        }
    },
    arsenal: {
        name: "Arsenal FC",
        table: {
            played: 38,
            wins: 26,
            loss: 11,
            draws: 1
        }
    },
    manutd: {
        name: "Manchester City FC",
        table: {
            played: 38,
            wins: 31,
            loss: 5,
            draws: 2
        }
    },
    manutd: {
        name: "Tottenham Hotspur FC",
        table: {
            played: 38,
            wins: 21,
            loss: 12,
            draws: 5
        }
    }
}




// Q1. Write a function that returns a promise to get the league data.
function getData() {
    return new Promise((res) => {
        res(league_data)
    })
}

// getData().then((res) => console.log(res))



// Q2. Add 'pts' property to the table. (using Map).
//     Pts calculation:  win = 3 pts , draw = 1pt , loss = 0 pts.

function addPts() {
    return Object.keys(league_data).map(function (key, index) {
        const obj = league_data[key]
        const points = obj.table.wins * 3 + obj.table.draws
        obj["table"]["points"] = points
        return obj
    });
}

// console.log(addPts())


// Q3. Sort the data based on the highest to lowest pts.
//     If two teams have same pts ..sort them based on name.
function sortData() {
    const data = addPts()
    const sortedData = (data.sort((a, b) => {
        if (b.table.points === a.table.points) {
            return b.name - a.name
        } else {
            return b.table.points - a.table.points
        }
    }))
    return sortedData
}

// console.log(sortData())


// // Q4. Write a method to generate data in the following form
// //     {
// //         team: [wins, losses], 
// //     }

function genrateData() {
    let newData = Object.keys(league_data).reduce((acc, pre) => {
        let obj = league_data[pre]
        acc[obj.name] = [obj.table.wins, obj.table.loss]
        return acc
    }, {})
    console.log(newData)
}

// genrateData()




// // Q5. Copy the league_data into another object.
function copyData() {
    const copyObj = Object.keys(league_data).reduce((res, cur) => {
        const obj = league_data[cur]
        const table = obj.table
        res[cur] = { ...obj, table: { ...table } }
        return res
    }, {})
    console.log(copyObj)
}

// copyData()
