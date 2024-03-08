//
// Object destructuring
//
// const person = {
//     name:'Jifeng',
//     age: 38,
//     location: {
//         city: 'Atlanta',
//         temp:222
//     }

// }

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`)

// const { city, temp:temperature } = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };


// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);





//
// Array destructuring
//


// const address = [ '1299 S Juniper Street', 'Philadelphia', 'Pennsylvana', '19147'];

// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice,] = item;

console.log (`A medium ${itemName} costs ${mediumPrice}`)

