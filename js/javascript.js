$(function(){

    const arrTopVal=[];
    arrTopVal[0]=$('#intro').offset().top;
    arrTopVal[1]=$('#aboutme').offset().top;
    arrTopVal[2]=$('#portpolio').offset().top;
    arrTopVal[3]=$('#uxdesign').offset().top;
    arrTopVal[4]=$('#contact').offset().top;
    console.log('arrTopVal =',arrTopVal);

    const pageFn=function(idx){
      $('html,body').animate({scrollTop:arrTopVal[idx]},'easeInOutCubic' ); 
    }


    const moveFn=function(){
      $container.animate({left:-700 *nowIdx});
      const counter = $("#wrap>#portpolio>.page");
      counter.text((nowIdx+1)+'/3');

    }
   
 const $mnu=$('#wrap > header > nav > .gnb > li > a ');
 let nowIdx=0;
 const $prev=$('#wrap > #portpolio > .prev');
 const $next=$('#wrap > #portpolio > .next');
 const $container=$('#wrap > #portpolio > .box >.container');
 const $pagination=$('#wrap > #portpolio > .pagination > li >a')

 const $pager=$('#wrap > #aboutme > .othersays > .pager > li > a ');
 const $slider=$('#wrap > #aboutme > .othersays > .bigbox > .box ');
 
 const blurFn=function(){
   $('#wrap > #intro > .harf').fadeIn(2000),'easeInOutCubic' };

   const $making_one=$('#wrap > #portpolio > .box > .container > .sampyo > .left > .btn3 ');
   const $making_two=$('#wrap > #portpolio > .box > .container > .k-dokdo > .left > .btn3 ');
const $shadow=$('#wrap > #portpolio > .portpolio-bg');
   const $lightbox=$('#wrap > #portpolio > .portpolio-bg > .portpolio-img');



   $(window).on('load',function(){
     blurFn();
   }); //end of intro blur

   $mnu.on('click',function(evt){
     evt.preventDefault();
      nowIdx=$mnu.index(this);
     pageFn(nowIdx);
   }); // end of onepage scroll 
  	
   $(window).on("scroll", function(){
		
			var scrollH = $(this).scrollTop();

		if($(this).scrollTop()>100){
			$(".top").stop().fadeIn();
		}else{
			$(".top").stop().fadeOut();
		}


    if($(this).scrollTop()<3400){

		 $("#wrap footer > .frame > img").slideUp(1000);
		}else{
      $("#wrap footer > .frame > img").slideDown(3000);
          }
   

	});//end of scroll

  $making_one.on('click',function(evt){
    evt.preventDefault();

$lightbox.children('img').attr({
  src: $(this).attr('href'),
  alt: $(this).children('img').attr('alt')
});
$shadow.show();
  });

  $shadow.on('click',function(){
    $(this).hide();
  });

  // end of sampy-design pop up


  $making_two.on('click',function(evt){
    evt.preventDefault();

$lightbox.children('img').attr({
  src: $(this).attr('href'),
  alt: $(this).children('img').attr('alt')
});
$shadow.show();
  });

  $shadow.on('click',function(){
    $(this).hide();
  });

  $pagination.on('click',function(evt){
    evt.preventDefault();
    nowIdx=$pagination.index(this);
  
    moveFn();

  });
  
  $prev.on('click',function(evt){
    evt.preventDefault();
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=2;
    }
    moveFn();
   
    
  });
  
    $next.on('click',function(evt){
    evt.preventDefault();
    if(nowIdx<2){
      nowIdx++;
    }else{
      nowIdx=0;
    }
    moveFn();
  
  });
  
  setInterval(function(){
    const $container=$('#wrap > #uxdesign > .box > .slide-container');
    const $slides=$container.children('li');
  
    $container.stop().animate({top:-400},function(){
      $slides.eq(0).appendTo($container);
      $container.css({top:0});
    });
    },3000); //end of uxdesign slide



    $pager.on('click',function(evt){
      evt.preventDefault();

     nowIdx=$pager.index(this);

     $slider.animate({left: -1000 * nowIdx})
      
     $(this).parent().addClass('on').siblings().removeClass('on');
     });
     
    });
    // $(window).on('load',function(){
    //   pageFn(0);
    // }); // end of intro load event
