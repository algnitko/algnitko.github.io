var currentUserName = [];

for (var i = 0; i < 5; i++) {
  currentUserName.push(prompt("Введите имя", ''));
}

var user = prompt("Введите имя пользователя", '');
var result ="";

for (var i = 0; i < currentUserName.length; i++) {
  if (user == currentUserName[i]) result = currentUserName[i];
}
if (result=="") alert("Неверное имя пользователя");
else alert(result + ", вы успешно вошли");