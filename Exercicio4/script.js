function verificar(){
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML =`SÃO EXATAMENTE: ${hora} horas ${min} minutos e ${seg} segundos`

}