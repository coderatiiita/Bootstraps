/*
* Log level: Info

 Console.table will display the items (array or object) in a table.
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

console.table(pets);
/*
┌─────────┬─────────┬─────────┬─────┐
│ (index) │  type   │  name   │ age │
├─────────┼─────────┼─────────┼─────┤
│    0    │  'Cat'  │  'Tom'  │ 10  │
│    1    │  'Dog'  │ 'Spike' │ 20  │
│    2    │ 'Mouse' │ 'Jerry' │  5  │
└─────────┴─────────┴─────────┴─────┘
*/

