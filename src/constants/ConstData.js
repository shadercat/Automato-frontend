const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const tlMonth = function (f) {
    let tl = [];
    month.forEach((item, i, arr) => {
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
const timeDelay = 500;
export {tlMonth, getDataSet, timeDelay};