let a = +prompt("Введите первое число:");
let c = prompt("Введите желаемую операцию(+,-,*,/):");
let b = +prompt("Введите второе число:");

switch(c){
    case "+":
        alert(`Получается ${a} + ${b} = ${a + b}`);
        break;
    case "-":
        alert(`Получается ${a} - ${b} = ${a - b}`);
        break;
    case "*":
        alert(`Получается ${a} * ${b} = ${a * b}`);
        break;
    case "/":
        alert(`Получается ${a} / ${b} = ${a / b}`);
        break;
}
