function login(){
    axios.request({
        url: "https://reqres.in/api/login",
        method: "POST",
        data:{
            email: document.getElementById(`emailBox`),
            password: document.getElementById(`passwordBox`)
        }
    }).then(loginSuccess).catch(fail);
}

function colours(){
    axios.request({
        url: "https://reqres.in/api/unknown",
        method: "GET",
    }).then(colourSuccess).catch(fail);
}

function colourSuccess(response){
    let colourData = response.data
    document.getElementById(`colourHolder`).insertAdjacentHTML(`beforeend`, `<p>${colourData.colorname}</p>`)
}

function loginSuccess(response){
    Cookies.set(`sessionToken`, response.data.token);
    location.href = `home.html`;
    alert(`it worked`)
}

function fail(error){
    console.log(error.response.data.error);
    alert(`Your Username or Password is invalid`)
}

document.getElementById(`colourButton`).addEventListener(`click`, colours);
document.getElementById(`loginButton`).addEventListener(`click`, login);
// you can put a second api call in the success function of the first api call as a chain.