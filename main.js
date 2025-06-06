const CONTENT = "/content"
const HTML_CSS = "/articles/html"
const ANDROID = "/articles/android"
const KyoPro = "/articles/kyopro"
const WPF = "/articles/wpf"
const ILLUST = "/articles/illust"
const OTHER = "/articles/other"

const LIST = "<a href=\"{$root}/home/articles.html\">記事一覧</a>"
const ANDROID_LIST = "<a href=\"{$root}/articles/android/list.html\">Android/Kotlin</a>"
const WPF_LIST = "<a href=\"{$root}/articles/wpf/list.html\">WPF</a>"
const KYOPRO_LIST = "<a href=\"{$root}/articles/kyopro/list.html\">競プロ</a>"
const HTML_LIST = "<a href=\"{$root}/articles/html/list.html\">HTML/CSS</a>"
const ILLUST_LIST = "<a href=\"{$root}/articles/illust/list.html\">イラスト</a>"
const OTHER_LIST = "<a href=\"{$root}/articles/other/list.html\">その他</a>"

function articleHeaderFooter(
    root,
    type,
) {
    writeHeader(root);
    writeBreadcrumb(root, type);

    var href = "\"" + root + "articles/" + type + "/list.html\""

    writeListWithTarget(
        root,
        type,
        "<h2><a class=\"linkedH\" href=" + href + ">",
        "</a></h2>",
        "relatedList",
    )
}

function writeBreadcrumb(
    rootDir,
    place,
) {
    $.ajax({
        url: rootDir + "/common/breadcrumb.html",
        cache: false,
        async: true,
        success: function (html) {
            list = ""

            switch (place) {
                case "genre":
                    list = LIST
                    break
                case "android":
                    list = LIST
                        + ">" + ANDROID_LIST
                    break
                case "wpf":
                    list = LIST
                        + ">" + WPF_LIST
                    break
                case "kyopro":
                    list = LIST
                        + ">" + KYOPRO_LIST
                    break
                case "html":
                    list = LIST
                        + ">" + HTML_LIST
                    break
                case "illust":
                    list = LIST + " > " + ILLUST_LIST
                    break
                case "other":
                    list = LIST + " > " + OTHER_LIST
                    break
            }
            list = list.replace(
                /\{\$root\}/g,
                rootDir
            );
            html = html.replace(
                /\{\$list\}/g,
                list,
            )
            $("#breadcrumb").html(html)
        }
    });
}

function writeHeader(
    rootDir
) {
    $.ajax({
        url: rootDir + "/header.html",
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
) {
    writeList(
        "htmlList",
        openTag,
        closeTag,
        rootDir + HTML_CSS,
    )
}

function writeAndroidList(
    rootDir,
    openTag,
    closeTag
) {
    writeList(
        "androidList",
        openTag,
        closeTag,
        rootDir + ANDROID,
    )
}

function writeWpfList(
    rootDir,
    openTag,
    closeTag
) {
    writeList(
        "wpfList",
        openTag,
        closeTag,
        rootDir + WPF,
    )
}

function writeKyoProList(
    rootDir,
    openTag,
    closeTag
) {
    writeList(
        "kyoproList",
        openTag,
        closeTag,
        rootDir + KyoPro
    )
}

function writeIllustList(
    rootDir,
    openTag,
    closeTag
) {
    writeList(
        "illustList",
        openTag,
        closeTag,
        rootDir + ILLUST,
    )
}

function writeOtherList(
    rootDir,
    openTag,
    closeTag
) {
    writeList(
        "otherList",
        openTag,
        closeTag,
        rootDir + OTHER,
    )
}

function writeList(
    name,
    openTag,
    closeTag,
    path
) {
    $.ajax({
        url: path + "/" + name + ".html",
        cache: false,
        async: true,
        success: function (html) {
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
            // root になるように修正
            $("#" + name).html(html)
        }
    })
}

function writeListWithTarget(
    root,
    name,
    openTag,
    closeTag,
    target,
) {
    var path = root + "articles/" + name + "/" + name + "List.html"

    $.ajax({
        url: path,
        cache: false,
        async: true,
        success: function (html) {
            html = html.replace(
                /\{openTag\}/g,
                openTag
            ).replace(
                /\{closeTag\}/g,
                closeTag
            ).replace(
                /\{\$root\}/g,
                root + "articles/" + name
            )
            $("#" + target).html(html)
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
