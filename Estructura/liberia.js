class Libro{
    constructor(libro){
        Object.keys(libro).map((key)=>{
            console.log(key)
        });
        this.title ;
        this.author ;
        this.editorial;
        this.release_date;
        this.current_state;
        this.active;
    }

}
const listarLibros=(...libro)=>{}
const registrarLibro=(libro={})=>{
 console.log(new Libro(libro))
}
const editarLibro=()=>{}
const buscarLibro=()=>{}
const registrarPrestamo=()=>{}
const bajaLibro=()=>{}

registrarLibro({})
class ArbolLibros{
    constructor(){
        this.data = new Libro()
    }
}
class NodoLibro{
 constructor(){
     this.izq = null;
     this.der = null;
 }   
}
libros: [
    {
      codigo: 'gestion-correlativo (2020-1)',
      isbn: '0123456789',
      titulo: 'Nombre Libro 1',
      autor: 'Autor 1',
      editorial: 'Editorial 1',
      año_pub: '2005',
      estado: 'disponible | prestado | baja',
      motivo_baja: ' "" | deterioro | extravío',
      prestamos: [
        {
          cliente: {
            nombre: 'Cliente 1',
            celular: 75784496
          },
          fecha_prestamo: '05/06/2019',
          fecha_limite_devolucion: '18/06/2019',
          fecha_devolucion: ''
        }
      ]
    }
  ]