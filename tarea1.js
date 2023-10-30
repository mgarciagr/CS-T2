// Tarea  Crear una clase con lista de contacto  y hacer un alta en la lista de contactos y hacer una busqueda en la lista de contacto

class Contactos {
  constructor(nombre, apellidos, telefono) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
  }
}

class ListaContactos {
  constructor() {
    this.lista = [];
  }

  agregarContacto(nombre, apellidos, telefono) {
    const contactos = new Contactos(nombre, apellidos, telefono);
    this.lista.push(contactos);
  }

  buscarContacto(nombre) {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].nombre == nombre) {
        return this.lista[i];
      }
    }
    return "No encontre el contacto";
  }
}

const listaContactos1 = new ListaContactos();

listaContactos1.agregarContacto("Martin", "Garcia", "666666666");
listaContactos1.agregarContacto("Alan", "Garcia", "444444444");
listaContactos1.agregarContacto("Cristhian", "Garcia", "555555555");
listaContactos1.agregarContacto("Eder", "Garcia", "888888888");

console.log(listaContactos1.lista);

console.log("Busqueda de Eder ");
console.log(listaContactos1.buscarContacto("Eder"));
