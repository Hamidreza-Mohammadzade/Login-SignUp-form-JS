
const UserRow = document.getElementById('User-Row')
const UsernameUser = document.getElementById('Username-user')
const EmailUser = document.getElementById('Email-user')
const PasswordUser = document.getElementById('Password-user')
const UsersListAdmin = document.getElementById('User-List')

let ListUserLocal = localStorage.getItem('User')
ListUserLocal = JSON.parse(ListUserLocal)

for (let i = 0 ; i < ListUserLocal.length ; i = i + 1){
    var DivTag = document.createElement('div')
    DivTag.className = 'row-user-show'
    
    var PTagTextInPName = document.createElement('p')
    var PTagTextInPEmail = document.createElement('p')
    var PTagTextInPPass = document.createElement('p')
    
    var TextInPName = document.createTextNode(ListUserLocal[i].username)
    var TextInPEmail = document.createTextNode(ListUserLocal[i].email)
    var TextInPPass = document.createTextNode(ListUserLocal[i].pass)
    
    DivTag.appendChild(PTagTextInPName)
    DivTag.appendChild(PTagTextInPEmail)
    DivTag.appendChild(PTagTextInPPass)
    
    PTagTextInPName.appendChild(TextInPName)
    PTagTextInPEmail.appendChild(TextInPEmail)
    PTagTextInPPass.appendChild(TextInPPass)
    
    UsersListAdmin.appendChild(DivTag)
}
