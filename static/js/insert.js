function insert(email, nombre, telefono){
    const URL = "https://api-heroku1-14f7837ede0b.herokuapp.com/contactos";
    var request = new XMLHttpRequest;
    request.open('POST',URL)
    request.setRequestHeader("Content-Type", "application/json");
    post = JSON.stringify( {
        "email": email,
        "nombre": nombre,
        "telefono": telefono})
    console.log(post)
    request.send(post)

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);
        window.location.href = "https://contactos-1-28ca5668746c.herokuapp.com/";
    }
    
}


