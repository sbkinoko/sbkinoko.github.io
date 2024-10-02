function writeHeader(){
    $.ajax({
        url: "header.html", 
        cache: false, 
        async: false, 
        success: function(html){

            html = html.replace();
            document.write(html);
        }
    });
}