
function redirect(){
    // document.getElementsByClassName("btn-register")[0].style.backgroundColor="#DFC57B";
    
    // window.location.href="https://6abhishek.github.io/invertis/";

    const name = document.querySelector("#txtUserid").value;
    const password = document.querySelector('#ttxtpassword').value;

    if (name == "BC2023259" && password == "6392ak"){
        window.location.replace("https://6abhishek.github.io/invertis/");
    }
    else if (name == "BC2023312" && password == "945743177"){
        window.location.replace("https://6abhishek.github.io/invertiserp/");
    }
}
