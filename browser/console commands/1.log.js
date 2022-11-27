/*
* Log level: Info

 Console.log will just display the object.
*/

const pets = [
    {
        type: 'Cat',
        name: 'Tom',
        age: 10
    },
    {
        type: 'Dog',
        name: 'Spike',
        age: 20
    },
    {
        type: 'Mouse',
        name: 'Jerry',
        age: 5
    },
];

// Way 1
const pets = [
    {
        type: 'Cat',
        name: 'Tom',
        age: 10
    },
    {
        type: 'Dog',
        name: 'Spike',
        age: 20
    },
    {
        type: 'Mouse',
        name: 'Jerry',
        age: 5
    },
];/*
[
  { type: 'Cat', name: 'Tom', age: 10 },
  { type: 'Dog', name: 'Spike', age: 20 },
  { type: 'Mouse', name: 'Jerry', age: 5 }
] 
*/

// Way 2
// This also prints the name of the object
console.log({pets});
/*
{
  pets: [
    { type: 'Cat', name: 'Tom', age: 10 },
    { type: 'Dog', name: 'Spike', age: 20 },
    { type: 'Mouse', name: 'Jerry', age: 5 }
  ]
}
*/

//Way 3:  Styling the console in the browser
console.log('%c hello %c world', 'font-size: 100px', 'font-size: 50px');