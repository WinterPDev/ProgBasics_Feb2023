
function makeRamen(egg, broth, meat, spicy) {

    // function code goes here
    var RamenOrder = [];

    RamenOrder.push(egg, broth, meat, spicy);
    // console.log(RamenOrder);


    return RamenOrder;
}

// makeRamen(true, 'Shoyu', 'chashu', 'spicy')
// makeRamen(egg=true, broth='Shoyu', meat='chashu', spicy='spicy');


var RamenOrder1 = makeRamen(true, 'Shoyu', 'chashu', 'spicy')
var RamenOrder2 = makeRamen(false, 'Spicy Miso', 'Chicken', 'not spicy')

console.log(RamenOrder1);
console.log(RamenOrder2);
function hello() {
    console.log('hello');
}

hello(); // console.log('hello');

console.log('Dojo');


// Output: hello
// Output2: Dojo








function hello() {
    console.log('hello');
    return 15;
}



// Console logs 'hello'
// returns the number 15
var result = hello();
// var result = 15;
console.log('result is', result); // Output: 'result is 15'


