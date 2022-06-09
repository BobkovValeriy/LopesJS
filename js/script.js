"use strict";
const menuBurger = document.querySelector('.menu__burger');
console.log(menuBurger);
const menuPunkts = document.querySelector('.menu__punkts');
console.log(menuPunkts);
const body = document.querySelector('body');
menuBurger.addEventListener("click", function (event) {
    menuBurger.classList.toggle('active')
    menuPunkts.classList.toggle('active')
    body.classList.toggle('lock')
})
const hoover = document.querySelectorAll('.hoverable');
hoover.forEach(hooverItem => {
    hooverItem.addEventListener('mouseover', function (event) {
        hooverItem.classList.add('hoover');
    });
    hooverItem.addEventListener('mouseout', function (event) {
        hooverItem.classList.remove('hoover');
    });
});
const example = document.querySelectorAll('.example-item');
const exampleItems = document.querySelectorAll('.example-items');
example.forEach(exampleItem => {
    exampleItem.addEventListener("click", function (event) {
        const rotate = exampleItem.querySelector('.marker');
        rotate.classList.toggle('clicked');
        exampleItem.nextElementSibling.classList.toggle('display__none');
    });
});
const helloWorld = document.querySelector(".button__form-hello");
helloWorld.addEventListener('click', function (event) {
    const message = document.forms.hello_world.helloWorldInput.value
    if (message != "")
        alert(message);
    else
        alert('Ну напиши чёнить!')
});
const variable = document.querySelector(".button__form-variable");
variable.addEventListener('click', function (event) {
    const name = document.forms.variables.variableInput.value
    if (name != "") {
        let admin = name;
        alert('Переменная admin = ' + admin);
    }
    else
        alert('Ну напиши чёнить!')
});
const interaction = document.querySelector(".button__form-interaction");
interaction.addEventListener('click', function (event) {
    let name = prompt('Your name?', "nothing?")
    if (name != "") {
        alert('Your name is ' + name + '!');
    }
    else {
        alert('Ну напиши чёнить!');

    }
});
