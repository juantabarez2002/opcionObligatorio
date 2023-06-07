# Informe entrega 1

Obligatorio 1 Perez-Roll
Fundamentos de Ingeniería de Software - Proyecto Obligatorio, entrega 1
Grupo: M3A
Docentes: Patricia De León y Martín Solari 
Integrantes: Gonzalo Perez (272016) y Martina Roll (272176)

Fecha de Entrega: 08/05/2023

https://github.com/ORT-FIS-2023S1/proyecto-perez-roll.git


## INTRODUCCIÓN
Este documento corresponde a la primera entrega del Obligatorio de Fundamentos de Ingeniería de Software.

La consigna fue el desarrollo de una aplicación para comedor escolar. El objetivo principal de la aplicación es que madres, padres o responsables puedan conocer el menú diario y controlar el consumo realizado por sus hijos.

## Repositorio Git

Para la realización de este proyecto, fue proveído por nuestros profesores un repositorio remoto en Git Hub, el cual estructuramos, según nos fue conveniente para poder presentar toda la documentación.
Para ello, gracias a que Git es un repositorio descentralizado, cada uno de los integrantes del equipo, clonó el repositorio remoto de forma local para que nos permitiese trabajar de forma paralela y sin la necesidad de estar conectado a la red. 
 
## Versionado

La forma que elegimos para trabajar fue la siguiente:
 
Utilizamos el comando **git clone**, para poder clonar el repositorio remoto en nuestros dispositivos locales, creando un nueva área de trabajo.
Para la organización del mismo decidimos, además de la rama main, crear una nueva rama, *“dev”* donde trabajamos de forma cotidiana, para realizar pruebas en la etapa de desarrollo, presentando distintas soluciones a un problema, realizando grandes correcciones. Una vez considerado el trabajo realizado, y estable, es que lo transferimos a la rama *"main"*, mediante el comando **git merge**, donde siempre se encontraba la última versión oficial del proyecto. 
 
**git commit**, fue utilizado para guardar todo tipo de modificaciones en el repositorio local.
Decidimos hacer uso de **git push** en cualquier momento que, si nos encontrábamos trabajando de forma paralela, necesitábamos la opinión y sugerencia del otro.
 
### Formato git commit
El formato elegido para realizar los comentarios de **git commit** fue el siguiente:

Verbo en presente y modo imperativo, sin la utilización de signos adicionales como el punto (.).
Utilizamos primera persona del plural cuando ambos integrantes del equipo nos encontrábamos trabajando en la misma computadora, al mismo tiempo.

Ejemplo:
*git commit -m “agrego título”*

Resumen de commits en Git Hub:

![imagenes](/Imagenes/Resumen1.png)
![imagenes](/Imagenes/Resumen2.png)

Resumen de git log:

![imagenes](/Imagenes/gitlog1.png)
![imagenes](/Imagenes/gitlog2.png)
![imagenes](/Imagenes/gitlog3.png)
![imagenes](/Imagenes/gitlog4.png)

## Elicitación

Para el desarrollo de los requerimientos decidimos utilizar las técnicas de elicitación: entrevista e ingeniería inversa.
 
### Ingeniería Inversa
Para el desarrollo de la actividad consideramos necesario investigar sobre sistemas actuales de encargue de pedidos. 
Las formas tanto de visualización del menú, como de orden de pedidos que encontramos fueron muy repetidas. 

Por un lado distinguimos la aplicación OrderEAT. Esta, se encuentra disponible para descargar en dispositivos móviles, permitiendo al responsable de cada niño visualizar qué menú es ofrecido para el día, y realizar el encargo y pago en una misma transacción. 

Para ello, utilizan un sistema de saldo. El responsable del niño se comunica con el servicio de cantina, y realiza una transferencia de dinero a la cuenta bancaria indicada. Luego, ese dinero queda como saldo a favor, que se irá debitando a medida que se realizan nuevos pedidos. La cuenta de un responsable podrá tener más de un comensal registrado. 
 
Por otro lado, también notamos que muchos otros colegios, se deciden por publicar el menú que es ofrecido por el servicio de cantina en sus propias páginas web, ya sea el menú semanal o mensual, y se adjunta un número de Whatsapp, para que, por ese medio, el responsable se comunique con la cantina, y realice la orden del pedido. 
 
Otro sistema que encontramos es el uso de Whatsapp Business. Allí, cargan en el catálogo de productos ofrecidos, el menú mensual, para que pueda ser visualizado y luego realizar el pedido mediante este mismo sistema de comunicación. 

Con la misma aplicación hay quienes optan por la utilización de respuestas automáticas. En el chat, el responsable visualiza el menú del mes y realiza el encargo.
 
Adicionalmente, son numerosas las cantinas que ofrecen el sistema de cuponeras, donde se realiza la compra de una cuponera ya sea mensual, para que se utilice todo el mes de corrido, u opcionalmente, compra de cuponeras o tickets por cantidad de almuerzos. En este último caso se compra una cantidad de almuerzos, que serán debitados en función del consumo. 

![imagenes](/Imagenes/IngenieriaInversa1.png)
![imagenes](/Imagenes/IngenieriaInversa2.png)
 
### Entrevista

La decisión de realizar la entrevista fue tomada ya que consideramos que para este tipo de sistema era sumamente necesario poder tener una comunicación fluida, y así explorar de la forma más detallada y completa el problema, para poder identificar cuáles son los requisitos que, de otra forma, como en el uso de cuestionarios, podrían pasar desapercibidos.

Realizamos un total de tres entrevistas. 
 
Para ello nos comunicamos con Cynthia, propietaria del servicio de cantina contratado por el Colegio San Pablo.
Primero, le pedimos que nos brindara detalles de la cantina a fin de entender el contexto en el cual se va a estar implementando el sistema.

Sobre el sistema de pedidos actual, nos contó que, en el correr del año pasado, se comunicó con ella la empresa que desarrolló la aplicación OrderEAT para ofrecer sus servicios, pero que, indagando en el funcionamiento de la app, no se sentía identificada con el método ofrecido, ya que consideraba importante en su negocio, tener un vínculo con los padres, poder mantener una comunicación fluida, y atender las necesidades particulares de cada niño.

En el Colegio San Pablo, los padres no pueden acceder a las instalaciones, por lo cual, se decidió por no implementar este sistema, y desarrollar uno propio.
Actualmente cuenta con una página web; (“lacantina.uy”) donde se carga semanalmente el menú con dos opciones para cada día.
Desde la página hay un enlace directo a una cuenta de whatsapp donde se encarga el pedido indicando nombre y grupo del niño.
Es solo mediante este sistema, que pueden desde “La Cantina”, mantener una relación “más humana” con el responsable de cada niño.
No sólo les habilita al momento de encargar un almuerzo, sino saber que en todo momento va a haber una persona desde la cantina del colegio con la cual comunicarse si surgiese cualquier otro imprevisto, como el olvido de una merienda, entre otros. 
 
Respecto al sistema para realizar pedidos, nos comenta que se pueden realizar el día anterior hasta las 20hs, o en el mismo día hasta las 9:30 am, pero que cuentan con excedentes calculados, en caso de cualquier imprevisto.
 
Al preguntarle acerca de qué necesidades encontraba en los padres, la respuesta fue que sobre todo valoran la practicidad.
El año pasado habían realizado menúes adjuntando los valores nutricionales, pero notaron que no generó el interés esperado en los padres. 
Actualmente el niño cuenta con 30 minutos para almorzar, por lo que, encargar un almuerzo que el responsable tenga la certeza de que su hijo va a consumir es importante. 
 
Mientras entrevistamos a Cynthia, Inés, madre y maestra del colegio nos oyó y reiteró sobre estas palabras, nos comentaba, que al llegar a su casa, su hija merienda y enseguida prepara la cena, intentando ser los más saludable posible cocinando con diversas verduras, que no le gustan tanto, pero que sin embargo siente que cuenta con el tiempo necesario para convencer a su hija de que debe comerlas, tiempo que en el Colegio no tiene, y que sabe que si encarga ese tipo de comidas en el comedor, ella no las comerá por completo. 
 
Siguiendo con Cynthia, nos comentaba que igualmente todas las comidas están diseñadas y supervisadas por una licenciada en Nutrición, cumpliendo con las normativas impuestas por el gobierno. Con ella trabaja de forma conjunta para ofrecer no solo comida saludable, sino que también atractivas para los niños, en un intento de que consuman el plato entero.
 
Además, ofrecen la compra de cuponeras a partir de los 20 almuerzos. Y la posibilidad de encargar todas las comidas que deseen por adelantado, sin embargo, nos comunicaba que son muy pocos los padres que optan por esta opción ya que, por lo general, encargan la comida día a día.
 
La segunda entrevista se la hicimos a Cecilia, usuaria de la cantina del Colegio San Pablo, ella tiene dos hijas en edad escolar. Nos informó que sus hijas no consumen en la cantina todos los días, y que intenta cocinarles, para que lleven sus viandas, pero que sin embargo le genera mucha tranquilidad saber que, si lo necesita, tiene este servicio de respaldo. 

Nos cuenta que por lo general realiza más porciones de comida en la cena, para ya tener la comida para las viandas, pero que de vez en cuando, no sobra comida, y ya no tiene tiempo para realizar más, y realiza un encargo a la cantina.
También nos contaba que cotidianamente pueden surgir muchas situaciones no calculadas como el olvido de las viandas en el auto, que le hace utilizar este servicio. 
Sobre el sistema actual, se encuentra muy satisfecha ya que obtiene respuesta inmediata, y puede realizar el pago inmediatamente.
 
Estas entrevistas nos fueron de gran utilidad para comprender por completo como es el funcionamiento de una cantina e identificar los requerimientos de un sistema para este tipo de negocio. Fue realmente provechoso no solo poder observar de primera mano cómo opera este tipo de servicio, sino que también, poder recibir una retroalimentación inmediata sobre los requerimientos que íbamos planteando y dudas que nos iban surgiendo de la conversación.

### Resultados de las entrevistas

Decidimos agregar el campo detalle, cuando se realice un pedido a fin de brindar una atención más personalizada.
Agregar detalles de contacto directo con el servicio de cantina, (número de teléfono y dirección de correo electrónico).
Optamos por qué el método de identificación sea la cédula del responsable. No solo porque es quien realiza un pedido, sino que también habilita la posibilidad de que con un mismo saldo, pueda realizar los pedidos de todos sus hijos.

Gracias a la entrevista como a las actividades de ingeniería inversa fue que llegamos a la conclusión de que este sistema debería de implementarse tanto para sitios web, como para aplicaciones móviles, para mayor comodidad del responsable.
Ya que son muchos los colegios que ofrecen sitios web, creemos que sería orgánico implentar el sistema de pedidos también para la web para no tener la necesidad de instalar una aplicación, brindando acceso desde otros dispositivos como computadoras.

Por otro lado también entendemos que a otros responsables les puede resultar de mayor practicidad tener una aplicación ya instalada en sus dispositivos móviles de uso frecuente como son los celulares, sobretodo para aquellos responsables que utilizarán el servicio de forma diaria. A su vez, ya que el sistema, será utilizado por responsables, cada uno con un distinto grado de conocimiento y manejo de las tecnologías sería conveniente hacer un desarrollo del mismo basado en la usabilidad. 

 ### User Personas

Las User Personas son una representación ficticia de posibles clientes, que nos permiten poder comprender y predecir mejor al usuario final, resultando en un mejor desarrollo del sistema, y por lo tanto en una experiencia de usuario exitosa. 
 
Identificamos tres tipos de user personas
Padre, madre o responsable
Niños
Colegio/Funcionarios de la cantina


![imagenes](/Imagenes/UserPersona1.png)
![imagenes](/Imagenes/UserPersona2.png)
![imagenes](/Imagenes/UserPersona3.png)


### Modelado Conceptual del problema
 
Luego de realizar una investigación de los tipos de sistemas de pedidos existentes, junto con las entrevistas, realizamos una tormenta de ideas sobre las distintas opciones de solución al problema, y los componentes que considerábamos necesarios incluir, para poder cumplir con los requerimientos del cliente de la forma más efectiva posible.

Algunas de las pautas marcadas son:

Menú en formato de calendario con opciones acorde al día. De Lunes a Viernes.

Horario para realizar los pedidos: hasta el mismo dia a las 9:30 hs.

Se contará con más de una opción de plato de almuerzo por día.

Bebida y postre están incluidos en el almuerzo, no es opcional.

El pedido de comida se realizará por un responsable para un día en concreto y ya asociado a una opción de comida.

![imagenes](/Imagenes/modelado%20conceptual.png)

### Supuestos
El sistema ya cuenta con los datos tanto de los responsables como de los niños vinculados con la cédula.

El responsable debe ponerse en contacto previamente con el servicio de cantina, a quien le realizará una transferencia bancaria por un determinado monto que se verá reflejado en el sistema como “Saldo”, el cual se irá descontando en función de los pedidos realizados.

El precio del almuerzo en todos los casos tendra un valor único.
 
### Glosario

**Cantina:** Establecimiento tercerizado que opera dentro de un Colegio y que ofrece el servicio de almuerzos. 

**Responsable:** Padre, Madre, o Tutor. Persona a cargo del niño, que se encargará de realizar los pedidos al servicio de cantina.

**Usuario:** Persona que utilizará el producto final para encargar comidas a la cantina.

**Niño / Alumno / Comensal / Hijo:** Estudiantes de la institución en la que se encuentra el servicio de cantina y consumen de ella. De 6 a 12 años.

**Pedido:** Encargo de un almuerzo realizado al servicio de cantina.

**Menú:** Listado con las comidas que son ofrecidas por el servicio de cantina para un día en concreto.

**Menú mensual:** Listado con las comidas que son ofrecidas por el servicio de cantina por día, para todos los días hábiles del mes. 

**Encargado de Cantina:** Cualquier persona que trabaja en la parte administrativa de la cantina

**Valor/ Precio:** Cantidad de dinero necesario para la adquisición de un almuerzo.

**Almuerzo:** Alimento que será servido por la cantina, y consumido por los niños, el cual encargarán los responsables utilizando este sistema.

**Saldo:** Crédito a favor asociado a un responsable, que se irá debitando en función de los pedidos realizados.

**Historial:** Lista ordenada en forma decreciente (según la fecha de consumición) con los almuerzos pedidos por un responsable y entregados a un comensal.


## Requerimientos
 
Para clasificar los requerimientos optamos por la categorización Alta, Media o Baja.

**Prioridad Alta:** Requerimientos necesarios para el correcto desarrollo del sistema.

**Prioridad Media:** Requerimientos que consideramos importantes para la completitud del sistema pero que no son estrictamente necesarios.

**Prioridad Baja:** Requerimientos que serían buenos de implementar pero que no causa un gran impacto de no ser implementados en el sistema.


### Requerimientos Funcionales
 
**RF#1**

Título: Visualizar **menú**

Actor: **Responsable**

Descripción: El sistema deberá permitir al **responsable** visualizar mediante un calendario, qué opciones de **almuerzo** son ofrecidos para cada día del mes.
Prioridad: Alta

 
**RF#2**

Título: Realizar **pedido**

Actor: **Responsable** 

Descripción: El sistema debe permitir realizar el **pedido** de **almuerzo** para un día en concreto y un **hijo** en específico.

Prioridad: Alta


**RF#3**

Titulo: Cancelar **Pedido**

Actor: **Responsable**

Descripción: El sistema debe permitir cancelar un **pedido** realizado para un dia en concreto y un **hijo** específico, antes de la fecha y hora límite establecidas. 

Prioridad: Alta

 
**RF#4**

Título: Visualizar historial

Actor: **Responsable**

Descripción: El sistema debe permitir visualizar el historial de **pedidos** realizados por un **responsable** en formato de lista, indicando nombre del **comensal** y en orden decreciente según la fecha en que fue consumido el **almuerzo**. 

Prioridad: Media

 
**RF#5**

Título: Visualizar **Saldo**

Actor: **Responsable**

Descripción: El sistema debe permitir visualizar el **saldo** disponible, asociado a un número de cédula de responsable en específico.

Prioridad: Media

 
**RF#6**

Título: Actualizar **Menú**

Actor: **Encargado de cantina**

Descripción: El sistema debe permitir actualizar los datos del **menú**. 

Prioridad: Media

**RF#7**

Título: Comunicación

Actor: **Responsable**

Descripción: El sistema debe brindar la posibilidad de agregar una nota, o detalle para especificar cualquier requisito dietético o preferencia para que se tenga en consideración a la hora de realizar / entregar el **pedido**. 

Prioridad: Baja

### Requerimientos No Funcionales


**RNF#1** 

El sistema debe ser compatible con varios sistemas de navegación, Safari para la versión 14 y superior, Google Chrome para la versión 100 y superior, Firefox para la versión 90 y superior.

Prioridad: Alta

**RNF#2** 

El sistema debe ser capaz de manejar un máximo de doscientos **responsables** en forma simultánea sin variar la velocidad de ejecución.

Prioridad: Alta

**RNF#3** 

El sistema deberá cumplir con los estándares de W3C para HTML5 y JavaScript para así facilitar el mantenimiento.

Prioridad: Alta

**RNF#4** 

El sistema deberá ser compatible con los sistemas operativos, IOS a partir de la versión 13.0, y Android a partir de la versión 10.0.

Prioridad: Alta

**RNF#5**

La interfaz deberá ser responsive, que el diseño se ajuste a los distintos tamaños de pantallas.

Prioridad: Alta

**RNF#6** 

El tiempo de respuesta del sistema para el cargado de interfaz deberá ser de menos de tres segundos.

Prioridad: Media

**RNF#7** 

La interfaz de usuario deberá estar centrada en el **responsable**, buscando reducir la cantidad de clics, disminuyendo el tiempo para realizar pedidos y consultar los consumos. 

Prioridad: Media

## User Stories
 
**Título:** Hacer **pedido**

**Como:** **Responsable**

**Quiero:** Poder realizar el encargo del **almuerzo** elegido a la **cantina** del colegio, para un día en concreto y un **hijo** en específico.

**Para:** Que la tarea de realizar un **pedido** a la cantina, me tome la menor cantidad de tiempo posible, y poder realizarlo en cualquier momento del día, por ejemplo, en la madrugada.


**Criterios de aceptación**

El responsable deberá tener saldo en la cuenta.

Debo ser capaz de elegir el día y la opción de almuerzo elegida de menú.

Se deberá descontar el monto del pedido del saldo.

Posibilidad de cancelación del pedido.

![imagenes](/Imagenes/Ordenar.png)


### Caso de Uso
Pre Condiciones:
- El número de cédula del responsable deberá encontrarse dentro de la base de datos de la cantina, y deberá estar vinculado con los datos de al menos un hijo.

- El menú debe de encontrarse disponible en el sistema.

Pos Condiciones:

- Se realiza un registro del pedido realizado.
- El pedido se muestra en 'Mis Pedidos'.
- La cantina recibe el pedido

Actor: Responsable

**Curso básico:**

    - 1 (ACTOR) Ingresa a la web o aplicación.

    - 2 (SISTEMA) Muestra pantalla de inicio y le pide al responsable que se identifique con número de cédula.

    - 3 (ACTOR) Ingresa con número de cédula del responsable.

    - 4 (SISTEMA) Despliega menú de opciones.

    - 5 (ACTOR) Selecciona botón de ‘Realizar Pedido’.

    - 6 (SISTEMA) Muestra calendario.

    - 7 (ACTOR) Selecciona del calendario el día del que desea conocer el menú ofrecido.

    - 8 (SISTEMA) Muestra menú para el día elegido.

    - 9 (ACTOR) Selecciona una opción de almuerzo del menú, si desea puede poner un comentario y selecciona el comensal. Selecciona botón ‘ORDENAR’.

    - 10 (SISTEMA) Agrega el pedido a la lista de pedidos que se encuentra debajo.

    - 11 (ACTOR) Una vez que terminó de realizar todos los pedidos presiona el botón ‘PAGAR’ para abonar el pedido.

    - 12 (SISTEMA) Descuenta el monto acumulado en los pedidos del saldo presente.



**Curso alternativo:**

**3.1** Si el número de cédula es incorrecto, se emitirá un pop up con el mensaje: "El número de cédula ingresado es incorrecto. Inténtelo nuevamente".

**9.1** Si no selecciona ningún comensal, al seleccionar el botón  “ORDENAR”, se emitirá un pop up con el mensaje: “Debe de seleccionar un comensal para continuar. ”

**11.1** De no tener saldo suficiente, al seleccionar el botón "PAGAR" se emitirá un pop up con el mensaje: “No dispone del saldo suficiente para realizar este pedido. ”


------------------------------

**Título:**  Visualizar **menú** con opciones

**Como:** **Responsable**.

**Quiero:** Poder ver un calendario con los días de la semana, incluyendo las opciones de **almuerzos** disponibles, para un día elegido.

**Para:** ver si las opciones son del agrado de mi hijo, y tomar la decisión de encargar o no.

 
**Criterios de aceptación**

El calendario deberá ser de lunes a viernes.

Si en la semana hay un cambio de mes no deberá afectar la visualización del calendario.

El menú semanal será publicado cada viernes de la semana anterior.

 
### Casos de Uso:
Pre Condiciones:

- El número de cédula del responsable deberá encontrarse dentro de la base de datos de la cantina, y deberá estar vinculado con los datos de al menos un hijo.

- El menú debe de encontrarse disponible en el sistema.

Pos Condiciones:

- El responsable se informa acerca del menú ofrecido por el servicio de cantina

Actor: Responsable

**Curso básico:**

    - 1 (ACTOR) Ingresa a la web o aplicación.

    - 2 (SISTEMA) Muestra pantalla de inicio y le pide al responsable que se identifique con número de cédula.

    - 3 (ACTOR) Ingresa con número de cédula del responsable.

    - 4 (SISTEMA) Despliega menú de opciones.

    - 5 (ACTOR) Selecciona botón de ‘Realizar Pedido’.

    - 6 (SISTEMA) Muestra calendario.

    - 7 (ACTOR) Selecciona del calendario el día del que desea conocer el menú ofrecido.

    - 8 (SISTEMA) Muestra opciones de menú para el día elegido.
 
**Curso alternativo:**

**3.1** Si el número de cédula es incorrecto, se emitirá un pop up con el mensaje: "El número de cédula es incorrecto. Inténtelo nuevamente".

------------------------------

**Título:** Ver **historial**

**Como:** **Responsable**

**Quiero:** Poder ver el **historial** de consumo de mis **hijos** en la última semana.

**Para:** Al momento de cocinar en casa intentar no repetir las preparaciones.
 

**Criterios de aceptación:** 
 
El historial debe especificar que fue consumido cada día, por cual hijo, incluyendo el postre. 

El historial deberá estar ordenado de forma decreciente. (La última consumición se mostrará primero)

![imagenes](/Imagenes/Historial.png)
 

### Casos de Uso

 Pre Condiciones:

- El número de cédula del responsable deberá encontrarse dentro de la base de datos de la cantina, y deberá estar vinculado con los datos de al menos un hijo.

- El responsable realizó al menos un pedido, que ya fue consumido por su hijo. 

Pos Condiciones:

- El responsable se informa acerca del consumo realizado por su/sus hijo/s.

Actor: Responsable 

**Curso básico:**

    - 1 (ACTOR) Ingresa a la web o aplicación.

    - 2 (SISTEMA) Muestra pantalla de inicio y le pide al responsable que se identifique con número de cédula.

    - 3 (ACTOR) Ingresa con número de cédula del responsable.

    - 4 (SISTEMA) Despliega menú de opciones.

    - 5 (ACTOR) Selecciona botón de ‘Historial’

    - 6 (SISTEMA) Muestra una lista con todos los pedidos ya entregados (no pendientes) por los cuales podrá navegar.

**Curso alternativo:**

**3.1** Si el número de cédula es incorrecto, se emitirá un pop up con el mensaje: El número de cédula es incorrecto. Inténtelo nuevamente".

**6.1** En caso de que el usuario no haya realizado ningún pedido anteriormente, la lista se mostrará vacía.

------------------------------

**Titulo:** Cancelar **Pedido**

**Como:** **Responsable**

**Quiero:** Poder cancelar **pedidos** ya realizados para un dia en concreto y un **hijo** específico, antes de la fecha y hora límite establecidas. 

**Para:** Que en la **cantina** no preparen el almuerzo, y que se me reintegre el monto del mismo en caso de que mi hijo no concurra ese día a clase, o alguna otra eventualidad.
 
**Criterios de aceptación**

Tiene que existir al menos un pedido realizado.

Las cancelaciones se podrán realizar hasta las 9.30hs del mismo día. 

Notificar a la cantina de la cancelación.

Notificar al responsable de que la cancelación fue realizada.

El monto del almuerzo, será reintegrado como saldo a favor.

![imagenes](/Imagenes/Cancelar.png) 
 
### Casos de Uso:

 Pre Condiciones:

- El número de cédula del responsable deberá encontrarse dentro de la base de datos de la cantina, y deberá estar vinculado con los datos de al menos un hijo.

- El responsable realizó al menos un pedido para una fecha posterior a la actual. 

Pos Condiciones:

- Se realiza la cancelación del pedido.
- Se reintegra el valor del almuerzo en el saldo.
- Se informa al servicio de cantina de la cancelación.

Actor: Responsable

**Curso básico:**

    - 1 (ACTOR) Ingresa a la web.

    - 2 (SISTEMA) Muestra pantalla de inicio y le pide al responsable que se identifique con número de cédula.

    - 3 (ACTOR) Ingresa con número de cédula del responsable.

    - 4 (SISTEMA) Despliega menú de opciones.

    - 5 (ACTOR) Selecciona botón de ‘Mis Pedidos’

    - 6 (SISTEMA) Muestra pedidos pendientes.

    - 7 (ACTOR) Encuentra el pedido que desea cancelar y selecciona botón ‘Cancelar’

    - 8 (SISTEMA) Emite un pop up con el mensaje: "La cancelacion ha sido exitosa".

    - 9 (SISTEMA) Retira pedido de ‘Mis Pedidos’ y reintegra saldo.
 
**Curso alternativo:**

**3.1** Si el número de cédula es incorrecto, se emitirá un pop up con el mensaje: “El número de cédula es incorrecto. Inténtelo nuevamente”
 
**7.1** Si son pasadas las 9.30 horas del mismo día, se emitirá un pop up con el mensaje: “Lo sentimos, las cancelación se puede realizar hasta las 9.30 am del día del pedido.”


## Prototipos de interfaz de usuario

Aqui se encuentran el resto de interfaces de usuario las cuales consideramos necesarias para el sistema

![imagenes](/Imagenes/Ingreso.png) --> Interfaz de Ingreso al programa

![imagenes](/Imagenes/PantallaPrincipal.png) --> Interfaz de inicio del programa

![imagenes](/Imagenes/Calendario.png) --> Interfaz de calendario 

![imagenes](/Imagenes/Contacto.png) --> Interfaz con datos de contacto

**Prototipo con Pop ups**

![imagenes](/Imagenes/PopUpCancelar.png)

![imagenes](/Imagenes/PopUpCanExitosa.png)

![imagenes](/Imagenes/PopUpCedulaIncorrecta.png)

![imagenes](/Imagenes/PopUpComensal.png)

![imagenes](/Imagenes/PopUpPedidoExitoso.png)

![imagenes](/Imagenes/PopUpSaldo.png)

## Validación y verificación

**Verificación**

Para realizar la verificación del proyecto para determinar si cumple con las especificaciones realizadas, utilizamos un checklist de requerimientos y casos de uso.

El checklist fue muy útil para verificar de forma sistemática el cumplimientos de todos los requisitos para garantizar un buen planteo de requerimientos. 

Esta verificación se realizó en distintas etapas, evaluando completitud, verificabilidad y no ambigüedad, correctitud y consistencia, y trazabilidad.

También fue utilizada la técnica de checklist para la verificación de cada uno de los casos de uso.

A partir del checklist hicimos algunos cambios en la priorización de los requerimientos. Adicionalmente agregamos términos utilizados para la definición de requerimientos en el glosario del modelo conceptual, a fin de no dar lugar a la ambiguedad.

Gracias al checklist pudimos darnos cuenta de diversos errores que habíamos cometido en el planteo de requerimientos, como:

Para el RNF#1, primero lo planteamos como, "la interfaz debe ser amigable con el usuario y sencilla de utilizar".
Notamos que no cumplía con la característica de no ambiguedad, por lo que lo modificamos:

*"La interfaz de usuario deberá estar centrada en el responsable, buscando reducir la cantidad de clics, disminuyendo el tiempo para realizar pedidos y consultar los consumos."*

Para el RNF#7, realizamos el planteo " El sistema deberá ser sencillo de mantener" que no cumplía con la característica de no ambiguedad y lo modificamos por:

*"El sistema deberá cumplir con los estandares de W3C para HTML5 y JavaScript para así facilitar el mantenimiento."*

Para cumplir con la característica de trazabilidad, incluímos en la elicitación el motivo por el cual decidimos que no sea solo una aplicación para dispositivos móviles sino que también un sitio web.

Dentro de las cosas a mejorar, es que realizamos el requerimiento funcional " Actualizar menú" el cual no cumpliría con el aspecto de "está cada requerimiento dentro del problema a resolver". 

Una de las soluciones que encontramos podría ser quitar este requerimiento. Sin embargo, optamos por dejarlo ya que nos parece clave para el funcionamiento del sistema.

Al realizar el checklist de caso de uso, decidimos poner en negrita, palabras que se encontraban en el glosario para las User Stories, con el propósito de facilitar la lectura, y no dar lugar a la ambigüedad de interpretación. También agregamos las pre y pos condiciones.

Los checklist utilizados para la verificación fueron los siguientes:

![imagenes](/Imagenes/CheckListCasosDeUso.png)
![imagenes](/Imagenes/CheckListRequerimientos.png)

**Validación**

Para la validación realizamos pruebas con personas externas al proyecto, que, a su vez, podrían ser potenciales usuarios. Para poder realizar esta validación, realizamos un prototipo del sistema en papel, con instrucciones a seguir, con el fin de obtener feedback.

La decisión de entregar el prototipo en papel fue muy sencilla ya que además de ser muy rápida para realizar, y una forma muy gráfica para ir visualizando los requerimientos, invitaba a estas personas a poder sobrescribir en él, aportando ideas de gran valor. 

Esta etapa de validación del cliente no fue la etapa final, sino que iterativa. Según realizaban modificaciones en el prototipo, también se iban modificando los requerimientos y en cada uno de estos cambios recibimos comentarios de mejoras, hasta llegar a un prototipo final que logró convencer y colmar todas las necesidades del cliente. 
Adicionalmente realizamos estas pruebas de prototipado con personas totalmente externas (no potenciales usuarios) a fin de obtener un diseño intuitivo y sencillo de utilizar.

## Reflexión

Grupal:
En conclusión, estamos de acuerdo en que fue un proyecto desafiante de llevar a cabo pero sumamente necesario, ya que nos brinda numerosas herramientas que sin dudas podrán facilitar etapas posteriores. 

Al comenzar el proyecto, a medida que iban surgiendo ideas, nos pareció que podría resultarnos más sencillo y práctico ir escribiendo la documentación en un documento de Word, debido a la característica que brinda de corrección ortográfica y por ser más amigable para tareas de escritura, para luego transferirlas al respositorio.
Ahora, ya en las últimas etapas del proyecto, nos damos cuenta de que en realidad hubiera sido mejor realizar todas las etapas de elaboración de la documentación en el repositorio, ya que nos hubiera permitido llevar un mejor registro de las tareas realizadas por cada uno. 


**Martina Roll**

En lo personal, el desarrollo de esta entrega me resultó de gran valor, por la profundizacion que implica en aspectos que anteriormente dabamos por supuestos.

La etapa de elicitiación fue de las más valiosas. Tener la oportunidad de conocer y analizar contexto, y de entrevistar a quienes serian posibles usuarios del mismo, logró generar en mí, un gran significado para el proyecto. Además de la importancia del trabajo en equipo para obtener aún más puntos de vista sobre un mismo tema.

La especificación, por su parte, logró “bajar a tierra” todas las grandes ideas que se iban generando en la etapa de elicitación para convertirse en documentación clara, y concisa para el desarrollo de los requerimientos que mejor se adapten a las necesidades de los clientes, y como estos, junto con la validación y verificación iban influenciado en el prototipado del sistema final. 

A mi parecer, el trabajo fue bastante equitativo en cada uno de los puntos a desarrollar. Igualmente, el trabajo con el que colaboré , con el tiempo que me tomó aproximado, fue:

-	Explicar uso de los comandos de git, y establecer pautas del versionado. (40min)
-	Recopilar información para la ingeniería inversa. (80min)
-	Realización y síntesis de entrevistas. (120min)
-	Realización de 2 User Personas.(30min)
-	Planteo de requerimientos y desarrollo de los User Stories y Use Cases.(240min)
-	Colaboración en el prototipado.(60min)
-	Investigación sobre checklists existentes para realizar la verificación.(30min)
-	Acerqué el prototipado a dos personas para realizar la validación. (60min)
-	Redacción de la documentación. (300min)

**Gonzalo Pérez**

Desde mi punto de vista este proyecto fue uno de los más enriquecedores que he tenido a lo largo de la carrera ya que logre apreciar todo lo que sucede detrás de muchos sitios web que conocemos y la cantidad de trabajo que conlleva la realización de un sistema por más básico que sea.

Si tuviese que tomar una decisión sobre cual etapa del proyecto me resulto de mayor valor, no sabría por cual decidirme, pero unas de las que mas me gustaros fueron las etapas de elicitación y prototipado. El prototipado me pareció una de las cosas mas interesantes debido a que llevar al plano un montón de ideas, la complejidad que genera y la satisfacción que da cuando logras integrar todo es una de las cosas más enriquecedoras.

El trabajo en equipo en esta clase de proyectos es muy importante ya que no solo llevaría mucho más tiempo su realización, sino que lo harías basándote en la idea que tu cabeza genere y estarías desperdiciando un montón de posibilidades que quizás tu compañero/a tenga sobre como abordar un tema puntual.
La participación de los dos fue equitativa, quiero hacer énfasis en que mis habilidades con la escritura, sintaxis y gramática no son las mejores, por eso agradezco haber sido con la compañera ya que a la hora de redactar fue clave para desarrollar el informe.

Tareas realizadas y tiempo de colaboración con:

-	La elaboración de preguntas para la entrevista.(60min)
-	Realización de User Personas.(50min)
-	Planteo de requerimientos desarrollo de los User Stories y User Cases.(240min)
-	La creación de prototipado.(300min)
-	La verificación del informe mediante checklist realizado siguiendo las pautas de la letra para verificar que hayamos realizado todo. (120min)
-	la validación mostrándole y explicándole el funcionamiento de este a un posible usuario. (30min)
-	La redacción del documento.(90min)
