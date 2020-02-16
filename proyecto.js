var caja_texto = document.getElementById("text");
var caja_texto0 = document.getElementById("text0");
var caja_texto1 = document.getElementById("text1");
var caja_texto2 = document.getElementById("text2");
var caja_texto3 = document.getElementById("text3");
var caja_texto4 = document.getElementById("text4");
var caja_texto5 = document.getElementById("text5");
var caja_texto6 = document.getElementById("text6");
var caja_texto7 = document.getElementById("text7");
var boton = document.getElementById("button")
boton.addEventListener("click", registro);
const precio_base = 250;
const comision = precio_base * 0.30;

const hoy = new Date();
var mes_actual = hoy.getMonth() + 1;
var dia_actual = hoy.getDate();

var edad_principal;
var recargo_principal;
var recargo_conyuge;
var recargo_hijos;
var totalPagar;
var recargo_total;
var conyuge;
var hijos;
var nombre;
var dia_nacimiento;

function registro() 
{
  dia_nacimiento = parseInt(caja_texto0.value);
  var mes_nacimiento = parseInt(caja_texto1.value);
  var anioNacimiento = parseInt(caja_texto2.value);
  var edad_año = 2020 - anioNacimiento;
  nombre = String(caja_texto.value);
  //Verificando cuandos años tiene
  if (mes_actual < mes_nacimiento) 
  {
    edad_principal = edad_año - 1;
  }
  else 
  {
    if(dia_actual < dia_nacimiento)
    {
      edad_principal = edad_año - 1;
    }

    else
    {
      edad_principal = edad_año;
    }
  }

  //Verificando si puede obtar o no al seguro
  if (edad_principal < 18) 
  {
    alert("Debe de ser mayor de edad para poder obtar al seguro")
    document.write("Gracias por visitar Seguros TK-U");
  }
  else if (edad_principal > 65) 
  {
    alert("La edad maxima para obtar al seguro es de 65 años")
    document.write("Gracias por visitar Seguros TK-U");
  }
  else 
  {
    //recargos edad principal
    if ((edad_principal >= 18) && (edad_principal < 21)) 
    {
      recargo_principal = 0;
    }
    else if ((edad_principal >= 21) && (edad_principal < 25)) 
    {
      recargo_principal = precio_base * 0.01;
    }
    else if ((edad_principal >= 25) && (edad_principal < 30))
     {
      recargo_principal = precio_base * 0.02;
    }
    else if ((edad_principal >= 30) && (edad_principal < 40)) 
    {
      recargo_principal = precio_base * 0.05;
    }
    else if ((edad_principal >= 40) && (edad_principal < 50))
     {
      recargo_principal = precio_base * 0.08;
    }
    else if ((edad_principal >= 50) && (edad_principal <= 65)) 
    {
      recargo_principal = precio_base * 0.12;
    }


    //RECARGO CONYUGE
    conyuge = caja_texto3.value;

    if ((conyuge == 'si') || (conyuge == 'Si') || (conyuge == 'SI')) 
    {
      var edad_conyuge = parseInt(caja_texto4.value);

      if (edad_conyuge < 30) 
      {
        recargo_conyuge = precio_base * 0.01;
      }
      else if ((edad_conyuge >= 30) && (edad_conyuge < 40)) 
      {
        recargo_conyuge = precio_base * 0.02;
      }
      else if ((edad_conyuge >= 40) && (edad_conyuge < 50)) 
      {
        recargo_conyuge = precio_base * 0.02;
      }
      else if ((edad_conyuge >= 50) && (edad_conyuge <= 70)) 
      {
        recargo_conyuge = precio_base * 0.05;
      }
      else if (edad_conyuge > 70) 
      {
        alert("El conyuge no puede exceder de los 70 años");
        conyuge = 'no';
      }
    }

    //RECARGO HIJOS
    hijos = caja_texto5.value;

    if ((hijos == 'si') || (hijos == 'Si') || (hijos == 'SI')) 
    {
      var cantidad_hijos = parseInt(caja_texto6.value);
      recargo_hijos = cantidad_hijos * precio_base * 0.01;
    }
  }
  mensaje();
}

function mensaje()
{
  //MENSAJE
  if (((conyuge == 'si') || (conyuge == 'Si') || (conyuge == 'SI')) && ((hijos == '') || (hijos == '') || (hijos == ''))) {
    recargo_total = recargo_conyuge + recargo_principal;
    totalPagar = precio_base + comision + recargo_total;
    document.getElementById("mensaje").innerHTML = "Muchas gracias " + nombre + " por preferirnos" + "<br>"+"Los recargos aplicados son: " + "<br>"+"Cargo por precio base: Q"+precio_base+"<br>"+"Cargo por comision: Q"+comision+"<br>"+"Cargo por edad: Q"+recargo_principal+"<br>"+"Cargos por conyuge: Q"+recargo_conyuge+"<br>"+"El total a pagar es: Q"+totalPagar;
    
  }
  else if (((conyuge == '') || (conyuge == '') || (conyuge == '')) && ((hijos == 'si') || (hijos == 'Si') || (hijos == 'SI'))) {
    recargo_total = recargo_hijos + recargo_principal;
    totalPagar = precio_base + comision + recargo_total;
    document.getElementById("mensaje").innerHTML = "Muchas gracias " + nombre + " por preferirnos" + "<br>"+"Los recargos aplicados son: " + "<br>"+"Cargo por precio base: Q"+precio_base+"<br>"+"Cargo por comision: Q"+comision+"<br>"+"Cargo por edad: Q"+recargo_principal+"<br>"+"Cargos por hijo(s): Q"+recargo_hijos+"<br>"+"El total a pagar es: Q"+totalPagar;
  }
  else if (((conyuge == '') || (conyuge == '') || (conyuge == '')) && ((hijos == '') || (hijos == '') || (hijos == ''))) {
    totalPagar = precio_base + comision + recargo_principal;
    document.getElementById("mensaje").innerHTML = "Muchas gracias " + nombre + " por preferirnos" + "<br>"+"Los recargos aplicados son: " + "<br>"+"Cargo por precio base: Q"+precio_base+"<br>"+"Cargo por comision: Q"+comision+"<br>"+"Cargo por edad: Q"+recargo_principal+"<br>"+"El total a pagar es: Q"+totalPagar;
  }
  else if (((conyuge == 'si') || (conyuge == 'Si') || (conyuge == 'SI')) && ((hijos == 'si') || (hijos == 'Si') || (hijos == 'SI'))) {
    recargo_total = recargo_conyuge + recargo_hijos + recargo_principal;
    totalPagar = precio_base + comision + recargo_total;
    document.getElementById("mensaje").innerHTML = "Muchas gracias " + nombre + " por preferirnos" + "<br>"+"Los recargos aplicados son: " + "<br>"+"Cargo por precio base: Q"+precio_base+"<br>"+"Cargo por comision: Q"+comision+"<br>"+"Cargo por edad: Q"+recargo_principal+"<br>"+"Cargos por conyuge: Q"+recargo_conyuge+"<br>"+"Cargos por hijo(s): Q"+recargo_hijos+"<br>"+"El total a pagar es: Q"+totalPagar;
  }
} 
