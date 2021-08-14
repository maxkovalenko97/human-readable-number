module.exports = function toReadable(number) {

    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const arr1 = [, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let arrOfNumber = String(number).split('');

    let result = '';

    if (number > 99) {
        result += `${arr[arrOfNumber[0]]} hundred `;
    };

    return result.trim();
}
