var today = new Date();
var hourNew = today.getHours();
var greeting;

if (hourNew > 18) {
    greeting = "Добрый вечер!";
}
else if (hourNew > 12) {
    greeting = "Добрый день!";
}
else if (hourNew > 0) {
    greeting = "Доброе утро!";
}
else {
    greeting = "Приветствуем!";
}

document.write('<h3>' + greeting + '<h3>');