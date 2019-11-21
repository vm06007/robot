$(document).ready(function(){
    
    function ToCloseModal(){
        
        var $dataClose = $(this).data('close');
        $('.GDF-steps_modal[data-close='+$dataClose+']').addClass('GDF-dnone');
        $('.GDF-steps_content_wrapper[data-close='+$dataClose+']').removeClass('GDF-dnone');
        $('body').removeClass('modal-active');
     
    }

    function ToShowModal(){
        
        var $dataClose = $(this).data('close');
        $('.GDF-steps_modal[data-close='+$dataClose+']').removeClass('GDF-dnone');
        $('.GDF-steps_content_wrapper[data-close='+$dataClose+']').addClass('GDF-dnone');
        $('body').addClass('modal-active');

    }

$('.GDF-steps_btn_close_modal').on('click',ToCloseModal);
$('.GDF-btn_more').on('click',ToShowModal);
$('.GDF-steps_slider').slick({
    prevArrow: '<button class="GDF-slick_btn GDF-slick_prev"></button>',
    nextArrow: '<button class="GDF-slick_btn GDF-slick_next"></button>',
  });
$('.GDF-slick_btn').on('click',function(){
    $('.GDF-steps_modal').addClass('GDF-dnone');
    $('.GDF-steps_content_wrapper').removeClass('GDF-dnone');
    $('body').removeClass('modal-active');
});

});