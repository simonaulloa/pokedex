$(document).ready(function($) {
	$$.ajax({
		url: 'http:/pokeapi.co/api/v2/pokemonn/',
		type: 'GET',
		dataType: 'json',
		data: {"limit": '811'},
	})
	.done(function(respuesta) {
		console.log("respuesta");
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});

$(document).ready(function() {

    for (var i = 1; i < 152; i++) {
        var pokePic = $("<img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
        $('div.pokemon').append(pokePic);
    }

    $('img', this).click(function() {

        var uniqueId = $(this).attr('id');

        var webAddress = "http://pokeapi.co/api/v1/pokemon/" + uniqueId;

        var types = " ";

        $.get(webAddress, function(res) {
            for (var j = 0; j < res.types.length; j++) {
                types += "<li>" + res.types[j].name + "</li>";

            }
        }, 'json');

        $.get(webAddress, function(res) {

            $('div.pokedex').html(
                "<h1>" + res.name + "</h1>" +
                "<img src=http://pokeapi.co/media/img/" + uniqueId + ".png>" +
                "<h4>Types:</h4>" +
                "<ul>" +
                types +
                "</ul>" +
                "<h4>Height:</h4>" +
                "<p>" + res.height + "</p>" +
                "<h4>Weight:</h4>" +
                "<p>" + res.weight + "</p>"
            );

        }, 'json');
    });
});


/*
 * Archivo principal de funcionalidad de JS para modal 
	veamos si funciona U-U
*/

(function main(){
	var boxes = Array.from(document.getElementsByClassName("box-work"));
	var modal = document.getElementById("box-work-modal");
	var bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://pokeapi.co/api/v1/pokemon/");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();