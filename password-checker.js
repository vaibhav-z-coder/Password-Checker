let pass=document.querySelector("#pass")
let pass2=document.querySelector("#pass2")
let ans=document.querySelector("#ans")

let vis1=document.querySelector("#vis1")
let vis2=document.querySelector("#vis2")

function checkpassword(){
if(pass.value===pass2.value){
    ans.innerHTML="<p style=color:green;>Password is Correctly Matched</p>"
}
else{
     ans.innerHTML="<p style=color:red;>Not Matched</p>"
}

}
function visibility(){
    if(pass.type==="password"){
        pass.type="text"
        vis1.innerHTML='☀'
    }
    else{
        pass.type="password"
        
        vis1.innerHTML='🙄'
    }
}

function visibility2(){
    if(pass2.type==="password"){
        pass2.type="text"
        vis2.innerHTML='☀'
    }
    else{
        pass2.type="password"
        vis2.innerHTML='🙄'
    }
}




pass.addEventListener('blur', checkpassword)
pass2.addEventListener('blur', checkpassword)

vis1.addEventListener('click', visibility)

vis2.addEventListener('click', visibility2)


