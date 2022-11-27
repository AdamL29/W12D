function login(){
    axios.request({
        url: "https://reqres.in/api/login",
        method: "POST",
        data:{
            email: document.getElementById(`usernameBox`).value,
            password: document.getElementById(`passwordBox`).value
        }
    }).then(success).catch(fail);
}

function success(response){
    Cookies.set(`sessionToken`, response.data.token);
    location.href = `battle.html`;
}

function fail(error){
    console.log(error.response.data.error);
    alert(`Your Username or Password is invalid`)
}

document.getElementById(`loginButton`).addEventListener(`click`, login);
// you can put a second api call in the success function of the first api call as a chain.