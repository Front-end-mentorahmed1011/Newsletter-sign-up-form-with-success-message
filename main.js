let email = document.getElementById('email');
let submit = document.getElementById('submit');
let span = document.getElementById('span');
let dismiss = document.getElementById('dismiss');
let container = document.getElementById('container');
let containertwo = document.getElementById('containertwo');


onload = containertwo.classList.add('hidden');
dismiss.addEventListener('click' , () => {
               setTimeout(()=>{
                window.location.reload()
               }, 1000)
            })
email.onkeyup = function(){
    if(email.value != '' && email.value.includes('@') && email.value.includes('.com')){
        submit.classList.add('active');
    if(submit.classList.contains('active')){
        submit.addEventListener('click',()=>{
            setTimeout(() => {
                 container.classList.add('hidden');
            containertwo.classList.remove('hidden');
            span.textContent = email.value;  
           }, 1000);
        }
        )
    }
    } else {
        submit.classList.remove('active')
    }
}



