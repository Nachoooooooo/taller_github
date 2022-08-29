document.getElementById("form2").addEventListener('submit', function(event){
    event.preventDefault();
    let email = document.getElementById("form2").email2.value;
    let password = document.getElementById("form2").pass3.value;
    if(email!= null||password!=null){
        alert("No hay usuario o contraseña. Completa este campo");

    }
    else if(password.length<6){
        alert("La contraseña es demasiado corta");
    }
    else{
        alert(`Bienvenido ${email}`);
    }
})