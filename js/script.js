// ESTA ES LA FUNCIÓN QUE PROCESARÁ LOS DATOS INTRODUCIDOS EN EL FORMULARIO
function processForm() {
    //----------PREGUNTAMOS POR EL SEXO PRIMERO YA QUE LOS SIGUIENTES DATOS DEPENDERÁN DEL SEXO-----------------

    var sexo = document.calcForm.sexo.value; //Number() convertirá el valor a un número

//--------------DATOS A RECOGER QUE NO DEPENDEN DEL SEXO--------------------------------

    var edad = Number(document.calcForm.edad.value);
    var altura = Number(document.calcForm.altura.value);
    var peso = Number(document.calcForm.peso.value);
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
            document.calcForm.resultado.value = errorFaltaDato;
        } else {
            document.calcForm.resultado.value = mbInfo;
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


    } // Cierra LA FUNCIÓN processForm()