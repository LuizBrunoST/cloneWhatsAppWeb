function clickMenu(elemento) {
    var x = document.getElementById(elemento);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
$("#pesquiseContato").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#chats li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

if (screen.width < 720) {
    $('#main').hide()
    $('#msgErroResolucao').show()
}

function mostrarChat(id) {
    const chats = document.getElementsByClassName("chat-box");
    for (let i = 0; i < chats.length; i++) {
        chats[i].style.display = "none";
    }

    const chatSelecionado = document.getElementById(id);
    chatSelecionado.style.display = "block";
}

for (x=0; x<9; x++) {
boxMsg = `
    <main id="boxMsgContato${x}" class="w3-display-container w3-animate-top chat-box" style="z-index:3;margin-left:400px;height:768px;display:none;">
        <div class="w3-bar w3-top w3-blue" style="width:966!important;">
            <div class="w3-left">
                <span class="w3-bar-item">
                    <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="user" style="width:40px;height:40px;">
                    <span class="w3-large w3-margin-left w3-font-bold">Contato ${x}</span>
                </span>
            </div>

            <div class="w3-right w3-padding" style="z-index:-4;">
                <span class="w3-bar-item w3-button w3-round"><i class="fa-solid fa-magnifying-glass"></i></span>
                <span class="w3-bar-item w3-button w3-round"><i class="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
        </div>

        <div class="w3-container" style="margin-top:60px;">
            <div>
                <div class="w3-card w3-round w3-border w3-white w3-padding w3-margin-top w3-bar">
                    <span class="w3-left">
                        <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="Usuario" style="width:28px;height:28px;">
                    </span>
                    <span class="w3-left w3-bar-item">Olá bom dia tudo bem com vc?</span>
                </div>


                <div class="w3-card w3-round w3-border w3-light-gray w3-padding w3-margin-top w3-bar">
                    <span class="w3-right">
                        <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="Usuario" style="width:28px;height:28px;">
                    </span>
                    <span class="w3-right w3-bar-item">Tudo sim, e com você?</span>
                </div>


                <div class="w3-card w3-round w3-border w3-white w3-padding w3-margin-top w3-bar" style="width:auto;">
                    <span class="w3-left">
                        <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="Usuario" style="width:28px;height:28px;">
                    </span>
                    <span class="w3-left w3-bar-item">Eu vou bem tambem</span>
                </div>


                <div class="w3-card w3-round w3-border w3-light-gray w3-padding w3-margin-top w3-bar">
                    <span class="w3-right">
                        <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="Usuario" style="width:28px;height:28px;">
                    </span>
                    <span class="w3-right w3-bar-item">Tudo certo :)</span>
                </div>


            </div>
        </div>

        <div class="w3-display-bottomright w3-bar">
            <div class="w3-row">
                <div class="w3-col w3-left" style="width:93px;">
                    <div class="w3-bar">
                        <span class="w3-bar-item w3-button w3-text-blue"><i class="fa-solid fa-face-smile"></i></span>
                        <span class="w3-bar-item w3-button w3-text-blue"><i class="fa-solid fa-paperclip"></i></span>
                    </div>
                </div>
                <div class="w3-col w3-right" style="width:93px;">
                    <span class="w3-bar-item w3-button w3-text-blue"><i class="fa-solid fa-microphone"></i></span>
                    <span class="w3-bar-item w3-button w3-text-blue"><i class="fa-solid fa-paper-plane"></i></span>
                </div>
                <div class="w3-rest">
                    <input class="w3-input" type="text" placeholder="Mensagem">
                </div>
            </div>
        </div>
    </main>
`
$('#mostreBoxMsgContato').append(boxMsg)

    $("#chats").append(`
    <li onclick="$('#boxMsgContato${x}').show();mostrarChat('boxMsgContato${x}')" style="cursor:pointer;">
        <div>
            <div class="w3-row w3-display-container">
                <div class="w3-col m2" style="width:56px;">
                    <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="user" style="width:50px;height:50px;">
                </div>
                <div class="w3-col m10">
                    <span class="w3-xlarge w3-font-bold">Contato ${x}</span><br>
                    <span>sdfsdlf sdfsfe sfesdf...</span>
                    <span class="w3-display-topright w3-text-green">0${x}:1${x}</span>
                    <span class="w3-display-bottomright w3-tag w3-green w3-circle" style="margin-right:30px;">${x}</span>
                    <div class="w3-dropdown-click w3-display-hover w3-display-bottomright">
                        <span onclick="clickMenu('demo${x}')"><i class="fa-solid fa-chevron-down"></i></span>
                        <div id="demo${x}" class="w3-dropdown-content w3-bar-block w3-border w3-display-bottomright" style="width:250px;">
                            <a href="#" class="w3-bar-item w3-button">Arquivar conversa</a>
                            <a href="#" class="w3-bar-item w3-button">Silênciar</a>
                            <a href="#" class="w3-bar-item w3-button">Apagar conversa</a>
                            <a href="#" class="w3-bar-item w3-button">Fixar conversa</a>
                            <a href="#" class="w3-bar-item w3-button">Marcar como não lida</a>
                            <a href="javascript:$('#demo${x}').hide()" class="w3-bar-item w3-button w3-center">Fechar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `)
}


//