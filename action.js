document.getElementById('form').addEventListener('submit', login)
function login(event){
    event.prevenDefault()
    const result =document.getElementById('result')
    const inputName=str(event.target.inputName.value)
    const inputEmail=str(event.target.inputEmail.value)
    const inputPass=str(event.target.inputPass.value)
    result.innerText=inputName
   
}