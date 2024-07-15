var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

}

for(tablink of tabcontents){
    tablink.classList.remove("active-tab");

}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu =document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

function sub(){
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzEAjO1mUn_kdG4WYaiRtb9OF6zGezIetYUGEglbYPaGKzQc4iXf4GI3a3nnSQZeiyq2g/exec'
  const form = document.forms['submit-to-google-sheet']
   const message=document.getElementById("message");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        message.innerHTML="Thank you for your message, we will get back to you soon";
        setTimeout(function(){
            message.innerHTML="";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
}