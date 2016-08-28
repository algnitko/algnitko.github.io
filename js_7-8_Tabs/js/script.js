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

  $('.area').css({
    border: '1px solid gray',
    width: '550px',
    margin: '10px',
    padding: '3px',
    borderRadius: '5px' 
  });

  $('.tabs').css({
    height: '30px',
    width: '540px',
    margin: '3px',
    borderRadius: '5px',
    background: '#ddd'
  });

    $('.tab2_active, .tab3_active').css({
      display: 'none',
      fontSize: '16px',
      fontFamily: 'Arial',
      color: 'white',
      float: 'left',
      height: '28px',
      width: '150px',
      margin: '2px 2px 0px 5px',
      textAlign: 'center',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      background: 'blue',
      lineHeight: '1.5',
      textDecoration: 'none'
    });

  $('.tab1').css({
      fontSize: '16px',
      fontFamily: 'Arial',
      color: '#555',
      display: 'none',
      float: 'left',
      height: '28px',
      width: '150px',
      margin: '2px 2px 0px 5px',
      textAlign: 'center',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      background: '#eee',
      lineHeight: '1.5',
      textDecoration: 'none'
    });

  $('.tab1_active').css({
      display: 'block',
      fontSize: '16px',
      fontFamily: 'Arial',
      color: 'white',
      float: 'left',
      height: '28px',
      width: '150px',
      margin: '2px 2px 0px 5px',
      textAlign: 'center',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      background: 'blue',
      lineHeight: '1.5',
      textDecoration: 'none'
    });

  $('.tab2, .tab3').css({
      fontSize: '16px',
      fontFamily: 'Arial',
      color: '#555',
      display: 'block',
      float: 'left',
      height: '28px',
      width: '150px',
      margin: '2px 2px 0px 5px',
      textAlign: 'center',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      background: '#eee',
      lineHeight: '1.5',
      textDecoration: 'none'
    })
    .hover(
        function () {
        $(this).css('background', '#eef');
        },
        function () {
        $(this).css('background', '#eee');
        }
    );

  $('.tab1').on('click', function (e) {
        $('.tab1, .tab2_active, .tab3_active, .text2, .text3').hide();
        $('.tab1_active, .tab2, .tab3, .text1').css('display', 'block');
        e.preventDefault();
        });

  $('.tab2').on('click', function (e) {
        $('.tab2, .tab1_active, .tab3_active, .text1, .text3').hide();
        $('.tab2_active, .tab1, .tab3, .text2').css('display', 'block');
        e.preventDefault();
        });

  $('.tab3').on('click', function (e) {
        $('.tab3, .tab1_active, .tab2_active, .text1, .text2').hide();
        $('.tab3_active, .tab1, .tab2, .text3').css('display', 'block');
        e.preventDefault();
        });

  $('.tab1_active, .tab2_active, .tab3_active').on('click', function (e) {
        e.preventDefault();
        });

  $('.text1, .text2, .text3').css({
      fontSize: '16px',
      fontFamily: 'Arial',
      color: '#555',
      margin: '10px'
    });

  $('.text2, .text3').hide();


});

// .{
//     float: left;
//     width: 300px;
//     height: 1000px;
//     margin: 10px 0px 0px 0px;
//     padding: 10px 0px 0px 0px;
//     text-align: left;
//     vertical-align: middle;
//     line-height: 10px;
//     line-height: 1;
//     letter-spacing: 0.6px;
//     font-size: 8px;
//     font-family: "Lucida Sans Unicode";
//     color: #77858b;
//     font-style: italic;
//     font-weight: bold;
//     border: 1px solid grey;
//     border-radius: 12px;
//     background: linear-gradient(to top, #206988, #0c3256);
//     box-shadow: 2px 2px 3px rgba(0,0,0,0.5);