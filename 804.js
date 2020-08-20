
/**
 * @param {string[]} words
 * @return {number}
 */

//  construct the morseCode hashtable: 
//  morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
//  alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
//  morseCode = {}
//  alphabet.forEach((v, i) => { morseCode[alphabet[i]] = morse[i] })
//  console.log(morseCode)


//speed 88, memory 14
var uniqueMorseRepresentations = function (words) {
    morseCode = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..'
    }
    return [...new Set(
        words.map((word) =>
            [...word].map((letter, i) =>
                morseCode[letter]).join("")
        ))].length
};


console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg", "davidharrington"]))




