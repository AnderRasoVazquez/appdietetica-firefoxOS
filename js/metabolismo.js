//################################################################################################################# 
//#####################################----FUNCION MB----##########################################################

function calcularMB() 
{
//----------PREGUNTAMOS POR EL SEXO PRIMERO YA QUE LOS SIGUIENTES DATOS DEPENDERÁN DE ELLO-----------------

    var sexo = document.mbForm.sexo.value; //

//--------------DATOS A RECOGER QUE NO DEPENDEN DEL SEXO--------------------------------

    // Number() convertirá el valor a un número
    var edad = Number(document.mbForm.edad.value);
    var altura = Number(document.mbForm.altura.value);
    var peso = Number(document.mbForm.peso.value);

//-------------ASIGNA DIFERENTES DATOS DEPENDIENDO DEL SEXO-----------------------

    /*
        -Embarazo-
        Las recomendaciones de la OMS son:  +150 Kcal. / día el primer trimestre
                                            +350 Kcal. / día el resto del embarazo
        -Mujer lactante-
        El incremento adicional por produccion de leche esta calculado en +750 Kcal/día
    */
    var queEstado = document.mbForm.estado.value;
    var estado;
    // Sumaremos calorías dependiendo del estado 
    // (más adelante marcaremos que no se sumará si es hombre)
    if(queEstado === "normal") {estado = 0;}
    if(queEstado === "embarazoUno" ) {estado = 150;}
    if(queEstado === "embarazoDos") {estado = 350;}
    if(queEstado === "lactante") {estado = 750;}

//------------------ DATOS PARA METABOLISMO BASAL ----------------------------------

// Definimos todas las variables cuyos valores cambiarán dependiendo del sexo
    var a, b, c, d;
    // DATOS PARA METABOLISMO BASAL - HOMBRE
    // MB hombres = a + (b * peso) + (c * altura) – (d * edad)
    if(sexo === "Hombre" ){
        a = 66.4730;
        b = 13.7516;
        c = 5.0033;
        d = 6.7550;
    }

    // DATOS PARA METABOLISMO BASAL - MUJER
    // MB mujeres = a + (b * peso) + (c * altura) – (d * edad)
    else if(sexo === "Mujer" ){
        a = 655.0955;
        b = 9.5634;
        c = 1.8496;
        d = 4.6756;
    }

//------------------ DATOS PARA METABOLISMO TOTAL ----------------------------------

    /* 
    INDICE DE ACTIVIDAD FÍSICA
    1 -    para una persona inactiva o totalmente sedentaria, 
    1,2 - para una persona que realiza una actividad física ligera (andar un poco), 
    1,4 - para alguien que realiza actividad media (actividades cotidianas dinámicas), 
    1,6 - Para una persona muy activa (actividades cotidianas dinámicas y ejercicio de forma regular un mínimo de 3 veces a la semana), 
    1,8 - Persona de actividad extrema (actividades de elevado consumo calórico, trabajos extremos, deportistas de élite...)
    */
    // Definimos los valores que tiene cada nivel de actividad
    var actNula = 1.2;
    var actLigera = 1.375;
    var actModerada = 1.55;
    var actIntensa = 1.725;
    var actExtrema = 1.9;

    // Miramos cual es la opción escogida y le asignamos el valor correspondiente
    var actividadFisica = document.mbForm.actividad.value;
    var deporte;
    if (actividadFisica === "nula") {deporte = actNula;}
    if (actividadFisica === "ligera") {deporte = actLigera;}
    if (actividadFisica === "moderada") {deporte = actModerada;}
    if (actividadFisica === "intensa") {deporte = actIntensa;}
    if (actividadFisica === "extrema") {deporte = actExtrema;}

    /* 
    INDICE DE ENFERMEDAD
    -   Enfermedad leve:      aumentan un 10%
    -   Enfermedad moderada   25%
    -   Enfermedad grave      50%
    -   Neumonía              20%
    -   Politraumatizado      30%
    -   Sepsis                50%
    -   Quemaduras            80%
    */
    // Definimos los valores que tiene cada nivel de enfermedad
    var enfNula = 1;
    var enfLeve = 1.1;
    var enfModerada = 1.25;
    var enfGrave = 1.5;
    var enfNeumonia = 1.2;
    var enfPolitraumatizado = 1.3;
    var enfSepsis = 1.5;
    var enfQuemaduras = 1.8;

    // Miramos cual es la opción escogida y le asignamos el valor correspondiente
    var enf = document.mbForm.enfermedad.value;
    var indEnf;
    if (enf === "nula") {indEnf = enfNula;}
    if (enf === "leve") {indEnf = enfLeve;}
    if (enf === "moderada") {indEnf = enfModerada;}
    if (enf === "grave") {indEnf = enfGrave;}
    if (enf === "neumonia") {indEnf = enfNeumonia;}
    if (enf === "politraumatizado") {indEnf = enfPolitraumatizado;}
    if (enf === "sepsis") {indEnf = enfSepsis;}
    if (enf === "quemaduras") {indEnf = enfQuemaduras;}

//-------------------------------CALCULO DE DATOS-----------------------------------------

    //En caso de que falte algún dato
    var errorFaltaDato = 'Te faltan campos por rellenar.';

//------ECUACION DEL METABOLISMO BASAL - calcula el resultado con los datos de arriba

    var mb = a+(b*peso)+(c*altura)-(d*edad);

    // CASOS ESPECIALES
    /* 
        Tercera edad
        Reducción de 200 Kcal desde los 50 años  hasta los 75 años
        Reducción de 500 Kcal  en hombres mayores de 75 años 
        Reducción de 400 Kcal en mujeres mayores de 75 años
    */

    if(edad >= 50 & edad < 75) { mb-=200;}
    if (edad >= 75) 
    {
        if(sexo === "Hombre") { mb-=500;}
        if(sexo === "Mujer") { mb-=400;}
    }

    var mbInfo;
    // Si es hombre no sumaremos al resultado la variable "estado" (embarazo o lactancia)
    if(sexo==="Hombre") 
    {
        if(queEstado != "normal")
        {
            alert("Esa opción es para mujer, no tendrá efecto en el hombre.");
            mbInfo = Math.floor(mb)+' Kcal';
        } 
        else 
        {
            mbInfo = Math.floor(mb)+' Kcal';
        }
    }

    if(sexo==="Mujer") 
    {
        mbInfo = (Math.floor(mb)+estado)+' Kcal';
        // Es importante sumar en el resultado el estado y no en la variable mb 
        // ya que nos influiría en el cálculo del metabolismo total
    }


//----------ECUACIÓN DEL METABOLISMO TOTAL - calcula el resultado multiplicando el MB por el tipo de actividad y por enfermedad


    // Multiplicamos el metabolismo basal por el deporte que haga y después por la enfermedad
    var mt = mb*deporte*indEnf;

    var mtInfo;
    // Si es hombre no sumaremos al resultado del incremento por embarazo o lactancia
    if(sexo==="Hombre") {mtInfo = Math.floor(mt)+' Kcal';}
    if(sexo==="Mujer") {mtInfo = (Math.floor(mt)+estado)+' Kcal';}

    // Si faltan datos por meter avisará con una alerta
    if( altura===0 || edad===0 || peso===0 )
    {
        // alert(errorFaltaDato);
        document.mbForm.resultado.value = errorFaltaDato;
        document.mbForm.resultadoTotal.value = errorFaltaDato;
    } 
    else 
    {
        // Muestra el resultado del METABOLISMO BASAL y del METABOLISMO TOTAL
        document.mbForm.resultado.value = mbInfo;
        document.mbForm.resultadoTotal.value = mtInfo;
    }

} // Cierra LA FUNCIÓN calcularMB()

//#####################################----FIN FUNCION MB----######################################################
//################################################################################################################# 
