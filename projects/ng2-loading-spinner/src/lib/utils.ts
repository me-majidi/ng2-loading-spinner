export const findIndex = function (arr: any[], item: any) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
};


export const objectValues = function (obj) {
    let values = [];

    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            values.push(obj[item]);
        }
    }

    return values;
};