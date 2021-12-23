$(function(){
$(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    dots:true,
    
  });
 
  $(".regular").slick({//sec5
    dots: true,
    infinite: true,
    slidesToShow: 3,//몇개의 이미지가 보일 지
    slidesToScroll: 1//클릭할때 몇칸씩 넘어갈지
  });


  var slide;//nav영역 시작 
  slide = setInterval(function(){
      $('.notice .notice_list > li:first-child').animate({
          'margin-top':'-2rem'},600,function(){
        $('.notice .notice_list').append(
        $('.notice .notice_list > li:first-child')); 
        $('.notice .notice_list > li:last-child').css({'margin-top':0});
          });
  },2000);



  

})//jq end




$(function(){
  var sta = 1;
  $('.navbar_toggleBtn').click(function(){
      if (sta == 1) {
          $(this).addClass('on');
          $('.nav_menu').fadeIn();
          sta = 2;
      }else {
          $(this).removeClass('on');
          $('.nav_menu').fadeOut();
          sta = 1;
      }
      $('.nav_menu').click(function(){
          $('nav_menu').hide();
      })//nav_menu
  })//navbar_toggleBtn
})//end


////////modal
$(function(){
  $('.thumb').click(function(){
    var img = $(this).find('img');
    var img_src = img.attr('data_img');
     $('#modal').show();//열기
     $('#modal img').attr('src',img_src);
     $('#modal .txt').text(img_alt);
     $('#modal .txt_title').text(img_title);
  })

  $('#modal').click(function(){
    $('#modal').hide();//닫기
  })
})//end