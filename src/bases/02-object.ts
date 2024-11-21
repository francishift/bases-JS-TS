
export const person = {

    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 5132,
        lat: 14.23232,
        lng: 34.5667
    }
    

}; // as const


const person2 = structuredClone(person);

person2.lastName = 'Parker';
person2.address.city ='LA';

console.log({person});
console.log({person2});


