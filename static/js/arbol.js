/*
const contenedorFila = document.getElementById('contenedorFila');
const container = document.createElement('div');
container.setAttribute('id','container');
contenedorFila.appendChild(container);

const img = document.createElement('img');
img.setAttribute('src','img/arbol1.jpg');
img.setAttribute('alt', 'arbol1'); 

container.appendChild(img);
console.log('Imagen añadida al contenedor');
*/
let idContenedorImagenes=0;
let idContenedor=0;
function crearContenedorImagenes(strNombre){
    const contenedorImagenes = document.createElement('div');
    contenedorImagenes.setAttribute('class',strNombre);//contenedorFila
    idContenedorImagenes++;
    contenedorImagenes.setAttribute('id',strNombre+idContenedorImagenes.toString());
    document.body.appendChild(contenedorImagenes);
    //return contenedorImagenes;
}

function crearContenedorImagen(strNombre){
    const contenedorImagen = document.createElement('div');
    contenedorImagen.setAttribute('class',strNombre);
    idContenedor++;
    contenedorImagen.setAttribute('id',idContenedor.toString());
    

    //const contenedorImagenes = crearContenedorImagenes('contenedorImagenes');
    //const contenedorImagenes = document.getElementById('contenedorImagenes');
    //const contenedorImagenes = document.querySelector('.contenedorImagenes');
    const contenedorImagenes = document.getElementById('contenedorImagenes'+idContenedorImagenes.toString());
    contenedorImagenes.appendChild(contenedorImagen);

    //return contenedorImagen;

}

function crearImagen(strNombre,idImagen){
    const img = document.createElement('img');
    //img.setAttribute('src','img/arbol1.jpg');
    img.setAttribute('src','img/'+strNombre+idImagen.toString()+'.jpg');
    
    img.setAttribute('alt', strNombre+idImagen.toString());

    //const contenedorImagen = crearContenedorImagen('contenedorImagen');
    const contenedorImagen = document.getElementById(idContenedor);
    contenedorImagen.appendChild(img);
}

function crearAnimacion(nombreImagen){
    crearContenedorImagenes('contenedorImagenes');
    crearContenedorImagen('contenedorImagen');
    for(let i=1;i<=3;i++){
        //crearContenedorImagen('contenedorImagen');
        crearImagen(nombreImagen,i);
    }
    
}

/*
if (contenedorImagenes) {
        contenedorImagenes.appendChild(contenedorImagen); // Agregar el contenedor de imagen al contenedor de imágenes
    } else {
        console.error('No se encontró el contenedor de imágenes');
    }
*/