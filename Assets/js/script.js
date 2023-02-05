
function VerificarInformacoes(){
  let inputNome = document.getElementById("nome-aluno").value;
  
  if(inputNome !== "Luis"){
    // Forma para a página não enviar o formulario, se não fizer isso, acaba enviando
    alert("Usuário não é cadastrado na imã");
    window.location.href = "https://luisgvneves.github.io/ImaLearning-Form/";
    alert("Usuário não é cadastrado na imã");
    
    return false;
  }
  else {
    document.getElementById("form").submit();
  }

}