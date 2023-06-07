class Sistema {
  constructor() {
    this.listaPedidos = [];
    this.listaMenu = [];
    this.listaResponsables = [];
  }

  agregarListaPedidos(unElemento) {
    this.listaPedidos.push(unElemento);
  }
  darDatosPedidos() {
    return this.listaPedidos;
  }

  eliminar(posicion) {
    if (posicion >= 0 && posicion < this.listaPedidos.length) {
      this.listaPedidos.splice(posicion, 1);
    }
  }

  agregarListaMenu(unElemento) {
    this.listaMenu.push(unElemento);
  }
  darDatosMenu() {
    return this.listaMenu;
  }

  agregarListaResponsables(unElemento) {
    this.listaResponsables.push(unElemento);
  }
  darDatosResponsables() {
    return this.listaResponsables;
  }
}

class Pedido {
  constructor(comensal, dia, plato, fecha) {
    this.comensal = comensal;
    this.dia = dia;
    this.plato = plato;
    this.fecha = fecha;
    //this.postre=postre;
  }
  // toString(){
  // 	return(this.comensal + this.fecha + this.plato);
  // }
}

class Menu {
  constructor(fecha, dia, plato1, plato2, postre) {
    this.fecha = fecha;
    this.dia = dia;
    this.plato1 = plato1;
    this.plato2 = plato2;
    this.postre = postre;
  }
}

class Responsable {
  constructor(nombre, saldo, hijo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.hijo = hijo;
  }
}
//  new Date(2023, 07, 03, 9),

