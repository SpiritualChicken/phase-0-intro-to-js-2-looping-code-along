// Code your solutions in this file



function writeCards(name, eventName) {
    let newArray = [];
    for (let i =0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
        debugger;
    }
    return newArray;
  
}

function countDown(number) { 
    for (number; number >= 0; number--) {
        console.log(number)
    }
}
countDown();