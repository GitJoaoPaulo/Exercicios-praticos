function verificar(){
    var valor = document.getElementById('faixa')
    var gost = document.getElementById('gosto')
    var res = document.querySelector('div#res')
    if(valor.value.length == 0 || Number(valor.value) == 0){
        window.alert('Erro tente de novo!')
    }else{
        var gost = document.getElementsByName('gosto')
        var custo = Number(valor.value)
        var veiculo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(gost[0].checked){
            veiculo = 'Carro'
            if(custo >= 0 && custo < 15000){
                custo = 'Baixo'
                img.setAttribute('src', 'carrobaixo.jpg')
            }else if(custo < 40000){
                custo = 'Médio'
                img.setAttribute('src', 'carromedio.png')
            }else{
                custo = 'Alto'
                img.setAttribute('src', 'carroalto.jpg')
            }
        }else if(gost[1].checked){
            veiculo = 'Moto'
            if(custo >= 0 && custo <= 5000){
                custo = 'Baixo'
                img.setAttribute('src', 'motobaixa.jpg')
            }else if(custo <= 30000){
                custo = 'Médio'
                img.setAttribute('src', 'motomedio.jpg')
            }else{
                custo = 'Alto'
                img.setAttribute('src', 'motoalta.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${veiculo} com custo ${custo} `
        res.appendChild(img)
    }

}