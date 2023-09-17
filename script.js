function validar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    if (email === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
    } else if (email !== "adm" || senha !== "adm") {
      alert("As informações de login são inválidas.");
    } else {
      alert("Login bem sucedido!");
    }
  }
  