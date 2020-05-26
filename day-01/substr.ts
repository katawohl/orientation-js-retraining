'use strict';

function substr(str: string, keyWord: string) {
    return str.indexOf(keyWord);
}

// should print: `17`
console.log(substr("this is what I'm searching in", "searching"));

// should print: `-1`
console.log(substr("this is what I'm searching in", "not"));