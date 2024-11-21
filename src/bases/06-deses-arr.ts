

const character =['Goku','Vegeta','Trunks','Goten'];

const [g,v,t,g2,g3 ='Yamoshi'] = character;

const returnArray = () => {

    return [123,'ABC'] as const; // as consta define que el primer valños es numero y el segundo un string
}

const [numbers, letters] = returnArray();


// console.log(numbers, letters.toLowerCase());
