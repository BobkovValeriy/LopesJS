"use strict";

//initialization Quality Of Code page functions
objectsBasicsInit()

function objectsBasicsInit() {
    const objectsBsicsFunctions = [
        initObjectsExercise1,
        initObjectsExercise2,
        initObjectsExercise4,
        initObjectsExercise5,
    ];
    objectsBsicsFunctions.forEach(func => func());
}

//examples objects
function initObjectsExercise1() {
    const objectsExercise1Button = document.querySelector('.button__objects-exercise1')

    objectsExercise1Button.addEventListener('click', function (event) {
        //Here we must adhere to a certain sequence of actions.
        const user = {};

        alert('We create an user object');

        user.name = 'Jhon';
        alert('We add  Jhon into user object with key: name');
        console.log(user.name);

        user.surname = 'Smith';
        alert('We add  Smith into user object with key: surname');
        console.log(user.surname);

        user.name = 'Pete';
        alert('We change  Jhon to Pete in user object with key: name');
        console.log(user.name);

        delete user.name;
        alert('We deleted name in user object');
        for (let key in user) {
            console.log(key);
            console.log(user[key]);
        }
    });
}

function initObjectsExercise2() {
    const objectsExercise2Button = document.querySelector('.button__objects-exercise2')

    objectsExercise2Button.addEventListener('click', function (event) {
        let isEmpty = (obj) => {
            let lenght = 0;
            for (let key in obj) {
                lenght += 1;
            }
            if (lenght > 0) {
                return false;
            } else {
                return true;
            }
        }

        const schedule = {};
        alert('We create a schedule object');
        alert(isEmpty(schedule));

        schedule["8:30"] = "get up";
        alert('We add  get up into schedule object with key: 8:30');
        alert(isEmpty(schedule));
    });
}

function initObjectsExercise4() {
    const objectsExercise4Button = document.querySelector('.button__objects-exercise4')
    let sum = 0;
    const salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
    }

    objectsExercise4Button.addEventListener('click', function (event) {
        for (let key in salaries) {
            sum += salaries[key];
        }
        alert(sum);
    });
}

function initObjectsExercise5() {
    const objectsExercise5Button = document.querySelector('.button__objects-exercise5')
    const menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    objectsExercise5Button.addEventListener('click', function (event) {
        let multiplyNumeric = (obj) => {
            for (let key in obj) {
                //console.log(typeof obj[key]);
                if (typeof obj[key] == 'number') {
                    obj[key] *= 2;
                } else continue;
            }
        }
        multiplyNumeric(menu);
        console.log(menu);
    });
}