function clickMenu(elemento) {
    var x = document.getElementById(elemento);
    if (x.className.indexOf("w3.show") == -1) {
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

for (x=0; x<10; x++) {
    $("#chats").append(`
    <li>
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
                            <a href="javascript:$('demo${x}').hide()" class="w3-bar-item w3-button w3-center">Fechar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `);
}