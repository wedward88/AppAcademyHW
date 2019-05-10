// window.setTimeout( function(){
//     alert('HAMMERTIME');
// } , 5000 );


// function hammerTime(time) {
//     window.setTimeout(function(){
//         alert(`${time} is hammertime!`);
//     }, time);
// };

const readline = require('readline');

const reader = readline.createInterface({
    // it's okay if this part is magic; it just says that we want to
    // 1. output the prompt to the standard output (console)
    // 2. read input from the standard input (again, console)

    input: process.stdin,
    output: process.stdout
});

// reader.question("What is your name?", function (answer) {
//     console.log(`Hello ${answer}!`);
// });

// console.log("Last program line");

reader.question("Would you like some tea?", function (answer){
    first = answer;
    console.log(`${answer}`);

    if (first === "yes") {
        reader.question("Would you like some biscuits?", function (answer) {
            second = answer;
            console.log(`${answer}`);
            const firstRes = (first === 'yes') ? 'do' : 'don\'t';
            const secondRes = (second === 'yes') ? 'do' : 'don\'t';
            console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
            reader.close();
        });
    } else {


            const firstRes = (first === 'yes') ? 'do' : 'don\'t';
            const secondRes = (second === 'yes') ? 'do' : 'don\'t';
            console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
            reader.close();
        }
    
});

