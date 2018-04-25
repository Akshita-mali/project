var slideIndex=1;
// window.onload = function(){
    showSlides(slideIndex);
// }

function plusSlide(n)
{
    showSlides(slideIndex +=n); 
}

function showSlides(n)
{
    var i;
    var slides=document.getElementsByClassName("slideimg");
    // console.log(slides)
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) 
    {
      slides[i].style.display = "none";  
    }
  
    slides[slideIndex-1].style.display = "block";  
  

}

function formValidation()
{
    // var firstname=document.getElementById('fname');
    // var lastname=document.getElementById('lname');
    // var cname=document.getElementById('cname');
    // var jtitle=document.getElementById('jtitle');
    // debugger;
    var alphaExp=/^[a-zA-Z]+$/;
     if (!txt.value.match(alphaExp))
        {
              alert("enter valid text only!");
              
         }
}
// function selection()
// {
//     if(opt.value==select season)
//     document.getElementById('p2')==alert("please select");
// }
