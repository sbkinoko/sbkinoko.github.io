const CONTENT = "/content"

function writeHeader(rootDir) {
    $.ajax({
        url: rootDir + "header.html", 
        cache: false, 
        async: true, 
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            $("#header").html(html)
        }
    });
}

function writeAbout(rootDir){
    writeContent("about",rootDir+CONTENT)
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