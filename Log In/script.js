document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    const usuario = document.getElementById('loginUsername').value;
    const contraseña = document.getElementById('loginPassword').value;
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuariosRegistrados.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (usuarioEncontrado) {
        alert('Sesión iniciada!');
    } else {
        alert('Usuario o contraseña invalido');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault();
    const usuario = document.getElementById('regUsername').value;
    const correo = document.getElementById('regEmail').value;
    const contraseña = document.getElementById('regPassword').value;
    const confirmarContraseña = document.getElementById('regConfirmPassword').value;

    if(usuario && correo && contraseña && confirmarContraseña) {
        if(contraseña === confirmarContraseña){
            const nuevoUsuario = { usuario, correo, contraseña };
            const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuariosRegistrados.push(nuevoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
            alert('Registro exitoso!');
            document.getElementById('registrationForm').reset();
        } else {
            alert('Las contraseñas no coinciden');
        }
    } else {
        alert('Por favor completa todos los campos');
    }
});