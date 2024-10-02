function writeHeader(rootDir){
    $.ajax({
        url: "header.html", 
        cache: false, 
        async: false, 
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}