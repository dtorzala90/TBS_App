
$.ajax(
    {
        type:"GET",
        url: "/getData/",
        success: function( data )
        {
            parseHistory(data);
        }

    })

function parseHistory(data){
    var etco2 = data.ETCO2_History;
    var etco2_div = document.getElementById('etco2Hist');

    for(var key in etco2){
        etco2_div.innerHTML += '<p>' + key + " at " + etco2[key] + '</p>'
    }
}