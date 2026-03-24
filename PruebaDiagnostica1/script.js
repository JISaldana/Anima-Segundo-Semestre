window.onload = function() {
    let nombre = prompt("Ingresa tu nombre:");
    document.getElementById('saludo').innerText = `Hola ${nombre}`;
};

document.getElementById('helloBtn').addEventListener('click', function() {
    alert("Hola mundo");
});