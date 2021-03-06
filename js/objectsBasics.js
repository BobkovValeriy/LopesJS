"use strict";

//initialization Quality Of Code page functions
objectsBasicsInit()

function objectsBasicsInit() {
    const objectsBsicsFunctions = [
        initObjectsExercise1,
        initObjectsExercise2,
        initObjectsExercise4,
        initObjectsExercise5,
        initObjectsMethodsExercise2,
        initObjectsMethodsExercise3,
        initObjectsMethodsExercise4,
        initObjectsMethodsExercise5,
        initObjectsMethodsExercise6,
        initObjectsConstructorsExercise1,
        initObjectsConstructorsExercise2,
        initObjectsConstructorsExercise3,
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

//examples objects methods

function initObjectsMethodsExercise2() {
    const objectsMethodsExercise2Button = document.querySelector('.button__objects-methods-exercise2');

    objectsMethodsExercise2Button.addEventListener('click', function (event) {
        alert('obj.go(); ?? (obj.go)(); ?????????? [object Object] ?????????????????? ?? ?????????? ???????? ?????????????? ?????????? ?????????????? ?????????????????????? ???????????? ??????????????');
        alert('(method = obj.go)(); ?????????? undefined ?????????????????? method ?????? ?????? ?????????????????? ?????????????? ?????? ???????????? ???????? ?????????????? ?????? "use strict"');
        alert('(obj.go || obj.stop)() ?????????? undefined ?????????????????? ?????? ???????????????? || ?????????????? ?????????????????? ???????? ?????????????????? ???????????????????????????? this ???? ?????????? ???????????????????? ?? ???????? ??????????????????');
    });
};

function initObjectsMethodsExercise3() {
    const objectsMethodsExercise3Button = document.querySelector('.button__objects-methods-exercise3');

    objectsMethodsExercise3Button.addEventListener('click', function (event) {
        alert('?????????? ???????????? ?????????????????? ?? ?????????????????????? ???????????????????? let user = makeUser(); ???????????????? ref: ???????????? undefined ?? ?? undefined ?????? ??????????????')
    });
};

function initObjectsMethodsExercise4() {
    const objectsMethodsExercise4Button = document.querySelector('.button__objects-methods-exercise4');

    objectsMethodsExercise4Button.addEventListener('click', function (event) {
        const calculator = {
            a: 0,
            b: 0,

            read() {
                this.a = +prompt('Input a value', 0);
                this.b = +prompt('Input b value', 0);
            },
            sum() {
                return this.a + this.b;
            },
            mul() {
                return this.a * this.b;
            },
        };
        calculator.read();
        alert(calculator.sum());
        alert(calculator.mul());
    });
};

function initObjectsMethodsExercise5() {
    const objectsMethodsExercise5Button = document.querySelector('.button__objects-methods-exercise5');

    objectsMethodsExercise5Button.addEventListener('click', function (event) {
        let ladder = {
            step: 0,
            up() {
                this.step++;
                return this;
            },
            down() {
                this.step--;
                return this;
            },
            showStep: function () {
                alert(this.step);
                return this;
            }
        };
        ladder.up().up().down().showStep();
    });
};

function initObjectsMethodsExercise6() {
    const objectsMethodsExercise6Button = document.querySelector('.button__objects-methods-exercise6');

    objectsMethodsExercise6Button.addEventListener('click', function (event) {
        const user = {
            name: 'user',
        };
        let countOfUse = 0;

        function use(func) {
            func();
            countOfUse += 1;
        };
        function retrnTwo() {
            alert(2);
        };
        function retrnNameOfUser1() {
            alert(user.name);
        };
        function retrnNameOfUser2() {
            alert(this.name);
        };

        use(retrnTwo);
        use(retrnNameOfUser1);
        user.rtrn = retrnNameOfUser2;
        use(() => user.rtrn());
    });
};

//examples objects constructors
function initObjectsConstructorsExercise1() {
    const objectsConstructorsExercise1Button = document.querySelector('.button__objects-constructors-exercise1');

    objectsConstructorsExercise1Button.addEventListener('click', function (event) {
        const constructorsExercise1Object = {};
        function A() { return constructorsExercise1Object; };
        function B() { return constructorsExercise1Object; };

        alert(new A() == new B());
        alert('const constructorsExercise1Object = {}; \n function A() { return constructorsExercise1Object; }; \n function B() { return constructorsExercise1Object; }; \n alert( new A() == new B() );');
    });
};

function initObjectsConstructorsExercise2() {
    const objectsConstructorsExercise2Button = document.querySelector('.button__objects-constructors-exercise2');

    objectsConstructorsExercise2Button.addEventListener('click', function (event) {
        function Calculator() {

            this.read = function () {
                this.a = +prompt('Input a value', 0);
                this.b = +prompt('Input b value', 0);
            };
            this.sum = function () {
                return this.a + this.b;
            };
            this.mul = function () {
                return this.a * this.b;
            };
        };

        let nameOfCalculator = prompt('please enter a name of calculator', 'calculator');

        nameOfCalculator = new Calculator();
        nameOfCalculator.read();

        alert("Sum=" + nameOfCalculator.sum());
        alert("Mul=" + nameOfCalculator.mul());
    });
};

function initObjectsConstructorsExercise3() {
    const objectsConstructorsExercise3Button = document.querySelector('.button__objects-constructors-exercise3');

    objectsConstructorsExercise3Button.addEventListener('click', function (event) {
        function Accumulator(startingValue) {
            this.value = startingValue
            this.read = function () {
                this.value += +prompt('Input a value', 0);
            };
        };
        let nameOfAccumulator = prompt('please enter a name of Accumulator', 'accumulator');
        let startValue = +prompt('please enter a starting value', 0)

        nameOfAccumulator = new Accumulator(startValue);
        nameOfAccumulator.read();
        nameOfAccumulator.read();
        alert(nameOfAccumulator.value);
    });
};