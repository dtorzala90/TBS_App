function updateHistoryKnown(historyKey, value, timeStamp){
    $.ajax({
        type:"POST",
        url: '/updateHistoryKnown/',
        data: {
            'historyKey': historyKey,
            'value': value,
            'timeStamp': timeStamp
        },

        success: function( data ) {

        }
    });
}


