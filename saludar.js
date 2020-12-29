function saludar(){
  //alerta de broma 
  alert("Señor Stark estamos arrancando el sistema ....");
  //pedir datos 
  var name=prompt("Escribe tú nombre");
  //validar datos 
  if(true){
    alert("Bienvenido feliz Navidad y prospero año nuevo: "+name);
    //html
    document.getElementById("msg").innerHTML="Feliz navidad: "+name;
//Sino
  }else
  //mostrar mensaje si usuario no desea ingresar datos 
  alert("Bienvenido Usuari@");
}