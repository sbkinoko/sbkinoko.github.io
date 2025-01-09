const CONTENT = "/content"
const HTML_CSS = "/html_css"
const ANDROID ="android"

function writeHeader(
    rootDir
) {
    $.ajax({
        url: rootDir + "header.html",
        cache: false,
        async: true,
        success: function (html) {
            html = html.replace(
                /\{\$root\}/g,
                rootDir
            );
            $("#header").html(html)
        }
    });
}

function writeHtmlList(
    rootDir,
    openTag,
    closeTag
){
    writeList(
        "htmlList",
        openTag,
        closeTag,
        rootDir+HTML_CSS,
    )
}

function writeAndroidList(
    rootDir,
    openTag,
    closeTag
){
    writeList(
        "androidList",
        openTag,
        closeTag,
        rootDir+ANDROID,
    )
}

function writeList(
    name,
    openTag,
    closeTag,
    path
){
    $.ajax({
        url: path+"/"+name+".html", 
        cache: false, 
        async: true, 
        success: function(html){
            html = html.replace(
                /\{openTag\}/g,
                openTag
            ).replace(
                /\{closeTag\}/g,
                closeTag 
            ).replace(
               /\{\$root\}/g,
                path
            )
            
            $("#"+name).html(html)
        }
    })
}

function writeAbout(
    rootDir
) {
    writeContent(
        "about",
        rootDir + CONTENT
    )
}

function writeArticles(
    rootDir
) {
    writeContent(
        "articles",
        rootDir + CONTENT
    )
}

function writeWant(
    rootDir
) {
    writeContent(
        "want",
        rootDir + CONTENT
    )
}

function writeHabitat(
    rootDir
) {
    writeContent(
        "habitat",
        rootDir + CONTENT
    )
}

function writeContent(
    name,
    path
) {
    $.ajax({
        url: path + "/" + name + ".html",
        cache: false,
        async: true,
        success: function (html) {
            $("#" + name).html(html)
        }
    })
}
