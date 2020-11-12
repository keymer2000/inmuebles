/*document.getElementById("btn-guardar-mensualidad-inmueble").addEventListener("click", function(){
    a = 3; b = 4;alert('La suma es '+(a + b));
})
var sumar = (n1, n2) => n1 + n2
    


let guardarMensualidad = (Event) =>{
let a, b, suma
a=3
b=9
suma=a+b
console.log(Event)
console.log("suma = ", suma)

}*/
document.querySelector("#btn-guardar-mensualidad-inmueble").addEventListener("click", e => {
    if(document.querySelector('#frm-mensualidad').reportValidity()){
       let nombre = document.querySelector("#nombre_propietario").value
       let documento = document.querySelector("#doc_propietario").value
       let nombres = new Array("oscar", "andres", "keimer", "luis")
        nombres.push(nombre)
       console.log("nombre : ", nombre)
       console.log("documento : ", documento)
       console.log(nombres)
        
    }
}
)