function carregar(){
var msg = window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data = new Date()
var  hora =data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e  ${min} minutos `
if(hora >= 0 && hora<= 12){
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
}else if(hora >= 12 && hora <= 18){
    img.src = 'tarde.jpg'
    document.body.style.background = '	#CD6600'
}else{
    img.src = 'noite.jpg'
    document.body.style.background = '#104E8B'
}
}