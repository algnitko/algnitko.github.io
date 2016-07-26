var currentUserName = [];


for (var i = 0; i < 5; i++) {
var test = prompt("Введите имя", "Введите имя!");

   if (test === null) {
       while (test === null) {
       alert("Отмена? Введите имя");
       test = prompt("Введите имя", "Снова введите имя!");
       }
   }
   if (!isNaN(+test)) {
   	   while (!isNaN(+test)) {
       alert("Цифра? Введите имя");
       test = prompt("Введите имя", "Не цифру, введите имя!");
       }
   }
currentUserName.push(test);
}

var user = prompt("Введите имя пользователя", '');
var result ="";

for (var i = 0; i < currentUserName.length; i++) {
  if (user === null) break;
  if (user == currentUserName[i]) result = currentUserName[i];
}
  if (result=='') alert("Неверное имя пользователя");
  else alert(result + ", вы успешно вошли");