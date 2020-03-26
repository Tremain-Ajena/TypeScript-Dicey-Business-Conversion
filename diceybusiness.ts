import $ from 'jquery';

let dieButton = $('#make-die');
let rollButton = $('#roll-die');
let sumButton = $('#sum-die');
let diceCounter = 0;
let diceArray = [];



class Die {
    
    value: number;

    constructor(value: number) {
        this.value = value;
    }
    roll() {
        // should generate a random integer 1-6
        // should set the 'value' property
        // should update the div on the screen w/ the new value

        let nextNumber = Math.floor(Math.random() * 7);
        let dieID = nextNumber;
        // diceClick.remove();
        diceClick.append(dieID);
        console.log('It is me!' + dieID);
    }
};

rollButton.click(function (event) {
    let nextNumber = Math.floor(Math.random() * 7);
    if (dieID == w) {
        // let newValue = nextNumber;
        // diceClick.remove();
        // diceClick.append(dieID);
        diceClick.text(nextNumber);
        dieHolder.append(diceClick);
        $('body').append(nextNumber);

        console.log('It is me!' + dieID);
    };
})

dieButton.click(function (event) {
    let w = Math.floor(Math.random() * 7);
    console.log(w);
    let diceClick = $('<div class="square" id="dice">');
    let dieID = w;
    diceClick.append(dieID);
    dieHolder.append(diceClick);
    $('body').append(dieHolder);

    dieHolder.dblclick(function () {
        diceClick.remove();
    });
});


let diceClick = $('<div class="square" id="dice">');
let dieHolder = $('<div id="dieHolder">');
let w = Math.floor(Math.random() * 7);
let dieID = w;

dieHolder.click(function (e) {
    let nextNumber = Math.floor(Math.random() * 7);
    if (dieID == w) {
        // let dieID = nextNumber;
        // diceClick.remove();
        diceClick.text(nextNumber);
        dieHolder.append(diceClick);
        // $('body').append(nextNumber);
        console.log('It is me!' + nextNumber);
    };
});
