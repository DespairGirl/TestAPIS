
$("#searchBtn").on("click", function(event) {

    event.preventDefault ();

    var getArtist= $("#artSearch").val();
    console.log(getArtist)
    

    $.ajax( {
        data: {
            format: ""

        },
        url:"api.musixmatch.com/ws/1.1/artist.search"

    })

})




