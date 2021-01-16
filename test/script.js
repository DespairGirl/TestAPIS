 function artistInfo () {

    $("#searchBtn").on("click", function(event) {



    var getArtist= $("#artSearch").val();
    console.log(getArtist)
    var format= "jsnop";
    var callBack= "callback";
    var apikey= "7f6c68b406143881580235194e8517a0";
    
    var queryURL="api.musixmatch.com/ws/1.1/artist.search?format="+format +"&callback="+callBack+"&q_artist="+getArtist+"&apikey="+apikey;
    

    $.ajax( {
        url: queryURL,
        method: "GET", })

       .then(function(response){
        
            console.log(response)
        });

    
})
 }
 
