//selection by from control
const RegistrationFrom=document.querySelector('.RegistrationFrom')
const msg=document.querySelector(".msg")
const imgpriveu=document.getElementById("imgpriveu")
const file=document.getElementById("file")
const icon=document.querySelector(".icon")
const multiple=document.getElementById("multiple")
const multipul_img=document.getElementById("multipul_img")


RegistrationFrom.onsubmit=(e)=>{
e.preventDefault();
const newform= new FormData(e.target)
const data =Object.fromEntries(newform)
if(!data.username.trim() || !data.email.trim() || !data.password.trim()  || !data.confirmPassword.trim() || !data.mobile.trim()){
    msg.innerHTML=onalart('Pleasee fill all forms')
}
else if(!inemail(data.email)){
    msg.innerHTML=onalart('Please enter a valid email')
}
else if(!ismobile(data.mobile)){
    msg.innerHTML=onalart('Please enter a valid mobile number')
}
else{
    msg.innerHTML=onalart('Warmest Welcome to our Community','info')
}
}
file.onchange=(e)=>{
    const imgurl= URL.createObjectURL(e.target.files[0])
    imgpriveu.setAttribute('src',imgurl)
    icon.style.display="none"
}
imgpriveu.onclick=(e)=>{
    
    icon.style.display = "inline-block";
    icon.style.fontSize = "22px";
} 
icon.onclick=(e)=>{
   imgpriveu.removeAttribute('src');
   file.value='';
   icon.style.display="none";

}
