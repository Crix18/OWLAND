function iniciarSesion() {
    // Aquí debes agregar la lógica para verificar las credenciales del usuario.
    // Por ejemplo, puedes usar una API para autenticar las credenciales en el servidor.

    // Simulación de autenticación exitosa
    var usuarioAutenticado = true;
    if (usuarioAutenticado) {
        // Redirige al usuario a la página de inicio después de iniciar sesión.
        window.location.href = "prvowland.html";
        var post= input("usuario");
        alert(post,"¡Bienvenido!");
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
}

