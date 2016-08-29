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

  $('.help1, .help2, .help3').css({
    display: 'none',
    width: '200px',
    boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',      
    padding: '5px',
    borderRadius: '5px'
  });

  $('.Firstname, .Lastname, .Address').css('margin', '2px 5px 30px 10px');

  $('.Firstname').hover(
         function () {
           $('.help1').show()
         }, 
         function () {
           $('.help1').hide()
         }  
      );

  $('.Lastname').hover(
         function () {
           $('.help2').show()
         }, 
         function () {
           $('.help2').hide()
         }  
      );

  $('.Address').hover(
         function () {
           $('.help3').show()
         }, 
         function () {
           $('.help3').hide()
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
        $('.help1, .help2, .help3').show();
        e.preventDefault();
        });;
})