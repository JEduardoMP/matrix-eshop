// const budget = 60;
// const keyboards = [40, 50, 60];
// const drives = [5, 2, 8];
const budget = 10;
const keyboards = [3, 1];
const drives = [5, 2, 8];

const electronicShop = (budget, keyboards, drives) => {

    let result = [];
    for (let i = 0; i < keyboards.length; i++) {

        for (let j = 0; j < drives.length; j++) {

            if (keyboards.length == 1 && keyboards[i] > budget || 
                drives.length == 1 && drives[j] > budget) {
                return -1
            }

            if ((keyboards[i] + drives[j]) <= budget) {
                result.push(keyboards[i] + drives[j])
            }  

        }

    }

    if (result.length == 1) {
        return result;
    }

    result.sort();
    const lastIndex = result.length - 1

    return result[lastIndex];

}

console.log(electronicShop(budget, keyboards, drives));