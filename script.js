$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let currentAP = 100;
let currentHP = 100;

const attacks = [
    {name: 'arcane scepter', apCost: 12, hpDamage: 14},
    {name: 'entangle', apCost: 23, hpDamage: 9},
    {name: 'dragon blade', apCost: 38, hpDamage: 47},
    {name: 'star fire', apCost: 33, hpDamage: 25}
]
// console.log('attacks :', attacks);


function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    $('.attack-btn.arcane-sceptre').on('click', arcaneScepterAttack);
    $('.attack-btn.entangle').on('click', entangleAttack);
    $('.attack-btn.dragon-blade').on('click', dragonBladeAttack);
    $('.attack-btn.star-fire').on('click', starFireAttack);
}


function arcaneScepterAttack () {
    console.log('in arcaneScepterAttack');
    currentAP -= attacks[0].apCost;
    currentHP -= attacks[0].hpDamage;
    renderAPHP();
}// end arcaneScepterAttack

function entangleAttack () {
    console.log('in entangleAttack');
    currentAP -= attacks[1].apCost;
    currentHP -= attacks[1].hpDamage;
    renderAPHP();
}// end entangleAttack

function dragonBladeAttack () {
    console.log('in dragonBladeAttack');
    currentAP -= attacks[2].apCost;
    currentHP -= attacks[2].hpDamage;
    renderAPHP();
}// end dragonBladeAttack

function starFireAttack () {
    console.log('in starFireAttack');
    currentAP -= attacks[3].apCost;
    currentHP -= attacks[3].hpDamage;
    renderAPHP();
}// end starFireAttack


function renderAPHP () {
    // console.log('current hp', currentHP);
    if (currentAP < 0 ) {
        currentAP = 0;
    } 
    if (currentHP < 0 ) {
        currentHP = 0;
    }
    $('.ap-text').html(`${currentAP} AP`);
    $('.hp-text').html(`${currentHP} HP`);
}