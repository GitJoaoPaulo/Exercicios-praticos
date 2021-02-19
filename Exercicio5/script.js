function contar(){
    let ini = document.getElementById('inicio')
    let fm = document.getElementById('fim')
    let passos = document.getElementById('passo')
    let res = document.getElementById('resultado')
    
    if(ini.value.length == 0 || fm.value.length == 0 || passos.value.length == 0){
        window.alert('Erro tente de novo informações em falta')
    }else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fm.value)
        let p = Number(passos.value)
        if(p <= 0){
            window.alert('Passo inválido')
        }
        if( i < f){
            //crescente
            for(let c = i; c <= f; c+=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }else{
            //regressivo
            for(let c = i; c>= f; c-=p){
                res.innerHTML += `${c} \u{1F449}` 
            }
            res.innerHTML += `\u{1F3C1}`
            }
        }
    }
