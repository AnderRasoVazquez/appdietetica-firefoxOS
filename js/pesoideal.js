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
