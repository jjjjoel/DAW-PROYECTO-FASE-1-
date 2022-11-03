//123456e@E
const signUp = e => {
    let name = document.getElementById('name').value,
        /*dui = document.getElementById('dui').value,*/
        pwd = document.getElementById('password').value;

    let basedatos = JSON.parse(localStorage.getItem('basedatos')) || [];

    let exist = basedatos.length && 
        JSON.parse(localStorage.getItem('basedatos')).some(data => 
            data.name.toLowerCase() == name.toLowerCase() 
            /*data.dui.toLowerCase() == dui.toLowerCase()*/
        );

    if(!exist){
        basedatos.push({ name,  pwd });
        localStorage.setItem('basedatos', JSON.stringify(basedatos));
        document.querySelector('form').reset();
        document.getElementById('name').focus();
        swal({
           title: 'Exito!',
           text: 'Cuenta creada con exito',
           icon: 'success'
        });
    }
    else{
        swal({
            title: 'Error!',
            text: 'Ya existe una cuenta con esos datos, Inicia sesion',
            icon: 'error'
         });
    }
    e.preventDefault();
}

function signIn(e) {
    let name = document.getElementById('name').value,
     pwd = document.getElementById('password').value;
    let basedatos = JSON.parse(localStorage.getItem('basedatos')) || [];
    let exist = basedatos.length && 
    JSON.parse(localStorage.getItem('basedatos')).some(data => data.name.toLowerCase() == name && data.pwd.toLowerCase() == pwd);
    if(!exist){
        swal({
            title: 'Error!',
            text: 'Nombre o contraseña incorrecto',
            icon: 'error'
         });
    }
    else{
       location.href = '../inicio.html'
       
    }
    e.preventDefault();
}




