///Output image  of pokemon
// make click action to display pokemon stats
// show stats in pokedex

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/

$.get("https://pokeapi.co/api/v2/pokemon/1/", function (pokemon) {
    for (var i = 1; i <= 150; i++) {
        var html_str = "<img id= ' " + i + "'"
        html_str += "src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png'>";
        $("#pokemon_list").append(html_str);

    }
}, "json"
);

$(document).on("click", 'img', function () {

    var pokemonId = parseInt($(this).attr('id'));

    $.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId, function (stats) {
        var html_str = "";
        html_str += "<h4>Types</h4>";
        html_str += "<ul>";
        for (var i = 0; i < stats.types.length; i++) {
            html_str += "<li>" + stats.types[i].type.name + "</li>";
        }
        html_str += "</ul><p>Height</p>" + stats.height + "<p>Weight</p>" + stats.weight;
        $('#pokedex').html(html_str);




        // console.log("weight = "+stats.weight);
        // console.log("Pokemon type = "+stats.types[0].type.name)
        // console.log("Pokemon height = "+stats.height)
    })
    // How to concatenate a var to a hyperlink. Example :: value of line 18 and insert into hyperlink in line 20;

});
