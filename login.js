function submitForm() {
    // Obtener los valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Validar los campos (puedes agregar más validaciones según tus necesidades)
    if (username === "" || password === "") {
      alert("Por favor, ingresa tanto el usuario como la contraseña.");
      return;
    }
  
    // Enviar los datos al servidor (puedes realizar una petición AJAX aquí)
    // Aquí debes implementar la lógica para verificar las credenciales en tu servidor
  
    // Simulación de verificación (reemplaza esto con tu lógica de autenticación real)
    var mockUsername = "usuario";
    var mockPassword = "contraseña";
  
    if (username === mockUsername && password === mockPassword) {
      alert("Inicio de sesión exitoso");
    } else {
      alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
  }
  