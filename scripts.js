var cursos = {
    Python : {
        nombre: "Python",
        profesor: "Juan Pablo",
        descripcion:"Manejo de lenguage de programacion de alto nivel como lo es python"
    },
    HTML : {
        nombre: "HTML",
        profesor: "Johan Jose",
        descripcion:""
    },
    CSS : {
        nombre: "CSS",
        profesor: "Carlos Miguel",
        descripcion:""
    }

};

const EliminarCurso = document.getElementById("EliminarCurso");
const EditarCurso = document.getElementById("EditarCurso");
const AgregarCurso = document.getElementById("AgregarCurso");

EliminarCurso.addEventListener("click",async function(){
    let nombreCurso = nombre.prompt("Ingrese el nombre del curso a eliminar");
    delete cursos[nombreCurso]
    return ("Curso eliminado de forma correcta")
});

    const verificar = new Promise(function (resolve, reject){
        if (nombreCurso === cursos){
            resolve(console.log("El curso se encuentra en la base de datos"))
        }else{        
        reject(console.error("Error al encontrar el curso"))
        }
    })


EditarCurso.addEventListener("click",async function(){
    let nombreCurso = nombre.prompt("Ingrese el nombre del curso a editar");
    console.log(prompt(`
    1.Cambiar nombre del curso
    2.Cambiar el profesor del curso
    3.cambiar la descripcion del curso
    0.salir`)) = await verificar
        
  let opc =    console.log(prompt("digite la opcion que requiera")) 
     if(opc===1){

     } else if (opc===2){

     } else if(opc===3){

     } else if (opc===0){
        return ("volviendo")
     }
    }
    )
