function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamennte')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'bebehomem.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'homemvelho.jpg')
            }    
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10 ){
                //criança
                img.setAttribute('src', 'bebemulher.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'mulhervelha.jpg')
            }    
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}