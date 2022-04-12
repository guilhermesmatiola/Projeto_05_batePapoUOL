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
      <h1><strong>pessoa </strong>entrou na sala... </h1>
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
privateChat();
inChat();
outChat();
privateChat();
allChat();
