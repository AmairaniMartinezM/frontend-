function borrar(email){
    respuesta = confirm("¿Estas seguro de borrar el contacto?");

    if (respuesta){
        const URL = "https://api-heroku1-14f7837ede0b.herokuapp.com/contactos";
        var request = new XMLHttpRequest;
        request.open('DELETE',URL +"/" +email,true);
        request.send();
        request.onload = () => {
            const response = request.responseText;
            window.location.href = "https://contactos-1-28ca5668746c.herokuapp.com/"
        }
    }else{
        console.log("El usuario ha cancelado.");
    }
}
