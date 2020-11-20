let test = 1
 function addNewPlayer(){
    let psw = document.getElementById("password").value
    let checkPsw = document.getElementById("checkPassword").value
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let email = document.getElementById("email").value
    
    
    

     if (psw === checkPsw)
     {
         Pl = new Player(name,surname,psw,email)
       
     }
     else
     alert("Неверно введен пароль")
     console.log(Pl)

    
}

