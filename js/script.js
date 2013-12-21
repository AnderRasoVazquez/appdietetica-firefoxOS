


//#################################################################################################################
//#####################################----FUNCION IMC----#########################################################

function calcularIMC() 
{

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
    else 
    {
        var errorFaltaDato = 'Campos mal definidos.';
        document.imcForm.resultado.value = errorFaltaDato;
    }

    document.imcForm.resultado.value = tuIMC.toFixed(2) + resultadoIMC;

}// Cierra LA FUNCIÓN calcularIMC()

//#####################################----FIN FUNCION IMC----#####################################################
//#################################################################################################################

//#################################################################################################################
//#####################################----FUNCION COMPLEXION----#########################################################

function calcularComplexion() {

    // Datos principales
    var sexo = document.complexionForm.sexo.value;
    var perimetroM = Number(document.complexionForm.perimetro.value);
    var altura = Number(document.complexionForm.altura.value);

    // Formula
    var constitucion = (altura / perimetroM).toFixed(2);

    // Resultado
    /*
            Ectomorfo   Mesomorfo    Endomorfo
    Varón   > 10,4      10,4 – 9,6   < 9,6

    Mujer   > 10,9      10,9 – 9,9   < 9,9
    */
    var constitucionInfo;
    if (sexo === "Hombre") 
    {
        if (constitucion >= 10.4) {constitucionInfo = constitucion + " : Ectomorfo";}
        if (constitucion < 10.4 & constitucion > 9.6) {constitucionInfo = constitucion + " : Mesomorfo";}
        if (constitucion <= 9.6) {constitucionInfo = constitucion + " : Endomorfo";}
    }
    if (sexo === "Mujer") 
    {
        if (constitucion >= 10.9) {constitucionInfo = constitucion + " : Longilinea";}
        if (constitucion < 10.9 & constitucion > 9.9) {constitucionInfo = constitucion + " : Mesomorfo";}
        if (constitucion <= 9.9) {constitucionInfo = constitucion + " : Endomorfo";}
    }
    
    if( perimetroM===0 || altura === 0)
    {
        document.complexionForm.resultado.value = "Te faltan campos por rellenar.";
    } 
    else 
    {
        document.complexionForm.resultado.value = constitucionInfo;
    }

} // Cierra LA FUNCIÓN calcularComplexion()

//#####################################----FIN FUNCION COMPLEXION----#####################################################
//#################################################################################################################