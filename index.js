// Login & Sign up project

// ----------------------------------------------------------------------------------------------------
let UserList = [

]

// =====================================================================================================
const UserName = document.getElementById('username-input')
const Password = document.getElementById('pass-input')
const EmailInputFild = document.getElementById('email-input-fild')
const Submit = document.getElementById('submit')
const Form = document.getElementById('form')
const ErrorOrSubmit = document.getElementById('Er-Sub')
const Signup = document.getElementById('link-signup')
const HeaderText = document.getElementById('header-text')
const TextQAcc = document.getElementById('text-q-acc')

const EmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

// ----------------------------------------Switch Login & Sign up---------------------------------------
Signup.addEventListener('click' , ()=>{
    if (Signup.innerText == 'Sign up'){
        EmailInputFild.style.display = 'block'
        HeaderText.innerText = 'Sign Up'
        Submit.innerText = 'Sign Up'
        TextQAcc.innerText = 'You have an account?'
        Signup.innerText = 'Login'

        UserName.value = ''
        Password.value = ''
        EmailInputFild.value = ''
    }else{
        EmailInputFild.style.display = 'none'
        HeaderText.innerText = 'Login'
        Submit.innerText = 'Login'
        TextQAcc.innerText = 'Dont have an account?'
        Signup.innerText = 'Sign up'

        UserName.value = ''
        Password.value = ''
        EmailInputFild.value = ''
    }
})

// ===============================================Main==================================================

// localStorage.clear()       //  <<<< If need clear memory, This code removed from comment and refresh page

Form.addEventListener('submit' , (event)=>{
    event.preventDefault()

    let GetItemLocal = localStorage.getItem('User')
    if (GetItemLocal !== null){            //===== check data in memory  ======

        GetItemLocal = JSON.parse(GetItemLocal)
        //==============  Login  ===============
        if (Submit.innerText == 'Login'){
            if ((GetItemLocal.find((item) => item.username === UserName.value)) &&
            (GetItemLocal.find((item) => item.pass === Password.value))){
                ErrorOrSubmit.innerText = 'You are Login'
                setTimeout(() => {
                    ErrorOrSubmit.innerText = ''
                }, 3000);
            }else{
                ErrorOrSubmit.innerText = 'Please enter currect value!'
                setTimeout(() => {
                    ErrorOrSubmit.innerText = ''
                }, 3000);
            }
        
        //============ Sign up  =============
        }else{
            if (EmailRegex.test(EmailInputFild.value)){
                if ((GetItemLocal.find((item1) => item1.username === UserName.value)) ||
                    (GetItemLocal.find((item2) => item2.email === EmailInputFild.value))){
                        ErrorOrSubmit.innerText = 'There is a Username or Email'
                        setTimeout(() => {
                            ErrorOrSubmit.innerText = ''
                        }, 3000);

                    }else{
                        GetItemLocal.push(
                            {
                                username: UserName.value,
                                pass: Password.value,
                                email: EmailInputFild.value
                            }
                        )
                            
                        GetItemLocal = JSON.stringify(GetItemLocal)
                        localStorage.setItem('User' , GetItemLocal)

                        ErrorOrSubmit.innerText = 'Sign up successful'
                        setTimeout(() => {
                            ErrorOrSubmit.innerText = ''
                        }, 3000);
                    }

            //=========== if email imcurrect  =========
            }else{
                ErrorOrSubmit.innerText = 'Please enter correct Email'
                setTimeout(() => {
                    ErrorOrSubmit.innerText = ''
                }, 3000);
            }
        }
    
    //======== If there is no data  ==========
    }else{
        UserList.push(
            {
                username: 'admin',
                email: 'admin@gmail.com',         //=====  Default data  =====
                pass: '1234567890'
            }
        )
        localStorage.setItem('User' , JSON.stringify(UserList))
        ErrorOrSubmit.innerText = 'admin was added! now you can continue'
        setTimeout(() => {
            ErrorOrSubmit.innerText = ''
        }, 3000);
    }
    
})

// ======== show & hide password  =======

function ShowHidePass(){
    if (Password.type === "password"){
        Password.type = "text"
    }else{
        Password.type = "password"
    }
}
