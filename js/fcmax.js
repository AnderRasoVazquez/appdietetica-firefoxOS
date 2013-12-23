//################################################################################################################# 
//##################################----Fc Max Sedentario----######################################################
/*
http://www.vitonica.com/entrenamiento/calcula-tu-frecuencia-cardiaca-maxima
http://www.vitonica.com/spinning/la-frecuencia-cardiaca-y-el-entrenamiento-como-se-calcula-que-valores-son-adecuados

Sedentario
FCmax = 220 – edad
Para mujeres, como suelen tener la frecuencia cardíaca más alta se recomienda restar la edad a 225

Entrenado
Hombres: FCmax = 209 – (0,7 x edad)
Mujeres: FCmax = 214 – (0,8 x edad)

Lo ideal es dar intervalos de porcentajes de 10 para trabajar una zona según el objetivo perseguido:


Intensidad muy ligera: 50-60%, útil para trabajos de recuperación, calentamiento y vuelta a la calma.

Intensidad ligera: 60-70%, zona para el trabajo base de la condición física, muy recomendable para personas que se inician en el deporte y quieren comenzar a construir una buena forma física. También utilizado en los inicios de temporada de deportistas para comenzar a asentar una base de trabajo.

Intensidad moderada: 70-80%, intervalo en el que ya se persigue un objetivo de mejora en rendimiento y se trabaja la eficiencia del corazón (utilización de menos energía para la realización de un esfuerzo). Recomendado para ciclos de entrenamientos preparatorios a pruebas de media-larga duración donde se establece una base aeróbica importante.

Intensidad dura:80-90%, este ya es un escalón donde la fatiga aparece de manera manifiesta. El objetivo es ganar rendimiento y poder trabajar a alta intensidad a lo largo del tiempo. No se recomienda para programas donde se busque mejora de la condición física básica, para eso están los escalones anteriores. Este es un intervalo más para entrenamiento específico y anaeróbico que persigue rendimiento en el deporte.

Intensidad máxima: 90-100%, es el máximo esfuerzo que pueden tolerar nuestros órganos y músculos, se trata de un entrenamiento anaeróbico que debido a su dureza sólo se puede aplicar en breves periodos de tiempo (menos de 5 minutos). Las agujetas y el ácido láctico harán aqui de las suyas, por eso sólo es recomendable para entrenamientos específicos de deportistas que busquen rendimiento.


*/


function calcularFcMax()
{

//----------------------------RECOGIDA DE DATOS PARA LA FÓRMULA---------------------------------

    var pCintura = Number(document.iccForm.pCintura.value);
    var pCadera = Number(document.iccForm.pCadera.value);
    var sexo = document.iccForm.sexo.value;

//----------------------------CALCULO DE LA FORMULA----------------------------------------

    var tuICC = pCintura / pCadera;
    var tuICCInfo;
    // Estas 2 variables indicarán el resultado
    if (sexo === "Hombre") 
    {
        if (tuICC >= 1) 
        {
            tuICCInfo = tuICC.toFixed(2)+" : Riesgo Cardiovascular";
        } 
        else 
        {
            tuICCInfo = tuICC.toFixed(2)+" : Sin Riesgo Cardiovascular";
        }
    }

    if (sexo === "Mujer") 
    {
        if (tuICC >= 0.85) 
        {
            tuICCInfo = tuICC.toFixed(2)+" : Riesgo Cardiovascular";
        } 
        else 
        {
            tuICCInfo = tuICC.toFixed(2)+" : Sin Riesgo Cardiovascular";
        }
    }

    // En el caso de que todos los campos estén llenos haremos la fórmula, de no ser así saldrá el mensaje de error                
    var errorFaltaDato = 'Te faltan campos por rellenar.';
    if( pCadera===0 || pCintura===0 )
    {
        document.iccForm.resultado.value = errorFaltaDato;
    } 
    else 
    {
        document.iccForm.resultado.value = tuICCInfo;
    }

}// Cierra LA FUNCIÓN calcularICC()

//#####################################----FIN FUNCION ICC----#####################################################
//#################################################################################################################

//################################################################################################################# 
//##################################----Fc Max Entrenado----#######################################################

function calcularFcMax()
{

//----------------------------RECOGIDA DE DATOS PARA LA FÓRMULA---------------------------------

    var pCintura = Number(document.iccForm.pCintura.value);
    var pCadera = Number(document.iccForm.pCadera.value);
    var sexo = document.iccForm.sexo.value;

//----------------------------CALCULO DE LA FORMULA----------------------------------------

    var tuICC = pCintura / pCadera;
    var tuICCInfo;
    // Estas 2 variables indicarán el resultado
    if (sexo === "Hombre") 
    {
        if (tuICC >= 1) 
        {
            tuICCInfo = tuICC.toFixed(2)+" : Riesgo Cardiovascular";
        } 
        else 
        {
            tuICCInfo = tuICC.toFixed(2)+" : Sin Riesgo Cardiovascular";
        }
    }

    if (sexo === "Mujer") 
    {
        if (tuICC >= 0.85) 
        {
            tuICCInfo = tuICC.toFixed(2)+" : Riesgo Cardiovascular";
        } 
        else 
        {
            tuICCInfo = tuICC.toFixed(2)+" : Sin Riesgo Cardiovascular";
        }
    }

    // En el caso de que todos los campos estén llenos haremos la fórmula, de no ser así saldrá el mensaje de error                
    var errorFaltaDato = 'Te faltan campos por rellenar.';
    if( pCadera===0 || pCintura===0 )
    {
        document.iccForm.resultado.value = errorFaltaDato;
    } 
    else 
    {
        document.iccForm.resultado.value = tuICCInfo;
    }

}// Cierra LA FUNCIÓN calcularICC()

//#####################################----FIN FUNCION ICC----#####################################################
//#################################################################################################################
