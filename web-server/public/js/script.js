
function showBottomBar()
{
 
/*document.body.clientHeight*/ 
  var clientWidht = document.body.clientWidth ;
  if (clientWidht >700) 
  {
    $("#bottomBar_2").hide();
    $("#bottomBar_1").show();
    
  }else
  {
    $("#bottomBar_2").show();
    $("#bottomBar_1").hide();
  }
}

$(document).ready(function() {
    // alert('浏览器类型'+system.phone);
  showBottomBar();
});

$(window).resize(function () {        

  console.log($(document.body).height());
  showBottomBar();
  
});
$("#ctrButton").click(function(){

  var menu = $("#menu") ;
  menu.toggle(); 
  //$("#ctrButton").value  = "A";
  //alert("message:"+   menu.is(':visible') );
  $("#ctrButton").attr('value', 'A');
//$("#ctrButton").val("updateBt");
  if(menu.is(':visible')) {
   // $("#ctrButton").val(":value","A")
    
  } else
  {
    
  }
 
});

