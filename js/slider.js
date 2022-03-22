$(document).ready(function(){
var count = 0;
var classNm = "show"
var total = $("#slider li").length; 


setInterval(function(){
count ++
count %= total

  $("#slider li").eq(count).addClass(classNm).siblings().removeClass(classNm)
},3000)




$('.tab h3').click(function(){
    $('.tab > div').removeClass('on');
    $(this).parent().addClass('on');
})

$('#trigger').click(function(){
  $('.popup').removeClass('d-none');
});
$('.popup button').click(function(){
  $('.popup').addClass('d-none');

})

})