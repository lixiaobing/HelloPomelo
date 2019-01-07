
function showBottomBar()
{
 
  var clientWidht = document.body.clientWidth ;
  if (clientWidht >1136) 
  {
    $("#menu-vertical").hide();
    $("#menu-horizontal").show();
    
  }else
  {
    $("#menu-vertical").show();
    $("#menu-horizontal").hide();
  }
}


function onResize()
{
  showBottomBar();
}

function onReady()
{
  showBottomBar();

  //绑定按钮事件
  $("#ctrButton").click(function(){

    var menu = $("#menu") ;
    menu.toggle(); 
    $("#ctrButton").attr('value', 'A');
    if(menu.is(':visible')) {
 
    } else
    {
      
    }
   
  });
}


$(document).ready(onReady);
//窗口带下变化
$(window).resize(onResize);


////////////////////////////


var menu = 
[
  {
    text: '阅读',
    url: '/read/'
  },
  {
    text: '项目',
    url: '/project/'
  },
  {
    text: '推荐',
    url: '/recommend/!'
  },
  {
    text: '关于',
    url: '/about/!'
  },
];

//vue test
new Vue({
    el: '#app',
    data: {
      message: 'Hello World!',
     }
})
//vue test
new Vue({
  el: '#menu-bar',
  data: {
    message: 'Hello World!',
    menu: menu,
   
    getWidth: function()
    {
      return document.body.clientWidth
    }
   }
})


