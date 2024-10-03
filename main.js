function writeHeader(rootDir) {
    $("#header").load("header.html");
}

function writeAbout(){
    $("#about").load(rootDir+"home/about.html")
}

function writeArticles(rootDir){
    $("#articles").load(rootDir+"home/articles.html")
}

function writeWant(rootDir){
    $("#want").load(rootDir+"home/articles.html")
}

function writeHabitat(rootDir){
    $("#habitat").load(rootDir+"home/habitat.html")
}