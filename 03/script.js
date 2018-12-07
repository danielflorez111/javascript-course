// // calculateAge(1993);

// // function calculateAge(year) {
// //     console.log(2018 - year);
// // }

// // var retirement = function (year) {
// //     console.log(65 - (2018 - year));
// // }

// // retirement(1993);

// // console.log(age);
// // var age = 23;
// // console.log(age);


// var a = 'Hello! ';
// first();

// function first() {
//     var b = 'Hi ';
//     second();

//     function second() {
//         var c = 'Hey! ';
//         third();
//         // console.log(a + b + c);
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }

// console.log(this);

// calculateAge(1993);

// function calculateAge(year) {
//     console.log(2018 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    year: 1993,
    calculateAge: function () {
        console.log(this.year);

        function inner() {
            console.log(this);
        }

        inner();
    }
}

john.calculateAge();