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