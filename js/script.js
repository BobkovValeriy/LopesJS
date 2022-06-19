"use strict";

//initialization of all functions
appInit();

function appInit() {
    const appFunctions = [
        initBurgerMenu,
        initHover,
        initSectionExpandArrows,
    ];

    const homeworkFunctions = [
        initHelloWorldHomework,
        initVariableHomework,
        initInteractionHomework,
        initBaseOperator,
        initBranching1,
        initBranching2,
        initLogicOperators,
        initCikles1,
        initCikles2,
        initCikles3,
        initCikles4,
    ];

    appFunctions.forEach(func => func());
    homeworkFunctions.forEach(func => func());
}
//it`s a menu burger logic
function initBurgerMenu() {
    const body = document.querySelector('body');
    const menuBurger = document.querySelector('.menu__burger');
    const menuPunkts = document.querySelector('.menu__punkts');

    menuBurger.addEventListener("click", function (event) {
        menuBurger.classList.toggle('active')
        menuPunkts.classList.toggle('active')
        body.classList.toggle('lock')
    })
}

//it will init hover class in table
function initHover() {
    const hoover = document.querySelectorAll('.hoverable');
    hoover.forEach(hooverItem => {
        hooverItem.addEventListener('mouseover', function (event) {
            hooverItem.classList.add('hoover');
        });
        hooverItem.addEventListener('mouseout', function (event) {
            hooverItem.classList.remove('hoover');
        });
    });
}

//it will spin arrows
function initSectionExpandArrows() {
    const example = document.querySelectorAll('.example-item');

    example.forEach(exampleItem => {
        exampleItem.addEventListener("click", function (event) {
            const rotate = exampleItem.querySelector('.marker');
            rotate.classList.toggle('clicked');
            exampleItem.nextElementSibling.classList.toggle('display__none');
        });
    });
}

//example of alert work
function initHelloWorldHomework() {
    const helloWorld = document.querySelector(".button__form-hello");

    helloWorld.addEventListener('click', function (event) {
        const message = document.forms.hello_world.helloWorldInput.value
        if (message != "")
            alert(message);
        else
            alert('Ну напиши чёнить!')
    });
}

//example of variables work
function initVariableHomework() {
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
}

//example of prompt work
function initInteractionHomework() {
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
}

//example of math work and chage data types
function initBaseOperator() {
    const baseOperatorButton = document.querySelector(".button__baseoperators-mathitem");
    const baseOperatorButtonCancel = document.querySelector(".button__sbros-mathitem");
    const answer1 = document.querySelector(".answer1");
    const answer2 = document.querySelector(".answer2");

    baseOperatorButton.addEventListener('click', function (event) {
        let expression = document.forms.baseOperatorsMath.baseOperatorsMathInput.value;

        if (expression !== "") {
            let result = eval(expression);
            let answer1TextElementContent = answer1.innerHTML + " " + result;
            answer1.innerHTML = answer1TextElementContent;
            let answer2TextElementContent = answer2.innerHTML + " " + typeof (result)
            answer2.innerHTML = answer2TextElementContent
        }
        else
            alert('Ну напиши чёнить!');
    });
    baseOperatorButtonCancel.addEventListener('click', function (event) {
        answer1.innerHTML = 'Результат:';
        answer2.innerHTML = 'Тип данных:';
        document.forms.baseOperatorsMath.baseOperatorsMathInput.value = "";
    });
}
//example1 of branching
function initBranching1() {
    const branching1 = document.querySelector('.button__form-branching1')

    branching1.addEventListener('click', function (event) {
        let branching1answer = prompt('Какое "официальное" название JavaScript?', '')
        if (branching1answer === 'ECMAScript') {
            alert('Верно!')
        } else {
            alert('Не знаете?');
            alert('“ECMAScript”!');
        }

    })
}
//example2 of branching
function initBranching2() {
    const branching2 = document.querySelector('.button__form-branching2');

    branching2.addEventListener('click', function (event) {
        let branching2answer = prompt('Введите число, а мы определим его знак', '')


        let subBranching2answer = (branching2answer > 0) ? '1' :
            (branching2answer < 0) ? '-1' : '0';
        alert(subBranching2answer);
    });
}
//example logic operators
function initLogicOperators() {
    const logicOperators = document.querySelector('.button__form-logicoperators');

    logicOperators.addEventListener('click', function (event) {
        let login = prompt('Who are there?', '')

        if (login == '' || 'null') {
            alert('Отменено')
        } else if (login == 'Админ') {
            let password = prompt('Please enter your pass', '')

            if (password == '' || 'null') {
                alert('Отменено')
            } else if (password == 'Я Главный') {
                alert('Здравствуйте!')
            } else {
                alert('Неверный пароль')
            }
        } else {
            alert('Я вас не знаю')
        }
    })
}
//example cikles 1
function initCikles1() {
    const cikles1 = document.querySelector('.button__cikles-1');

    cikles1.addEventListener('click', function (event) {
        for (let i = 1; i < 11; i++) {
            if (i % 2 == 0) {
                alert(i);
            }
        }
    });
};
//example cikles 2
function initCikles2() {
    const cikles2 = document.querySelector('.button__cikles-2');

    cikles2.addEventListener('click', function (event) {
        let i = 0;

        while (i < 3) {
            alert(`number ${i}!`);
            i++;
        }
    });
};
//example cikles 3
function initCikles3() {
    const cikles3 = document.querySelector('.button__cikles-3');

    cikles3.addEventListener('click', function (event) {
        let cikles3val

        do {
            cikles3val = prompt('введи число, большее 100', 0);
        } while (cikles3val <= 100 && cikles3val);
    });
};
//example cikles 4
function initCikles4() {
    const cikles4 = document.querySelector('.button__cikles-4');

    cikles4.addEventListener('click', function (event) {
        let cikles4operand = document.forms.cikles.formCiklesInput.value;

        nextPrime:
        for (let i = 2; i <= cikles4operand; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }
            alert(i)
        };
    });
}