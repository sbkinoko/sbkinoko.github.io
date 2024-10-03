const HOME = "/home"

function writeHeader(rootDir) {
    writeContent(header,rootDir)
}

function writeAbout(rootDir){
    writeContent("about",rootDir+HOME)
}

function writeArticles(rootDir){
    writeContent("articles",rootDir+HOME)
}

function writeWant(rootDir){
    writeContent("want",rootDir+HOME)
}

function writeHabitat(rootDir){
    writeContent("habitat",rootDir+HOME)
}

function writeContent(name,path){
    $("#"+name).load(path+"/"+name+".html")
}