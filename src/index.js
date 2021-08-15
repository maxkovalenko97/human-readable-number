module.exports = function toReadable(number) {

    const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const arr1 = [, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    // do array from numb [9, 8, 9]
    let arrOfNumber = String(number).split('');
    // do [0,9,0]
    if (number < 100) {
        arrOfNumber.unshift(0)
    }
    // do [0,0,9]     
    if (number < 10) {
        arrOfNumber.unshift(0)
    }

    // init result str
    let result = '';

    // zero make mistake
    if (number == 0) {
        result = 'zero';
    }
    // add hundred
    if (number > 99) {
        result += `${arr[arrOfNumber[0]]} hundred `;
    };

    // 1-20
    if (arrOfNumber[1] < 2) {
        result += arr[+(arrOfNumber[1] + arrOfNumber[2])]
    }
    // 20,30,40,50...
    else if (arrOfNumber[1] >= 2 && arrOfNumber[2] !== 0) {
        result += arr1[arrOfNumber[1]] + ' ' + arr[arrOfNumber[2]];
    }
    // add 1-9 for end
    else if (arrOfNumber[1] >= 2 && arrOfNumber[2] == 0) {
        result += arr1[arrOfNumber[1]];
    }

    return result.trim();
}
