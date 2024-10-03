const CONTENT = "/content"

function writeHeader(rootDir) {
    writeContent("header",rootDir)
}

function writeAbout(rootDir){
    // writeContent("about",rootDir+CONTENT)
    $.ajax({
        url: rootDir + "home/about.html", 
        cache: false, 
        async: true, 
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            $("#about").html(html)
        }
    });
}

function writeArticles(rootDir){
    writeContent("articles",rootDir+CONTENT)
}

function writeWant(rootDir){
    writeContent("want",rootDir+CONTENT)
}

function writeHabitat(rootDir){
    writeContent("habitat",rootDir+CONTENT)
}

function writeContent(name,path){
    $("#"+name).load(path+"/"+name+".html")
}