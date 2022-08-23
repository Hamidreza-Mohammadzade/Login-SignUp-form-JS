
const UserRow = document.getElementById('User-Row')
const UsernameUser = document.getElementById('Username-user')
const EmailUser = document.getElementById('Email-user')
const PasswordUser = document.getElementById('Password-user')
const UsersListAdmin = document.getElementById('User-List')

const Logout = document.getElementById('Logout')

const NameAcc = document.getElementById('name-acc')
const ImgAcc = document.getElementById('img-acc')


let ListUserLocal = localStorage.getItem('User')
ListUserLocal = JSON.parse(ListUserLocal)

// =============================================create row========================================
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

// ========================================Logout=============================================

Logout.addEventListener('click' , () =>{
    window.location.href = 'index.html'
})

// ======================================Header Account========================================

let accountname = ListUserLocal[0].username

NameAcc.innerText = `Hello ${accountname}`

let accountimage = accountname[0]
ImgAcc.innerText = accountimage.toUpperCase()