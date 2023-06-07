let sistema = new Sistema();
let calendario = new Calendar('calendar');
window.addEventListener("load", inicio);
calendario.getElement().addEventListener('change', e => {
  cargarDia();
  cargarMenu(getDia());
});

function inicio() {
  cargarListas();

  cargarMenu(getDia());

  document
    .getElementById("idBotonPedir")
    .addEventListener("click", agregarPedido);
  document
    .getElementById("idBotonCancelarPedido")
    .addEventListener("click", cancelarPedido);
}

function cargarListas() {
  sistema.agregarListaResponsables(
    new Responsable("Geronimo", "1000", ["Maria", "Pedro", "Juan"])
  );

  let fechaLunes = new Date("July 03, 2023 9:30:00");
  let fechaMartes = new Date("July 04, 2023 9:30:00");
  let fechaMiercoles = new Date("July 05, 2023 9:30:00");
  let fechaJueves = new Date("July 06, 2023 9:30:00");
  let fechaViernes = new Date("July 07, 2023 9:30:00");

  sistema.agregarListaMenu(
    new Menu(
      fechaLunes,
      "Lunes",
      "Milanesa con puré",
      "Ñoquis con salsa de tomate",
      "Mousse de chocolate "
    )
  );

  sistema.agregarListaMenu(
    new Menu(
      fechaMartes,
      "Martes",
      "Nuggets con arroz",
      "Tostado de queso",
      "Gelatina"
    )
  );

  sistema.agregarListaMenu(
    new Menu(
      fechaMiercoles,
      "Miercoles",
      "Miniaturas pescado",
      "Tarta de zapallito",
      "Fruta"
    )
  );
  sistema.agregarListaMenu(
    new Menu(
      fechaJueves,
      "Jueves",
      "Churrasco con ensalada",
      "Tortilla de papa",
      "Flan"
    )
  );
  sistema.agregarListaMenu(
    new Menu(
      fechaViernes,
      "Viernes",
      "Hamburguesa con papas fritas",
      "Ravioles de verdura",
      "Helado"
    )
  );
}

function getDia() {
  let dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  let dia = calendario.value();
  let numDia = new Date(dia).getDay();
  return (dias[numDia]);
}

function cargarDia() {
  document.getElementById("idDia").innerHTML = getDia();
}


function cargarMenu(diaNecesario) {
  let comboComensal = document.getElementById("idComensal");
  comboComensal.innerHTML = " ";
  let datosComensal = sistema.darDatosResponsables();

  for (let elemComensal of datosComensal) {
    let hijos = elemComensal.hijo;
    for (let hijo of hijos) {
      let nodoCombo2 = document.createElement("option");
      let nodoTexto2 = document.createTextNode(hijo);
      nodoCombo2.appendChild(nodoTexto2);
      comboComensal.appendChild(nodoCombo2);
    }
  }

  let datos = sistema.darDatosMenu();
  for (let elem of datos) {
    if (elem.dia == diaNecesario) {
      document.getElementById("opcion1").innerHTML = " ";
      document.getElementById("opcion2").innerHTML = " ";
      document.getElementById("opcion1").innerHTML = elem.plato1;
      document.getElementById("opcion2").innerHTML = elem.plato2;

      document.getElementById("idPostre").innerHTML = elem.postre;
    }
  }
}



function agregarPedido() {
  let formPedido = document.getElementById("form");
  if (formPedido.reportValidity()) {
    let comensalId = document.getElementById("idComensal");
    let comensal = comensalId.options[comensalId.selectedIndex].text;
    let dia = getDia();
    let datosMenu = sistema.darDatosMenu();
    let fecha;
    for (let elem of datosMenu) {
      if (elem.dia == dia) {
        fecha = elem.fecha;
      }
    }

    let platoId = document.getElementById("idPlato");
    let plato = platoId.options[platoId.selectedIndex].text;

    sistema.agregarListaPedidos(new Pedido(comensal, dia, plato, fecha));
    cargarMisPedidos();
    formPedido.reset();
  }
}


function cargarMisPedidos() {
  limpiarLista();
  let datos = sistema.darDatosPedidos();
  let cont = 0;
  for (let elem of datos) {
    cont++;
    if (Date.parse(elem.fecha) >= Date.parse(new Date())) {
      let nodo = document.createElement("li");
      let nodoTexto = document.createTextNode(
        "Pedido para " +
        elem.comensal +
        ", para el día: " +
        elem.dia.toLowerCase() +
        ". Plato Elegido: " +
        elem.plato
      );
      nodo.appendChild(nodoTexto);

      document.getElementById("idListaMisPedidos").appendChild(nodo);
    }
  }
  if (cont == 0) {
    let nodo = document.createElement("li");
    let nodoTexto = document.createTextNode("Sin Datos");
    nodo.appendChild(nodoTexto);
    document.getElementById("idListaMisPedidos").appendChild(nodo);
  }

  cargarCancelarPedido();
}

function limpiarLista() {
  document.getElementById("idListaMisPedidos").innerHTML = " ";
}
function cargarCancelarPedido() {
  let combo = document.getElementById("idCancelarPedido");
  combo.innerHTML = " ";
  let datos = sistema.darDatosPedidos();

  for (let elem of datos) {
    if (Date.parse(elem.fecha) >= Date.parse(Date())) {
      let nodoCombo = document.createElement("option");
      let nodoTexto = document.createTextNode(
        elem.comensal + " para el dia " + elem.dia
      );
      nodoCombo.appendChild(nodoTexto);
      combo.appendChild(nodoCombo);
    }
  }
}

function cancelarPedido() {
  let elegido = document.getElementById("idCancelarPedido").selectedIndex;

  sistema.eliminar(elegido);
  cargarCancelarPedido();
  cargarMisPedidos();
}

// function eliminarPedidosAntiguos() {
//     let fechaActual = new Date();

//     let fechaAnterior = new Date();
//     fechaAnterior.setDate(fechaActual.getDate() - 1);

//     let listaPedidos = document.getElementById("ListaMisPedidos");
//     let pedidos = listaPedidos.getElementsByTagName("li");

//     // Recorrer los pedidos y eliminar los del día anterior
//     for (let i = 0; i < pedidos.length; i++) {
//       let pedidoFecha = new Date(pedidos[i].dataset.fecha);

//       // Comparar la fecha del pedido con la fecha anterior
//       if (pedidoFecha < fechaAnterior) {
//         // Eliminar el pedido de la lista
//         listaPedidos.removeChild(pedidos[i]);
//       }
//     }
//   }

//   setInterval(eliminarPedidosAntiguos, 86400000);
