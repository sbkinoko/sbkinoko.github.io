from urllib import request


print("ContestName")

name: str = input()

def fetch_html(url: str) -> str:
    with request.urlopen(url) as res:
        html = res.read().decode()
    return html

H: int = 3
W: int = 3
taskNum: int = 7


def fetch_html(url: str) -> str:
    with request.urlopen(url) as res:
        html = res.read().decode()
    return html


url = "https://atcoder.jp/contests/" + name + "/editorial?editorialLang=ja"
html = fetch_html(url)

with open("articles/kyopro/tag/table.txt", "w", encoding="utf-8") as o:

    def myWirte(s: str):
        o.write(s + "\n")

    myWirte("<tr>")
    myWirte('<th rowspan="' + str(H) + '">')
    myWirte('<a hre="https://atcoder.jp/contests/' + name + '">')
    myWirte(name.upper())
    myWirte("</a>")

    for h in range(H):
        for w in range(W):
            id: int = h * W + w
            c: chr = chr(ord("a") + id)

            if id % 3 == 0 and id != 0:
                myWirte("<tr>")

            myWirte("<td>")
            if id < taskNum:
                myWirte(
                    '<a href="https://atcoder.jp/contests/'
                    + name
                    + "/tasks/"
                    + name
                    + "_"
                    + c
                    + '">'
                )
                div = html.split("<h3>" + str(c).upper())
                title: str = ""
                if div.__len__ != 1:

                    title = str(c).upper() + div[1].split("<a")[0]
                    title.strip(" ")

                myWirte(title)
                myWirte("</a>")
                myWirte("<br>")
                edUrl: str = ""
                edName: str = ""
                if div.__len__ != 1:
                    edUrl = div[1].split("<a href=")[1]
                    edUrl = edUrl.split('"')[1]
                    edUrl = "https://atcoder.jp" + edUrl
                    edName = div[1].split("users/")[1].split("\"")[0]

                myWirte('<a href="' + edUrl + '">')
                myWirte("公式解説(" + edName + ")")
                myWirte("</a>")
                myWirte("<br>")
                myWirte("<ul>")
                myWirte("<li>")
                myWirte("</li>")
                myWirte("</ul>")

            myWirte("</td>")

            if id % 3 == 2:
                myWirte("</tr>")
