document.addEventListener("DOMContentLoaded",function(){
    const inputPesquisa=document.getElementById('pesquisar');
    const listaNomes=document.getElementById('listaNomes');
    const nomes=document.querySelectorAll('#listaNomes li');
    
   inputPesquisa.addEventListener('input',function(){
    const termoPesquisa=inputPesquisa.value.toLowerCase();
    nomes.filter()
   });
   })