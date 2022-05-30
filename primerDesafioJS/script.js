let ingreso
let reserva = confirm("Buenas tardes, ¿quiere reservar una cancha?")


while(reserva){
   ingreso = parseInt(prompt("cuantas horas quiere reservar la cancha: "))
   
   if(ingreso<10){
    console.log("usted va a reservar", ingreso, "horas")
    break;
    
   }else{
    alert("no tenemos tantas horas disponibles")
    }

}