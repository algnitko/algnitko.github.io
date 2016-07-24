function pow(x, n) {
  var result = 1;

  if (n > 0) {
  	for (var i = 0; i < n; i++) {
    result *= x;
  }
} else if (n < 0) {
  	for (var i = 0; i > n; i--) {
  	result *= 1/x;
  }
} else if (n == 0) {
	result = 1;
} else {
	alert('Введите число');
	return;
}

  return result;
  
}

var x = prompt("x?", '');

if ( x-Math.floor(x)==0 ) {
var n = prompt("n?", ''); 
} else {
  alert('Введите целое число');
} 


if ( n-Math.floor(n)==0 ) { 
   console.log(pow(x, n)); 
} else {
  alert('Введите целое число');
} 