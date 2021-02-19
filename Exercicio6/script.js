function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var res = document.getElementById('resultado')
    if(ini.value.length == 0 || fim.value.length == 0){
        window.alert("Erro prenecha os campos")
    }else{
        res.innerHTML  = `Contando: <br>`
        var t = document.getElementsByName('tipo')
        var inicio = Number(ini.value)
        var fim = Number(fim.value)
        var tipo = '';
        var divisores;
        var texto = '';

        if(t[0].checked){
        tipo = "Primo"
        for(var cont= inicio; cont<=fim; cont++){
            divisores = 0
            for(var aux = 1; aux<=cont; aux++)
                if(cont%aux ==0)
                divisores++
                if(divisores == 2)
                texto += cont + `\u{1F449}`;
        }
        res.innerHTML = texto;
        res.innerHTML += `\u{1F3C1}`
        
        }else if(t[1].checked){
            tipo = 'Sequencia'
            if(inicio <fim){
                for(var c = inicio; c <= fim; c++){
                    res.innerHTML += ` ${c} \u{1F449}`
                }
                res.innerHTML += `\u{1F3C1}`
            }
        }else if(t[2].checked){
            tipo = 'Par'
            if(inicio<=fim){
                for(var c = inicio; c<=fim; c++){
                    if(c%2==0){
                        res.innerHTML += `${c} \u{1F449}`
                    }    
                }
            }res.innerHTML += `\u{1F3C1}`

        }else if(t[3].checked){
            tipo = 'Impar'
            if(inicio<=fim){
                for(var c = inicio; c<=fim; c++){
                    if(c%3==0){
                        res.innerHTML += `${c} \u{1F449}`
                    }
                }res.innerHTML += `\u{1F3C1}`
            }
        }else{
            window.alert('[Erro} selecione uma opção')
        }
    }
}
