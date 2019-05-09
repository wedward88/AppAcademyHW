function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

function madLib(verb, adj, noun) {
    console.log('We shall '+ verb + ' the ' + adj + ' ' + noun + '.');
}

madLib('make', 'worst', 'guac')



function isSubstring(searchString, subString) {

    var arr = searchString.split(" ");
    console.log(arr.includes(subString));
}

isSubstring("time to program", "time")
isSubstring("Jump for joy", "joys")

function fizzBuzz(array) {
    var arr = []
    for (let i = 0; i < array.length; i++) {
        if {(array[i] % 3 == 0 || array[i] % 5 == 0) && !(array[i] % 3 == 0 && array[i] % 5 == 0);
            arr.push(i);
        }
    }
    console.log(arr);
}


fizzBuzz([3, 5, 10, 15, 16, 30, 31])