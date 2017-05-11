$(document).ready(function() {
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num").html());
  var  breakTime = parseInt($("#brnum").html());
 
  $("#reset").hide();

  $('#start').click(function(){
    var counter = setInterval(timer, 1000);
     count*=60;
 function timer(){
   $('#start, #minusclock, #plusclock, #minusbreak,#plusbreak, #title1,#title2,#brnum').hide();
  $('#timeType').html("Session Time:" );
   $('#timeType').show();
      count -= 1;
      if(count === 0){
          buzzer.play();
        clearInterval(counter);
       var startBreak = setInterval(breaktimer, 1000);
      
           $('#num').hide();
      } 
     if(count%60>=10){
       $('#num').html(Math.floor(count/60)+':'+count%60);
     }else{
        $('#num').html(Math.floor(count/60)+':'+"0"+count%60);
     }
    
                  
    function breaktimer() {
      $('#timeType').html("Break Time: ");
       $('#timeType').show();
      $('#brnum').show();
      breakTime -= 1;
      if(breakTime===0){
        clearInterval(startBreak);
        buzzer.play();
        $('#reset').show();
        $('#brnum,#timeType').hide();
      } 
       if(count%60>=10){
       $('#brnum').html(Math.floor(breakTime/60)+':'+breakTime%60);
     }else{
        $('#brnum').html(Math.floor(breakTime/60)+':'+"0"+breakTime%60);
     }
  
    }
    }
   });
  
  $('#reset').click(function(){
    count=25;
    breakTime=25;
    $('#num').html(count);
    $('#brnum').html(breakTime);
    $('#start, #minusclock, #plusclock, #minusbreak, #plusbreak, #brnum, #num, #title1, #title2').show();
    $('#reset, #timeType').hide();
  });
  
  $("#minusclock").click(function() {
  if (count > 5) {
  count -= 5;
  $("#num").html(count);
   }
  });
  
  $("#plusclock").click(function() {
  count += 5;
  $("#num").html(count);
  });
  
    $("#minusbreak").click(function() {
  if (breakTime > 5) {
 breakTime -= 5; 
  $("#brnum").html(breakTime);
   }
  });
  $("#plusbreak").click(function() {
 breakTime += 5;
  $("#brnum").html(breakTime);
  });
});