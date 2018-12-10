// Function constructor
// var john = {
//     name: 'John',
//     age: 25,
//     job: 'teacher'
// };

// var Person = function (name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// };

// Person.prototype.calculateAge = function () {
//     console.log(this.age);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 25, 'teacher');
// var jane = new Person('Jane', 30, 'designer');
// var mark = new Person('Mark', 35, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);







// Object.create
// var personProto = {
//     calculateAge: function () {
//         console.log(age);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.age = 25;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane' },
//     age: { value: 27 },
//     job: { value: 'developer' },
// });







// Primitives vs Objects

// // Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// // Objects
// var daniel = { name: 'Daniel', age: 33 };
// var laura = daniel;
// daniel.name = 'Pedro';
// daniel.age = 'Hola';
// console.log(daniel);
// console.log(laura);

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };
// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco'
// }
// change(age, obj);
// console.log(age);
// console.log(obj.city);







// IIFE
// (function () {
//     console.log('Helloo!');
// })();






// Closures
// function retirement(retirementAge) {
//     var a = ' years left until retirement.';

//     return function (yearOfBirth) {
//         var age = 2018 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGER = retirement(65);
// var retirementCOL = retirement(70);
// retirementUS(1993);
// retirementGER(1993);
// retirementCOL(1993);






// Bind, Call, Apply
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log(`${this.name} Goog ${timeOfDay}, ladies and gentlemen!`);
        } else if (style === 'friendly') {
            console.log(`${this.name} Hey! Have a nice ${timeOfDay}!`);
        }

    }
};

john.presentation('formal', 'morning');
john.presentation('friendly', 'night');

var emily = {
    name: 'Emily',
    age: 23,
    job: 'developer'
}

john.presentation.call(emily, 'formal', 'morning');
// john.presentation.apply(emily, ['formal', 'morning']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening');
johnFriendly('night');