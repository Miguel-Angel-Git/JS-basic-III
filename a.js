let contador = 1;
let contadorString = 1;

function suma(var1, var2) {
  return var1 + var2;
}

const resta = (var1, var2) => var1 - var2;
const multiplicar = (var1, var2) => var1 * var2;
const div = (var1, var2) => var1 / var2;
const potencia = (var1, var2) => var1 ** var2;
const restoDiv = (var1, var2) => var1 % var2;

function NejecicioNumero(texto = "") {
  console.log("");
  console.log("");
  console.log(
    "----------------ejercicio Numero: " + contador++ + "----------------"
  );
  console.log(texto);
  console.log("");
}

function NejecicioString(nombreEjercicio = "") {
  console.log("");
  console.log("");
  console.log(
    "               *****  ejercicio STR: " + contadorString++ + " **** "
  );
  console.log(nombreEjercicio);
  console.log("");
}

let contadorArray = 0;
function NejecicioArray(nombreEjercicio = "") {
  console.log("");
  console.log("");
  console.log(
    "               *****  ejercicio ARRAY: " + contadorArray++ + " **** "
  );
  console.log(nombreEjercicio);
  console.log("");
}
function print(
  a = "",
  b = "",
  c = "",
  d = "",
  e = "",
  f = "",
  g = "",
  h = "",
  i = "",
  j = "",
  k = ""
) {
  console.log(a + b + c + d + e + f + g + h + i + j + k);
}

NejecicioNumero("Dos números como argumentos y devuelva su suma");
console.log(suma(4, 6));

NejecicioNumero("Dos números como argumentos y devuelva su resta");
console.log("resta: " + resta(125, 2));

NejecicioNumero("Dos números como argumentos y devuelva su producto");
console.log("Multiplicar: " + multiplicar(50, 2));

NejecicioNumero("Dos números como argumentos y devuelva su división");
console.log("dividir " + div(50, 2));

NejecicioNumero("Elevar el número base a la potencia dada");
console.log("potencia: " + potencia(10, 2));

NejecicioNumero("Resto de la división del primer número entre el segundo");
console.log("resto div: " + restoDiv(7, 3));

NejecicioNumero("Un número como argumento y devuelva su raíz cuadrada");

const raizCuadrada = (numero) => Math.sqrt(numero);
print("Raiz cuadrada: " + raizCuadrada(220));

NejecicioNumero("valor absoluto");
const absoluto = (var1) => Math.abs(var1);
print(absoluto(-6));

NejecicioNumero("redondeado al entero más cercano");
const redondear = (var1) => Math.round(var1);
print(redondear(2.49999999999999999));

NejecicioNumero("Aleatorio");
const aleatorio = () => Math.random(0, 1);
print(aleatorio());

NejecicioString(
  "Dos cadenas de texto como argumentos y devuelva su concatenación"
);

const concatenado = (var1, var2) => {
  //print(var1 + var2);
  return var1 + " " + var2;
};

print(concatenado("Hello", "Cachopo"));
print(concatenado("Café", "con leche"));

NejecicioString("Devuelva su longitud.");

const logitudString = (var1) => {
  let a = "";
  a + var1;
  return var1.length;
};

let palabra = "supercalifragilisticexpialicachopo";
print(
  "logitud de " + palabra + " son " + logitudString(palabra) + " caracteres."
);

NejecicioString("Misma cadena en mayúsculas");
{
  const mayusculas = (var1) => {
    let a = "";
    a = a + var1.toUpperCase();
    return a;
  };

  print(
    "La palabra " +
      palabra +
      " en Mayusculas es" +
      " * * * " +
      mayusculas(palabra) +
      " * * *"
  );

  print;
  NejecicioString("misma cadena en minúsculas");

  const Minuscula = (var1) => {
    let a = "";
    a = a + var1.toLowerCase();
    return a;
  };

  let palabraMayoscula = "PALABRA_MAYUSCULA";

  print(
    "La palabra " +
      palabraMayoscula + // se convierte en mayusculas
      " en Minuscula es" +
      " * * * " +
      Minuscula(palabraMayoscula) +
      " * * *"
  );

  print();
}
NejecicioString(
  "Cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición"
);
{
  let CadenaLarga = "abcefghijklmnopqrstuvwxz";
  let caracterBuscar = "a";

  function caracterPosicion(cadena, buscar) {
    let posicionChar = -1;
    for (let i = 0; i <= cadena.length - 1; i++) {
      if (cadena[i].toLocaleLowerCase() === buscar.toLocaleLowerCase()) {
        posicionChar = i;
        break;
      }
    }

    if (posicionChar == -1) {
      print("No se ha encontrado la letra: " + buscar[0]);
    } else
      print(
        "Encontro el caracter:" +
          buscar[0] +
          " en la posicion: " +
          (posicionChar + 1)
      );
  }
  caracterPosicion(CadenaLarga, caracterBuscar);
}
NejecicioString(
  "Cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición"
);
{
  let CadenaLarga2 = "abcefghijklmnopqrstuvwxz";
  let numeroBuscar = 6;
  const CaracterIndicePosicion = (cadena, numero) => [numeroBuscar + 1];
}
print(CaracterIndicePosicion(CadenaLarga2, numeroBuscar));

NejecicioString(
  "cadena de texto como argumento y devuelva la misma cadena invertida"
);
{
  let CadenaInvertir = "abcefghijklmnopqrstuvwxz";
  let CadenaInvertida = "";

  for (let i = CadenaInvertir.length - 1; i >= 0; i--) {
    CadenaInvertida += CadenaInvertir[i];
  }

  print(CadenaInvertida);
}
NejecicioString(
  "una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena"
);

{
  let CadenaLarga = "abcefghijklmnopqrstuvwxz";

  let caracterBuscar = "a";
  let posicionChar = -1;
  let contador = 0;

  for (let i = 0; i <= CadenaLarga.length - 1; i++) {
    if (
      CadenaLarga[i].toLocaleLowerCase() === caracterBuscar.toLocaleLowerCase()
    ) {
      contador++;
    }
  }
  print("Se ha encontrado la letra: " + caracterBuscar[0]);
}

NejecicioString("Cadena sin espacios en blanco");
{
  let espacios = "a b c d e f .";

  print(espacios);

  print(espacios.replaceAll(" ", ""));
}

NejecicioString("palíndromo");
{
  let CadenaInvertir = "Anita lava la tina";
  let CadenaInvertida = "";

  for (let i = CadenaInvertir.length - 1; i >= 0; i--) {
    CadenaInvertida += CadenaInvertir[i];
  }
  print(
    "string entrada:   " +
      CadenaInvertir.replaceAll(" ", "").toLocaleLowerCase()
  );
  print(
    "string invertida: " +
      CadenaInvertida.replaceAll(" ", "").toLocaleLowerCase()
  );

  if (
    CadenaInvertir.replaceAll(" ", "").toLocaleLowerCase() ===
    CadenaInvertida.replaceAll(" ", "").toLocaleLowerCase()
  ) {
    print(CadenaInvertir + "... SI, es un palindromo ");
  } else print(CadenaInvertir + "No, es un palindromo ");
}

NejecicioString("Primera letra de cada palabra en mayúscula.");
{
  let Cadena =
    " UNA CADENA DE TEXTO COMO ARGUMENTO Y DEVUELVA LA MISMA CADENA CON LA PRIMERA LETRA DE CADA PALABRA EN MAYÚSCULA";
  print("la frase:");
  print(Cadena);
  print();
  Cadena = Cadena.toLocaleLowerCase();
  let CadenaCorregida = "";
  let space = true;
  for (let i = 0; i <= Cadena.length - 1; i++) {
    if (Cadena[i] === " ") {
      space = true;
      CadenaCorregida += " ";
      continue;
    }

    if (space) {
      CadenaCorregida += Cadena[i].toLocaleUpperCase();
      space = false;
    } else CadenaCorregida += Cadena[i].toLocaleLowerCase();
  }

  print(CadenaCorregida);
}

NejecicioArray(
  "Array de números como argumento y devuelva la suma de todos sus elementos."
);

function sumaArray(arr) {
  return arr.reduce((acumulador, actual) => acumulador + actual, 0);
}

console.log(sumaArray([1, 2, 3, 4, 5]));
console.log(sumaArray([]));

NejecicioArray(
  "Array de números como argumento y devuelva el promedio de todos sus elementos."
);

function promedio(arr) {
  const suma = arr.reduce(
    (acumulador, valorActual) => acumulador + valorActual
  );

  return suma / arr.length;
}

print(promedio([0, 10, 5, 2.5, 7.5]));

NejecicioArray(
  "array de números como argumento y devuelva el array ordenado de forma ascendente"
);

function ordenadoAscendente(arr) {
  return arr.sort().reverse();
}

print(ordenadoAscendente([5, 3, 9, 1, -2, 0]));

NejecicioArray(
  "Array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado"
);

let arr1 = [1, 2, 3, 4, 5];
let numero999 = 999;

let juntarArrayYnumero = (array1, numero) => {
  array1.push(numero);
  return array1;
};

print(juntarArrayYnumero(...[arr1], numero999));

NejecicioArray(
  "dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays."
);
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, "#"];

const juntarArray = (array1, array2) => [...array1, ...array2];
print(juntarArray(arr1, arr2));

NejecicioArray(
  "Un array de números como argumento y devuelva el número máximo dentro del array."
);

ArrayNmax = [21, 878, 53, 24, 5, -5];
const numeroMax = (arr) => Math.max(...arr);

print(numeroMax(ArrayNmax));

NejecicioArray(
  "un array de números como argumento y devuelva el número mínimo dentro del array."
);

{
  ArrayNmin = [21, 878, 53, 24, 5, -5];
  const numeroMin = (arr) => Math.min(...arr);

  print(numeroMin(ArrayNmax));
}

NejecicioArray(
  "un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array."
);

{
  function contadorDeVeces(arr, aBuscar) {
    let contador = 0;
    for (i = 0; i < arr.length; i++) {
      if (aBuscar === arr[i]) contador++;
    }

    return contador;
  }

  const ArrayVeces = [21, 878, 21, 24, 5, -5, 21];
  const buscar = 21;
  print(
    "El numero de veces que sale: " +
      buscar +
      " es " +
      contadorDeVeces(ArrayVeces, buscar)
  );
}

NejecicioArray(
  "un array como argumento y devuelva un nuevo array sin elementos duplicados"
);
{
  function sinDuplicar(arr) {
    return [...new Set(arr)];
  }

  const ArrayDuplicados = [21, 878, 21, 24, 5, -5, 21];

  print(ArrayDuplicados);
  print(sinDuplicar(ArrayDuplicados));
}

NejecicioArray(
  "un array como argumento y devuelva un nuevo array con los elementos en orden inverso."
);

const reverseArr = (arr) => arr.reverse();

const ArrReverse = [1, 3, 5, 7, 9, 2, 4, 6];
print("Normal:    " + ArrReverse);
print("Invertido: " + reverseArr(ArrReverse));
