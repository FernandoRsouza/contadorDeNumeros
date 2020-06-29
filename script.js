class Contar{
    
    contador(){
        // ler os inputs do DOM e pegar o valor
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        let num3 = document.getElementById('num3').value;
        let res = document.getElementById('res');
         
    //   fazendo validação dos inputs no DOM
       if (num1 ==="" || num2 ==="") {
           alert('CAMPO [INICIO OU FIM] VAZIO DIGITE UM NUMERO');
           
       }
       else if(num3 === ""){
           alert('PASSO VAZIO!!! SERÁ CONSIDERADO NUMERO 1')
           pas =1;

       }else{
           let ini = Number(num1);
           let fim = Number(num2);
           let pas = Number(num3);
           res.innerHTML = `contando:<br>`;
           if(ini < fim){
            // contagem de incrementando 
           for(let c = ini ; c<=fim ;c += pas) {
            res.innerHTML+=`${c} \u{27A1}`

              } 
           
       }else{
        //    contagem decrementando
           for(let c = ini; c>=fim ;c-=pas){
               res.innerHTML+=`${c}\u{27A1}`
           }
       }
      res.innerHTML +=`\u{270B}\u{270B}\u{270B}`
       
    }


    }
    


}var contar = new Contar();
