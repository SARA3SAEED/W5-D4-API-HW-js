

    
    
    let url = 'https://665736849f970b3b36c864e7.mockapi.io/login1';
    let divregister = document.getElementById('Register-form');
    let btnLogout = document.getElementById('btnLogout');





    /*---------------------------Step1-------------------------------------*/
    let btnlogin = document.querySelector('#btnLogin'); 
    console.log(btnlogin);


    async function login() {
        let usernamelogin = document.getElementById('inputUserName');
        let passwordlogin = document.getElementById('inputPassWord');
        let url1 = 'https://665736849f970b3b36c864e7.mockapi.io/login1';
        let response = await fetch(url1);
  
        let data = await response.json();
        let testing =false;
        data.forEach(element => {
            console.log(element.userName);
            if(element.userName === usernamelogin.value && element.password ===  passwordlogin.value){
                localStorage.setItem('userName', element.userName);
                window.location.href = "pofile.html";
                console.log("hello")
                testing = true;
            }   
    })
    if(!testing ) {
        // window.location.href = "register.html";
        alert('incorrect data')
    }
}





    /*---------------------------Step2-------------------------------------*/
    
    let btnSignUp = document.getElementById('btnSignUp');

 

    async function register() {
        let usernameSignUp = document.getElementById('inputUserName1');
        let emailSignUp = document.getElementById('inputEmail');
        let passwordSignUp = document.getElementById('inputPassWord1');
        let url2 = 'https://665736849f970b3b36c864e7.mockapi.io/login1';
        let response = await fetch(url2, {
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
        console.log(data);
        localStorage.setItem('userName', data.userName);
        window.location.href = "./pofile.html";
    
    }





    /*---------------------------Step3-------------------------------------*/

    btnLogout.addEventListener("click", () => {
        localStorage.removeItem('userName');
        window.location.href = "index.html";
    });