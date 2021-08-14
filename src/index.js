module.exports = function toReadable(number) {

    const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const arr1 = [, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let arrOfNumber = String(number).split(''); // [9, 9, 0]
    if (number < 100) { arrOfNumber.unshift(0) }
    if (number < 10) { arrOfNumber.unshift(0) }


    let result = '';
    if (number == 0) {
        result = 'zero';
    }
    if (number > 99) {
        result += `${arr[arrOfNumber[0]]} hundred `;
    };


    if (arrOfNumber[1] < 2) {
        result += arr[+(arrOfNumber[1] + arrOfNumber[2])]

    }
    else if (arrOfNumber[1] >= 2 && arrOfNumber[2] !== 0) {
        result += arr1[arrOfNumber[1]] + ' ' + arr[arrOfNumber[2]];
    }
    else if (arrOfNumber[1] >= 2 && arrOfNumber[2] == 0) {
        result += arr1[arrOfNumber[1]];
    }
    return result.trim();
}
