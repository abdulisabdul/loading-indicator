let fadeTarget = document.querySelector(".loading")

function show_loading() {
    fadeTarget.style.display = "block";
    fadeTarget.style.opacity = 1;
}
function hide_loading() {
    // fadeTarget.style.display = "none";
    let fadeEffect = setInterval(() => {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect)
            fadeTarget.style.display = "none"
        }
    },100)
}
function tampil_data_ajax() {
    show_loading()
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((response) => {
            response.map(data => {
                var node = document.createElement("li")
                var textNode = document.createTextNode(data.title)
                node.appendChild(textNode)
                document.getElementById("data_ajax").appendChild(node)
            })
        hide_loading()
    })
}