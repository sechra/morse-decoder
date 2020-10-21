const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'space': ' ',
};
function decode(expr) {
    var char = [];
    for(var i = 0; i < expr.length; i += 10) {
        char.push(expr.slice(i, i + 10));
    }
    function parseMorse(arr) {
        return arr.map((str) => {
        if (str === '**********') return 'space';
        str = str.toString();
        var newStr = "";
        do {
          newStr += str.slice(0, 2) === '11' ? '-' : str.slice(0, 2) == '10' ? '.' : '';
          str = str.slice(2);
          if (!str.length) break;
        } while (true);
        return newStr;
      });
    }
    return parseMorse(char).map(el => MORSE_TABLE[el]).join('')
}

module.exports = {
    decode
}