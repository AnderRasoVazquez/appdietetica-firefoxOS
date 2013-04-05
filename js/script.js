//################################################################################################################# 
//#####################################----FUNCION MB----##########################################################

function calcularMB() {

    //----------PREGUNTAMOS POR EL SEXO PRIMERO YA QUE LOS SIGUIENTES DATOS DEPENDERÁN DE ELLO-----------------

    var sexo = document.mbForm.sexo.value; //Number() convertirá el valor a un número
    // $(document).ready(function($) {
    //     if (sexo==="Mujer") {
    //         $('#sexoOpcion').append('<label for="sexoOpcion" >SexoOpcion</label><select name="sexoOpcion" id="sexoOpcion"><option value="#">Normal</option><option value="#">Embarazada 1 Trimestre</option><option value="#">Embarazo 2-3 Trimestre</option><option value="#">Lactante</option></select>');
    //     }
    // });
//--------------DATOS A RECOGER QUE NO DEPENDEN DEL SEXO--------------------------------

    var edad = Number(document.mbForm.edad.value);
    var altura = Number(document.mbForm.altura.value);
    var peso = Number(document.mbForm.peso.value);


//-------------ASIGNA DIFERENTES DATOS DEPENDIENDO DEL SEXO-----------------------
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

/* INDICE DE ACTIVIDAD FÍSICA
   1 -    para una persona inactiva o totalmente sedentaria, 
   1,2 - para una persona que realiza una actividad física ligera (andar un poco), 
   1,4 - para alguien que realiza actividad media (actividades cotidianas dinámicas), 
   1,6 - Para una persona muy activa (actividades cotidianas dinámicas y ejercicio de forma regular un mínimo de 3 veces a la semana), 
   1,8 - Persona de actividad extrema (actividades de elevado consumo calórico, trabajos extremos, deportistas de élite...)
*/
        var actNula = 1;
        var actLigera = 1.2;
        var actModerada = 1.4;
        var actIntensa = 1.6;
        var actExtrema = 1.8;

        var actividadFisica = document.mbForm.actividad.value;
        var deporte;
        if (actividadFisica === "nula") {deporte = actNula;}
        if (actividadFisica === "ligera") {deporte = actLigera;}
        if (actividadFisica === "moderada") {deporte = actModerada;}
        if (actividadFisica === "intensa") {deporte = actIntensa;}
        if (actividadFisica === "extrema") {deporte = actExtrema;}

/* INDICE DE ENFERMEDAD
-   Enfermedad leve:      aumentan un 10%
-   Enfermedad moderada   25%
-   Enfermedad grave      50%
-   Neumonía              20%
-   Politraumatizado      30%
-   Sepsis                50%
-   Quemaduras            80%
*/
        var enfNula = 1;
        var enfLeve = 1.1;
        var enfModerada = 1.25;
        var enfGrave = 1.5;
        var enfNeumonia = 1.2;
        var enfPolitraumatizado = 1.3;
        var enfSepsis = 1.5;
        var enfQuemaduras = 1.8;

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

/* EFECTO TÉRMICO DE LOS ALIMENTOS
Es la energía que invierte el organismo en digerir, metabolizar y transportar los nutrientes de la dieta. 
Se establece un 10% de incremento sobre el valor hallado anteriormente.
 */
        var tef = (Number(document.mbForm.tef.value))/100 + 1; //Convertimos el número para multiplicar Ejemplo: 5 --> 1,05

//-------------------------------CALCULO DE DATOS-----------------------------------------

        //En caso de que falte algún dato
        var errorFaltaDato = 'Te faltan campos por rellenar.';

//------ECUACION DEL METABOLISMO BASAL - calcula el resultado con los datos de arriba

        var mb = a+(b*peso)+(c*altura)-(d*edad);

        // CASOS ESPECIALES

        /* Tercera edad
        Reducción de 200 Kcal desde los 50 años  hasta los 75 años
        Reducción de 500 Kcal  en hombres mayores de 75 años 
        Reducción de 400 Kcal en mujeres mayores de 75 años
        */

        if(edad >= 50 & edad < 75) { mb-=200;}
        if (edad >= 75) {
            if(sexo === "Hombre") { mb-=500;}
            if(sexo === "Mujer") { mb-=400;}
        }

        // Estas 2 variables indicarán el resultado
        var mbInfo = Math.floor(mb)+' Kcal';


//----------ECUACIÓN DEL METABOLISMO TOTAL - calcula el resultado multiplicando el MB por el tipo de actividad y por enfermedad


        // Multiplicamos el metabolismo basal por el deporte que haga y después por el tef
        var mt = mb*deporte*indEnf*tef;
        var mtInfo = Math.floor(mt)+' Kcal';

        //Muestra el resultado del METABOLISMO TOTAL
        if( altura===0 || edad===0 || peso===0 ){
            alert(errorFaltaDato);
        } else {
            document.mbForm.resultado.value = mbInfo;
            document.mbForm.resultadoTotal.value = mtInfo;
        }


    } // Cierra LA FUNCIÓN calcularMB()

//#####################################----FIN FUNCION MB----######################################################
//################################################################################################################# 

//################################################################################################################# 
//#####################################----FUNCION ICC----#########################################################

function calcularICC(){

//----------------------------RECOGIDA DE DATOS PARA LA FÓRMULA---------------------------------

    var pCintura = Number(document.iccForm.pCintura.value);
    var pCadera = Number(document.iccForm.pCadera.value);
    var sexo = document.iccForm.sexo.value;

//----------------------------CALCULO DE LA FORMULA----------------------------------------

    var tuICC = pCintura / pCadera;
    var tuICCInfo;
        // Estas 2 variables indicarán el resultado
        if (sexo === "Hombre") {
            if (tuICC >= 1) {
                tuICCInfo = tuICC.toFixed(2)+" : Riesgo Cardiovascular";
            } else {
                tuICCInfo = tuICC.toFixed(2)+" : Sin Riesgo Cardiovascular";
            }
        }

        if (sexo === "Mujer") {
            if (tuICC >= 0.85) {
                tuICCInfo = tuICC.toFixed(2)+" : Riesgo Cardiovascular";
            } else {
                tuICCInfo = tuICC.toFixed(2)+" : Sin Riesgo Cardiovascular";
            }
        }

        // En el caso de que todos los campos estén llenos haremos la fórmula, de no ser así saldrá el mensaje de error                
        var errorFaltaDato = 'Te faltan campos por rellenar.';
        if( pCadera===0 || pCintura===0 ){
            document.iccForm.resultado.value = errorFaltaDato;
        } else {
            document.iccForm.resultado.value = tuICCInfo;
        }

}
//#####################################----FIN FUNCION ICC----#####################################################
//#################################################################################################################

//#################################################################################################################
//#####################################----FUNCION PESO IDEAL----##################################################

function calcularPI(){
    //Informa del tipo de formula que se esta utilizando
    // alert("Fórmula de Lorenzt.");

//----------------------------RECOGIDA DE DATOS PARA LA FÓRMULA---------------------------------

    var sexo = document.piForm.sexo.value;
   //Preguntamos por la edad y altura
    var edad = Number(document.piForm.edad.value);
    var altura = Number(document.piForm.altura.value);

//----------------------------CALCULO DE LA FORMULA----------------------------------------
    //Peso Ideal = altura - 100 - [ ( altura - 150 ) / 4 ] + [ ( edad - 20 ) / k ]
    // k = 4 (Hombres) ó 2,5 (Mujeres)
    var k = 2;
    if(sexo === "Hombre" ){
        k=4;
    } else if(sexo === "Mujer"){
        k=2.5;
    }
    //REALIZA EL CÁLCULO DEL PESO IDEAL
    var pi = altura -100 - ((altura - 150) / 4) + ((edad - 20) / k);
    //Nos avisa del resultado con una alerta
    var piInfo = pi.toFixed(1)+" Kg";

    // En el caso de que todos los campos estén llenos haremos la fórmula, de no ser así saldrá el mensaje de error                
    var errorFaltaDato = 'Te faltan campos por rellenar.';
    if( altura===0 ){
        document.piForm.resultado.value = errorFaltaDato;
    } else {
        document.piForm.resultado.value = piInfo;
    }
}
//#####################################----FIN FUNCION PESO IDEAL----##############################################
//#################################################################################################################

//#################################################################################################################
//#####################################----FUNCION IMC----#########################################################

function calcularIMC() {
    //Avisa de que la formula no vale en todos los casos (deportistas de elite y ancianos)
    // alert("Fórmula del IMC, aclarar que no vale para deportistas de élite ni ancianos.");

//----------------------------RECOGIDA DE DATOS PARA LA FÓRMULA---------------------------------

    var peso = Number(document.imcForm.peso.value);
    var altura = Number(document.imcForm.altura.value);

//----------------------------CALCULO DE LA FORMULA----------------------------------------

    var tuIMC = peso / (altura*altura);
    /* -------- RESULTADO DE IMC ----------
        Desnutrido   <18,5
        Normal   18,5-24,9
        Sobrepeso grado I    25-26,9
        Sobrepeso grado II   27-29,9
        Obesidad tipo I  30-34,6
        Obesidad tipo II     35-39,9
        Obesidad tipo III(mórbida)   40-49,9
    */
    if(tuIMC>=10 && tuIMC<18.5){resultadoIMC = " Desnutrición";}
    else if(tuIMC>=18.5 && tuIMC<=24.9){resultadoIMC = " Normopeso";}
    else if(tuIMC>=25 && tuIMC<=26.9){resultadoIMC = " Sobrepeso Grado I";}
    else if(tuIMC>=27 && tuIMC<=29.9){resultadoIMC = " Sobrepeso Grado II";}
    else if(tuIMC>=30 && tuIMC<=34.6){resultadoIMC = " Obesidad Tipo I";}
    else if(tuIMC>=35 && tuIMC<=39.9){resultadoIMC = " Obesidad Tipo II";}
    else if(tuIMC>40){resultadoIMC = " Obesidad Tipo III(mórbida)";}
    //si el resultado no es un número avisa del error
    else {
        var errorFaltaDato = 'Campos mal definidos.';
        document.imcForm.resultado.value = errorFaltaDato;
}
    //Informa del resultado, nos lo da en 2 decimales -> toFixed(2)

   /* if( altura===0 || peso === 0 ){
        document.imcForm.resultado.value = errorFaltaDato;
    } else {
        document.imcForm.resultado.value = piInfo;
    }*/
    document.imcForm.resultado.value = tuIMC.toFixed(2) + resultadoIMC;
}
//#####################################----FIN FUNCION IMC----#####################################################
//#################################################################################################################

