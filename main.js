

    
    
    let url = 'https://665736849f970b3b36c864e7.mockapi.io/login1';

    // let divlogin = document.getElementById('login-container');
    // let usernamelogin = document.getElementById('inputUserName').value;
    // let passwordlogin = document.getElementById('inputPassWord').value;
   

    let divregister = document.getElementById('Register-form');
    // let usernameSignUp = document.getElementById('inputUserName1').value;
    // let emailSignUp = document.getElementById('inputEmail').value;
    // let passwordSignUp = document.getElementById('inputPassWord1').value;
    let btnSignUp = document.getElementById('btnSignUp');

    // let usernameProfile = document.getElementById('UserNameProfile');
    let btnLogout = document.getElementById('btnLogout');





    /*---------------------------Step1-------------------------------------*/
    let btnlogin = document.querySelector('#btnLogin'); 
    console.log(btnlogin);
    btnlogin.addEventListener('click', () => {
        let usernamelogin = document.getElementById('inputUserName').value;
        let passwordlogin = document.getElementById('inputPassWord').value;
        login(usernamelogin, passwordlogin);
   
    });



    async function login(usernamelogin, passwordlogin) {
        let url1 = 'https://665736849f970b3b36c864e7.mockapi.io/login1';
        let response = await fetch(`${url1}?userName=${usernamelogin}&password=${passwordlogin}`);
        let data = await response.json();

        localStorage.setItem('userName', data.userName);
        window.location.href = "./pofile.html";

    }





    /*---------------------------Step2-------------------------------------*/

    btnSignUp.addEventListener('click', function() {
        let usernameSignUp = document.getElementById('inputUserName1');
        let emailSignUp = document.getElementById('inputEmail');
        let passwordSignUp = document.getElementById('inputPassWord1');
        register(usernameSignUp, emailSignUp, passwordSignUp);
    });

    async function register(usernameSignUp, emailSignUp, passwordSignUp) {
        let url2 = 'https://665736849f970b3b36c864e7.mockapi.io/login1';
        let response = await fetch(`${url2}`, {
            method: 'POST',
            body: JSON.stringify({
                userName: usernameSignUp.value,
                email: emailSignUp.value,
                password: passwordSignUp.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        let data = await response.json();
        localStorage.setItem('userName', data.userName);
        window.location.href = "./pofile.html";
    
    }





    /*---------------------------Step3-------------------------------------*/

    btnLogout.addEventListener("click", () => {
        localStorage.removeItem('userName');
        window.location.href = "index.html";
    });