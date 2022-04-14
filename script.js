let arrayMessages=[];
let data={
    name:""
};
let space=" ";
userDefinition();

function userDefinition(){
    userName = prompt("Qual o seu nome?");
    data={
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
    attMessages();
}


function attMessages(){
    setTimeout(function(){
        axios.post('https://mock-api.driven.com.br/api/v6/uol/participants',data); //data pois é do username
        axios.post('https://mock-api.driven.com.br/api/v6/uol/status',data);  //ve se o usuario está online ainda
        let promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages'); //carrega mensagens
        
        promise.then(printMessage);
        attMessages();
        //para repetir o load a cada 4 segundos
    },3000);
}

function printMessage(message){
    console.log(message);
    document.querySelector(".messages").innerHTML=``;
    for(let i=0; i<message.data.length;i++){
        if(message.data[i].type=="status"){
            inoutChat(message.data[i],i);
        }
        if(message.data[i].type=="message"){
            allChat(message.data[i],i);
        }
        if(message.data[i].type=="private_message"){
            privateChat(message.data[i],i);
        }
    }
}


//aqui para baixo ok
function inoutChat(database,i){

    document.querySelector(".messages").innerHTML+=`
    <div id="${i}" class="in-out-room">
      <h2>(${database.time}) <h4>O</h4> </h2> <h1> <strong> ${database.from} </strong>${database.text} </h1>
    </div>
    `;
     document.getElementById(i).scrollIntoView();
}


    function privateChat(database,i){
        if (database.to===userName){
            document.querySelector(".messages").innerHTML+=`
              <div id="${i}" class="private-message">
               <h2>(${database.time}) <h5>O</h5> </h2> ${space}<h1> <strong> ${database.from}</strong> reservadamente para <strong>${database.to}</strong> ${database.text} </h1>
              </div>
                  `;
        document.getElementById(i).scrollIntoView();
        }
    }



function allChat(database,i){

    document.querySelector(".messages").innerHTML+=`
    <div id="${i}" class="public-message">
        <h2>(${database.time}) <h3>O</h3> </h2>${space} <h1> <strong> ${database.from}</strong> para <strong>Todos: </strong> ${database.text} </h1>
    </div>
    `;
    document.getElementById(i).scrollIntoView();
}

function inviteMessage(){
    let messageSended = document.querySelector(".input").value;
    document.querySelector(".input").value="";
    let messagenSendedObject={
        from: userName,
        to: "Todos",
        text: messageSended,
        type: "message"
    };
    axios.post("https://mock-api.driven.com.br/api/v6/uol/messages",messagenSendedObject);
    //promise.catch(windowReload);
}
//function windowReload(){
//    window.location.reload();
//}
