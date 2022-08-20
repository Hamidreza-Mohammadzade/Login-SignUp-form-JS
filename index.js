let UserList = [
    {
        username: 'admin',
        email: 'admin@gmail.com',
        pass: '1234567890'
    },

    {
        username: 'hamid',
        email: 'hamid@gmail.com',
        pass: '1234'
    },

    {
        username: 'esmail',
        email: 'esmail@gmail.com',
        pass: '2674'
    },
    
]

const UserName = document.getElementById('username-input')
const Password = document.getElementById('pass-input')
const EmailInputFild = document.getElementById('email-input-fild')
const Submit = document.getElementById('submit')
const Form = document.getElementById('form')
const ErrorOrSubmit = document.getElementById('Er-Sub')
const Signup = document.getElementById('link-signup')
const HeaderText = document.getElementById('header-text')
const TextQAcc = document.getElementById('text-q-acc')

// let EmailFild = '<input type="text" placeholder="Email" class="email-input">'


Signup.addEventListener('click' , ()=>{
    if (Signup.innerText == 'Sign up'){
        // EmailInputFild.innerHTML = EmailFild
        EmailInputFild.style.display = 'block'
        HeaderText.innerText = 'Sign Up'
        Submit.innerText = 'Sign Up'
        TextQAcc.innerText = 'You have an account?'
        Signup.innerText = 'Login'

        UserName.value = ''
        Password.value = ''
        EmailInputFild.value = ''
    }else{
        // EmailInputFild.innerHTML = ''
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

// ==============================================================================================

Form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    // console.log('hi' , UserName.value , 'your pass is:' , Password.value)
    if (Submit.innerText == 'Login'){
        for (let i = 0 ; i < UserList.length ; i = i + 1){
            if ((UserList[i].username.toLowerCase() === UserName.value.toLowerCase()) && 
                (UserList[i].pass == Password.value)){
                ErrorOrSubmit.innerHTML = 'You are Login'
                setTimeout(() => {
                    ErrorOrSubmit.innerHTML = ''
                }, 3000);
                break
                
            }else{
                ErrorOrSubmit.innerHTML = 'Please enter currect value!'
                setTimeout(() => {
                    ErrorOrSubmit.innerHTML = ''
                }, 3000);
            }
        }
    }else{

        if ((UserList.find((item1) => item1.username === UserName.value)) ||
            (UserList.find((item2) => item2.email === EmailInputFild.value))){
                ErrorOrSubmit.innerText = 'There is a similar username or email!'
                setTimeout(() => {
                    ErrorOrSubmit.innerText = ''
                }, 3000);

                console.log('er' , UserList)
            }else{
                UserList.push(
                    {
                        username: UserName.value,
                        email: EmailInputFild.value,
                        pass: Password.value
                    }
                )
                ErrorOrSubmit.innerText = 'Sign up successful'
                setTimeout(() => {
                    ErrorOrSubmit.innerText = ''
                }, 3000);

                console.log('sign up' , UserList)
            }
    }
    
})

function ShowHidePass(){
    if (Password.type === "password"){
        Password.type = "text"
    }else{
        Password.type = "password"
    }
}
