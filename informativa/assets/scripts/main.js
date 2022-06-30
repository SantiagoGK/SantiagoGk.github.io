//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
link.forEach(function (link) {
    //agregar un evento click a cada uno de ellos
    //case sensitive
    link.addEvenlistener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        //quitarle las clases de animaciones que ya tiene
        content.classList.remove(animate__backInRight);
        content.classList.remove(animate__animated);

        //Agregar las clases de animaciones que ya tiene
        content.classList.add("animated__fadeUutUp");
        content.classList.add("animate__animated");

        setTimeout(function () {
            window.history.go(-1);

        }, 600);
        setInterval

        return false;
    });
});