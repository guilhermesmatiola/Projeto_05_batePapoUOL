userDefinition();

function userDefinition(){
    userName = prompt("Qual o seu nome?");
    let data={
        name: userName
    };

    let promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants',data);
    promise.then(sucess);
    promise.catch(failed);
}
function failed(error){

    if(error.response.status===400){
        alert('O nome de usuário fornecido já está em uso, escolha outro nome.')
    }
    userDefinition();

}

function sucess(){
    console.log("sucess");

    privateChat();
    inChat();
    outChat();
    privateChat();
    allChat();
    privateChat();
    inChat();
    outChat();
    privateChat();
    allChat();
    privateChat();
    inChat();
    outChat();
    privateChat();
    allChat();
    privateChat();
    allChat();
    privateChat();
    inChat();
    outChat();
    privateChat();
    allChat();
    privateChat();
    allChat();
    privateChat();
    inChat();
    outChat();
    privateChat();
    allChat();

}




function inChat(){

    document.querySelector(".messages").innerHTML+=`
    <div class="in-out-room">
      <h1><strong>pessoa </strong>entrou na sala... </h1>
    </div>
    `

}

function outChat(){

    document.querySelector(".messages").innerHTML+=`
    <div class="in-out-room">
      <h1><strong>pessoa </strong>saiu da sala... </h1>
    </div>
    `

}

function privateChat(){

    document.querySelector(".messages").innerHTML+=`
    <div class="private-message">
         <h1><strong>pessoa</strong> para <strong>pessoa</strong>:</h1>
    </div>
    `

}

function allChat(){

    document.querySelector(".messages").innerHTML+=`
    <div class="public-message">
        <h1><strong>pessoa</strong> para <strong>Todos</strong>:</h1>
    </div>
    `
}
