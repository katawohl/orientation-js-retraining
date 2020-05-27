'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

function reverse(string: string) {
    let reversedString: string = "";

    for (let i: number = string.length - 1; i >= 0; i--) {
        reversedString += string.charAt(i);
    }

    return reversedString;
}

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reverse(toBeReversed));

export = reverse;