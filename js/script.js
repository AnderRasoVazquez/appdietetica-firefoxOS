/*function processForm() {

    var temperature = Number(document.tempForm.temp.value);
    var tempType;
    var result;

    for (var i=0; i < document.tempForm.choice.length; i++) {
        if (document.tempForm.choice[i].checked) {
            tempType = document.tempForm.choice[i].value;
        }
    }

    if (tempType == 'fahrenheit') {
        result = temperature * 9/5 + 32;
    }
    else {
        result = (temperature -  32)  *  5/9;
    }
    // Assign the result field value here
    document.tempForm.resultField.value = result;
}*/

function processForm() {
    //----------PREGUNTAMOS POR EL SEXO PRIMERO YA QUE LOS SIGUIENTES DATOS DEPENDERÁN DEL SEXO-----------------

    var sexo = document.calcForm.sexo.value; //Number() convertirá el valor a un número

//--------------DATOS A RECOGER QUE NO DEPENDEN DEL SEXO--------------------------------

    var edad = Number(document.calcForm.edad.value);
    var altura = Number(document.calcForm.altura.value);
    var peso = Number(document.calcForm.peso.value);


//-------------ASIGNA DIFERENTES DATOS DEPENDIENDO DEL SEXO-----------------------

    //DATOS PARA METABOLISMO BASAL - HOMBRE
    //MB hombres = a + (b * peso) + (c * altura) – (d * edad)
    if(sexo === "Hombre" ){
        var a = 66.4730;
        var b = 13.7516;
        var c = 5.0033;
        var d = 6.7550;

    //DATOS PARA METABOLISMO TOTAL - HOMBRE
        //Hombres -> MB x 1.60 = Actividad ligera, MB x 1.78 = Actividad moderada, MB x 2.10 = Actividad intensa
        var actLigera = 1.60;
        var actModerada = 1.78;
        var actIntensa = 2.10;
    }

    //DATOS PARA METABOLISMO BASAL - MUJER
    //MB mujeres = a + (b * peso) + (c * altura) – (d * edad)
    else if(sexo === "Mujer" ){
        var a = 655.0955;
        var b = 9.5634;
        var c = 1.8496;
        var d = 4.6756;

    //DATOS PARA METABOLISMO TOTAL - MUJER
        //Mujeres -> MB x 1.50 = Actividad ligera , MB x 1.64 = Actividad moderada , MB x 1.90 = Actividad intensa
        var actLigera = 1.50;
        var actModerada = 1.64;
        var actIntensa = 1.90;
    }

//-------------------------------CALCULO DE DATOS-----------------------------------------

//------ECUACION DEL METABOLISMO BASAL - calcula el resultado con los datos de arriba
        var mb = a+(b*peso)+(c*altura)-(d*edad);
        var mbInfo = '<div>'+Math.floor(mb)+' kcal </div>';
        var error = '<div>Tienes que definir todos los campos.</div>';
                // El += es para añadir otro resultado, si fuera solo un = solo apareceria un resultado                  
        if(altura===0 || edad===0 || peso===0 ){
            document.getElementById("mbInfo").innerHTML = error;
        } else {
            document.getElementById("mbInfo").innerHTML = mbInfo;
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
    }//Cierra LA FUNCIÓN metabolismo()