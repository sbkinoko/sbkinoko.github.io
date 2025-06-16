
// ref
// https://ja.stackoverflow.com/questions/78035/javascript%E3%81%A7meta%E3%82%BF%E3%82%B0%E5%86%85%E3%81%AElink%E8%A6%81%E7%B4%A0%E3%81%AE%E4%B8%80%E9%83%A8%E3%82%92%E6%9B%B8%E3%81%8D%E6%8F%9B%E3%81%88%E3%81%9F%E3%81%84
function writeCanonical(
    genre,
    name,
) {
    var canonical = document.head.querySelectorAll('link[rel="canonical"]');
    console.log(canonical);

    var path = 'https://sbkinoko.github.io/articles/' + genre + "/" + name + "/" + name + ".html";

    canonical.item(0).href = path;
}
