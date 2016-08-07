var test = {
    createWrapper: function (){
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    var body = document.querySelector('body');
    document.body.appendChild(wrapper);
   },
    createHead: function (headerName){
    var header = document.createElement('header');
    header.innerHTML = headerName;
    header.className = 'title';
    var div = document.querySelector('div');
    div.appendChild(header);
   },
    questionNumber: function (question){
    var numberOfQuestion = document.createElement('div');
    numberOfQuestion.innerHTML = question;
    numberOfQuestion.className = 'question';
    var div = document.querySelector('div');
    div.appendChild(numberOfQuestion);
   },
    variantOfAnswer: function (answer) {
    var boxPlusAnswer = document.createElement('div');
    boxPlusAnswer.className = 'boxPlusAnswer';
    var div = document.querySelector('div');
    div.appendChild(boxPlusAnswer);
    var box = document.createElement('input');
    box.className = 'checkBox';
    box.setAttribute('type','checkbox');
    boxPlusAnswer.appendChild(box);  
    var variant = document.createElement('span');
    variant.innerHTML = answer;
    boxPlusAnswer.appendChild(variant);
   },
    checkMyResults: function (myResults){
    var href = document.createElement('a');
    href.innerHTML = myResults;
    href.className = 'href';
    href.setAttribute('href','');
    var div = document.querySelector('div');
    div.appendChild(href);
   }
}

test.createWrapper();

test.createHead('Тест по программированию');

for(var i=1; i<=3; i++) {
  test.questionNumber(i+'. Вопрос №'+i);
  
  for(var j = 1; j<=3; j++) {
    test.variantOfAnswer('Вариант ответа №'+j);
  }
}

test.checkMyResults('Проверить мои результаты');