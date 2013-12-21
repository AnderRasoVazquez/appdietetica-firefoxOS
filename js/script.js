

//#################################################################################################################
//#####################################----FUNCION PESO IDEAL----##################################################

function calcularPI()
{

//----------------------------RECOGIDA DE DATOS PARA LA FÓRMULA---------------------------------

   //Preguntamos por la edad y altura
    var sexo = document.piForm.sexo.value;
    var altura = Number(document.piForm.altura.value);
    var peso = Number(document.piForm.peso.value);

//----------------------------FORMULAS SEGUN EL SEXO---------------------------------

    if (sexo==="Hombre") 
    {
        PIdevine=((altura-152.4)*(0.91)+50);
        PIrobinson= ((altura - 152.4)* (0.748)+52);
        PImiller= ((altura - 152.4)* (0.555)+56.2);
        PIhamwi= ((altura - 152.4)* (1.063)+48.2);
        PIlemmens= 22*((altura/100)*(altura/100));
    }

    if (sexo==="Mujer") 
    {
        PIdevine=  ((altura-152.4)* (0.91) +45.5);
        PIrobinson= ((altura - 152.4)* (0.669)+49);
        PImiller= ((altura - 152.4)* (0.5354)+53.1);
        PIhamwi= ((altura - 152.4)* (0.866)+45.5);
        PIlemmens= 22*((altura/100)*(altura/100));
    }

//----------------------------RESULTADOS----------------------------------------

    //REALIZA EL CÁLCULO DEL PESO IDEAL
    var pi = (PIdevine+PIrobinson+PImiller+PIhamwi+PIlemmens)/5;

    //REALIZA EL CALCULO DEL PORCENTAJE SOBRE EL PESO IDEAL
    /* Esta seria la formula
        97 ---- 100%
        78 ---- X %

        X = 78*100/97
     */
    var porcentPI = peso*100/pi;

    //Nos avisa del resultado
    var piInfo = pi.toFixed(1)+" Kg : ("+(pi-5).toFixed(1)+" - "+(pi+5).toFixed(1)+")";
    var DevineInfo = PIdevine.toFixed(1)+" Kg";
    var RobinsonInfo = PIrobinson.toFixed(1)+" Kg";
    var MillerInfo = PImiller.toFixed(1)+" Kg";
    var HamwiInfo = PIhamwi.toFixed(1)+" Kg";
    var LemmensInfo = PIlemmens.toFixed(1)+" Kg";
    var porcentInfo = porcentPI.toFixed(2)+"%";
    // En el caso de que todos los campos estén llenos haremos la fórmula, de no ser así saldrá el mensaje de error                
    if( altura===0 || peso === 0)
    {
        document.piForm.resultado.value = 'Te faltan campos por rellenar.';
        document.piForm.porcentaje.value = 'Te faltan campos por rellenar.';
        document.piForm.Devine.value = 'Te faltan campos por rellenar.';
        document.piForm.Robinson.value = 'Te faltan campos por rellenar.';
        document.piForm.Miller.value = 'Te faltan campos por rellenar.';
        document.piForm.Hamwi.value = 'Te faltan campos por rellenar.';
        document.piForm.Lemmens.value = 'Te faltan campos por rellenar.';
    } 
    else 
    {
        document.piForm.resultado.value = piInfo;
        document.piForm.porcentaje.value = porcentInfo;
        document.piForm.Devine.value = DevineInfo;
        document.piForm.Robinson.value = RobinsonInfo;
        document.piForm.Miller.value = MillerInfo;
        document.piForm.Hamwi.value = HamwiInfo;
        document.piForm.Lemmens.value = LemmensInfo;
    }

} // Cierra LA FUNCIÓN calcularPI()

//#####################################----FIN FUNCION PESO IDEAL----##############################################
//#################################################################################################################

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