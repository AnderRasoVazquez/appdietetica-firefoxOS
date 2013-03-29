//#################################################################################################################	
//#####################################----FUNCION ICC----#########################################################

function calcularICC(){

//----------------------------RECOGIDA DE DATOS PARA LA FÓRMULA---------------------------------

	// var a = "yeah";
	var pCintura = Number(document.iccForm.pCintura.value);
	var pCadera = Number(document.iccForm.pCadera.value);
    var sexo = document.iccForm.sexo.value;

//----------------------------CALCULO DE LA FORMULA----------------------------------------

    var tuICC = pCintura / pCadera;
    var tuICCInfo;
        // Estas 2 variables indicarán el resultado
        if (sexo === "Hombre") {
            if (tuICC >= 1) {
                tuICCInfo = "ICC = "+tuICC.toFixed(2)+" : Riesgo Cardiovascular";
            } else {
                tuICCInfo = "ICC = "+tuICC.toFixed(2)+" : Sin Riesgo Cardiovascular";
            }
        }

        if (sexo === "Mujer") {
            if (tuICC >= 0.85) {
                tuICCInfo = "ICC = "+tuICC.toFixed(2)+" : Riesgo Cardiovascular";
            } else {
                tuICCInfo = "ICC = "+tuICC.toFixed(2)+" : Sin Riesgo Cardiovascular";
            }
        }
        var errorFaltaDato = 'Te faltan campos por rellenar.';
        // En el caso de que todos los campos estén llenos haremos la fórmula, de no ser así saldrá el mensaje de error                
        if( pCadera===0 || pCintura===0 ){
            document.iccForm.resultado.value = errorFaltaDato;
        } else {
            document.iccForm.resultado.value = tuICCInfo;
        }

}
//#####################################----FIN FUNCION ICC----#####################################################
//#################################################################################################################


