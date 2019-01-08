
//////////////////////////关于

new Vue({
  el: '#about',
  data: {
    content: 'Hello World!',
  },
  beforeCreate: function(){
    console.log('beforeCreate: ' + this.content)
  },
  created: function(){
    console.log('create: ' + this.content)
  },
  updated: function(){
    console.log('updated: ' + this.content)
  },
  destroyed: function(){
    console.log('destroyed: ' + this.content)
  },
  mounted: function(){
    console.log('destroyed: ' + this.content)
  },
  
})