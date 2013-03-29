//################################################################################################################# 
//#####################################----FUNCION MB----##########################################################

function calcularMB() {

    //----------PREGUNTAMOS POR EL SEXO PRIMERO YA QUE LOS SIGUIENTES DATOS DEPENDERÁN DEL SEXO-----------------

    var sexo = document.mbForm.sexo.value; //Number() convertirá el valor a un número

//--------------DATOS A RECOGER QUE NO DEPENDEN DEL SEXO--------------------------------

    var edad = Number(document.mbForm.edad.value);
    var altura = Number(document.mbForm.altura.value);
    var peso = Number(document.mbForm.peso.value);
    // Definimos todas las variables cuyos valores cambiarán dependiendo del sexo
    var a, b, c, d, actLigera, actModerada, actIntensa;

//-------------ASIGNA DIFERENTES DATOS DEPENDIENDO DEL SEXO-----------------------

    // DATOS PARA METABOLISMO BASAL - HOMBRE
    // MB hombres = a + (b * peso) + (c * altura) – (d * edad)
    if(sexo === "Hombre" ){
        a = 66.4730;
        b = 13.7516;
        c = 5.0033;
        d = 6.7550;

    // DATOS PARA METABOLISMO TOTAL - HOMBRE
        //Hombres -> MB x 1.60 = Actividad ligera, MB x 1.78 = Actividad moderada, MB x 2.10 = Actividad intensa
        actLigera = 1.60;
        actModerada = 1.78;
        actIntensa = 2.10;
    }

    // DATOS PARA METABOLISMO BASAL - MUJER
    // MB mujeres = a + (b * peso) + (c * altura) – (d * edad)
    else if(sexo === "Mujer" ){
        a = 655.0955;
        b = 9.5634;
        c = 1.8496;
        d = 4.6756;

    // DATOS PARA METABOLISMO TOTAL - MUJER
        //Mujeres -> MB x 1.50 = Actividad ligera , MB x 1.64 = Actividad moderada , MB x 1.90 = Actividad intensa
        actLigera = 1.50;
        actModerada = 1.64;
        actIntensa = 1.90;
    }

//-------------------------------CALCULO DE DATOS-----------------------------------------

//------ECUACION DEL METABOLISMO BASAL - calcula el resultado con los datos de arriba
        var mb = a+(b*peso)+(c*altura)-(d*edad);
        // Estas 2 variables indicarán el resultado
        var mbInfo = Math.floor(mb)+' Kcal';
        var errorFaltaDato = 'Te faltan campos por rellenar.';
        // En el caso de que todos los campos estén llenos haremos la fórmula, de no ser así saldrá el mensaje de error                
        if( altura===0 || edad===0 || peso===0 ){
            document.mbForm.resultado.value = errorFaltaDato;
        } else {
            document.mbForm.resultado.value = mbInfo;
        }

        //!!!Muestra el resultado en una caja "confirm", si aceptamos calculara el METABOLISMO TOTAL, aceptamos?!!!!!!!!

        //Si aceptamos la variable "calcularTotal" es -> true, por lo tanto:
        /*if(calcularTotal){
            //Prompt para insertar el tipo de actividad que realiza, es necesario para calcular el METABOLISMO TOTAL...
            //el valor de las variables actLigera, actMOderada y actIntensa...se han definido arriba dependiendo del sexo
            var actividadFisica = Number(document.tempForm.temp.value);

//----------ECUACIÓN DEL METABOLISMO TOTAL - calcula el resultado multiplicando el MB por el tipo de actividad
            var mt = mb*actividadFisica;

            //Muestra con una alerta el METABOLISMO TOTAL ( la variable "e" dice: esta mujer || este hombre )
            alert("El metabolismo total de "+e+" es de "+Math.floor(mt)+" calorías. Más el 10% de calorías gastadas en la digestión "+Math.floor(mt*1.10)+".");
            }*/


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