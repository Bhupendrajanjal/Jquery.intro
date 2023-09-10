$(document).ready(function(){
    let cl = console.log

let btn = document.getElementById('addbtn');


cl(btn)
cl($)
let $box = $('.box1')
$("#btn").on("click",()=>{
   $box.hide()
})

$("#btn2").on("click",()=>{
    $box.show()
})

$("#toggleBtn").on("click",()=>{
    $box.toggle()
})

$('#sideupBtn').on("click",()=>{
    $box.slideUp(5000)
})
$('#sideDownBtn').on('click',()=>{
    $box.slideDown(5000)
})
$('#sidetoggleBtn').on('click',()=>{
    $box.slideToggle()
})
$('#animatebtn').on('click',function(){
    $box.animate({
        left :"300px",
        top :"300px",
        width : "150px",
        height : "150px",
      
    },3000)
})

let url =`https://jsonplaceholder.typicode.com/posts`
$("#getApi").on('click',function(){
    $.get(url,function(data, resstatus){
        cl(resstatus)
        cl(data)
    })
})
})
//doctument ready = all doctument are download >> html, css and js 
// window load == all doctument as well as multi file are download 