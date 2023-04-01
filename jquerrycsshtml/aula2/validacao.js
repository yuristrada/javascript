function validacaoFormularios(){
    var nome= document.getElementById('nome').value
    var email= document.getElementById('email').value
    var opcao= document.getElementById('opcao').value
    var check= document.getElementsByClassName('check')
    var recebe= ''

    if(nome===''){
        alert('Campo em branco nome')
    }else if(email===''){
        alert('Campo em branco email')
    }else{
        for(var i=0; i<2; i++){
            if(check[i].checked===true){
                recebe += check[i].value + ' '
            }
            if(recebe===''){
                alert('Selecione ao menos uma opção ')
            }else{
                document.write(nome + ' ' + email + ' ' + opcao + ' ' + recebe)
            }
         
        }
    }
}