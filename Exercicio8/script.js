function tabuada(){
    var n =document.getElementById('num')
    var tab = document.getElementById('seltabu')
    if(n.value.length==0){
        window.alert('[ERRO] Preencha corretamente')
    }else{
        var nu = Number(n.value)
        var c = 1
        tab.innerHTML = ''
        while(c<=10){
            var item = document.createElement('option')
            item.text = `${nu} x ${c} = ${nu*c}`
            tab.appendChild(item)
            c++
        }
    }
}