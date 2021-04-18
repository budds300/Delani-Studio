$(document).ready(function (){
$(".click").click(function(){
    $("#design-icon").toggle();
    $("#design").toggle();
    
   });
   $(".dev").click(function(){
    $("#dev_icon").toggle();
    $("#dev").toggle();
   });
   $(".management").click(function(){
    $("#product_icon").toggle();
    $("#product").toggle();
   });
});

// contacts info
$(document).ready(function (){
    $("#contact").submit(function(){
        let name= $("input#name").val();
        let email=$("input#email").val();
        let text= $("textarea#text-message").val();
        if(text==""){
            alert("Please enter your credentials");
        }
        else{
            alert('Hello ' + name + ' we have received your message thank you for reaching out')}



    })
 
})