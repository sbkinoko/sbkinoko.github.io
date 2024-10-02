function writeHeader(rootDir) {
    $.ajax({
        url: rootDir + "header.html",
        cache: false, 
        async: true,
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}