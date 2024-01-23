 function calcular(){
        var valor = document.getElementById("txtval")
        var seltab = document.getElementById("seltab")

        if(valor.value.length == 0 ){
        window.alert('Digite um valar valido no campo!')
                
        } else{
        var v1 = Number(valor.value)
        var c = 1
            seltab.innerHTML=''
        while (c <=10 ){
            let item = document.createElement('option')
            item.text = `${v1} x ${c} = ${v1*c}`
            item.value = 'seltab${c}'
            seltab.appendChild(item)
            c++;
        }
   
   
    }
          
            
 }