const CONTENT = "/content"
const HTML_CSS = "/html_css"
const ANDROID = "/articles/android"
const KyoPro = "/articles/kyopro"
const WPF = "/articles/wpf"

const LIST = "<a href=\"{$root}/home/articles.html\">記事一覧</a>"
const ANDROID_LIST = "<a href=\"{$root}/articles/android/list.html\">Android/Kotlin</a>"
const WPF_LIST = "<a href=\"{$root}/articles/wpf/list.html\">WPF</a>"
const KYOPRO_LIST = "<a href=\"{$root}/articles/kyopro/list.html\">競プロ</a>"

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
                case "kyopro":
                    list = LIST
                        + ">" + KYOPRO_LIST
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
