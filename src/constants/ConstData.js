const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const tlMonth = function (f) {
    let tl = [];
    month.forEach((item) => {
        tl.push(f(item));
    });
    return tl;
};
const getDataSet = function (name, arr, type) {
    switch (type) {
        case 1:
            return {
                label: name,
                backgroundColor: 'rgba(78,255,56,0.2)',
                borderColor: 'rgb(78,255,56)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(78,255,56,0.4)',
                hoverBorderColor: 'rgb(78,255,56)',
                data: arr
            };
        case 2:
            return {
                label: name,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: arr
            };
        default:
            return {
                label: name,
                backgroundColor: 'rgba(78,255,56,0.2)',
                borderColor: 'rgb(78,255,56)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(78,255,56,0.4)',
                hoverBorderColor: 'rgb(78,255,56)',
                data: arr
            };
    }
};
const getDoughnutDatasets = function (array) {
    return array.map((item) => {
        return {
            data: item,
            backgroundColor: item.map(() => getRandomColor())
        }
    });
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const timeDelay = 500;
export {tlMonth, getDataSet, getDoughnutDatasets, timeDelay};