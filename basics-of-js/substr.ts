'use strict';

function substr(str: string, keyWord: string) {
    return str.indexOf(keyWord);
}

console.log(substr("this is what I'm searching in", "searching"));

console.log(substr("this is what I'm searching in", "not"));