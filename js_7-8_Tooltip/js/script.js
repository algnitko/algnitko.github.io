$(function() {
    $('*').css({
    margin: '0',
    padding: '0'
  });

  $('.wrapper').css({
    border: '1px solid gray',
    height: '300px',
    width: '600px',
    overflowY: 'auto'
  });

  $('.form').css({
    border: '1px solid gray',
    width: '550px',
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    fontFamily: 'Arial',
    color: '#111'
  });

  var title = $("input.Firstname").attr("title");
  var title1 = $("input.Lastname").attr("title");
  var title2 = $("input.Address").attr("title");
  $("#first").append("<span class='f'></span>");
  $("#second").append("<span class='s'></span>").css('display', 'block');
  $("#address").append("<span class='a'></span>");
  $('.f').text(title);
  $('.s').text(title1);
  $('.a').text(title2);
  $('.f, .s, .a').css({
    display: 'none',
    width: '200px',
    boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',      
    padding: '5px',
    borderRadius: '5px'
  });

  $('.Firstname, .Lastname, .Address').removeAttr('title');

  $('.Firstname, .Lastname, .Address').css('margin', '2px 5px 30px 10px');

  $('.Firstname').hover(
         function () {
           $('.f').show()
         }, 
         function () {
           $('.f').hide()
         }  
      );

  $('.Lastname').hover(
         function () {
           $('.s').show()
         }, 
         function () {
           $('.s').hide()
         }  
      );

  $('.Address').hover(
         function () {
           $('.a').show()
         }, 
         function () {
           $('.a').hide()
         }  
      );

  $('.Address').css('margin', '2px 5px 50px 20px');

  $('.Showhelp').css({
      display: 'block',
      fontSize: '16px',
      fontFamily: 'Arial',
      color: '#111',
      height: '30px',
      width: '100px',
      margin: '0px 0px 0px 15px',
      textAlign: 'center',
      borderRadius: '5px',
      background: '#ccc',
      lineHeight: '1.8',
      textDecoration: 'none'
    })
    .on('click', function (e) {
        $('.f, .s, .a').show();
        e.preventDefault();
        });;
})