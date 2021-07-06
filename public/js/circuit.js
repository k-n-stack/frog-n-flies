var cont = document.getElementById("container-circuit");
if (cont) {
    for (var i = 1; i < 101; ++i) {
        let div = document.createElement("div");
        div.setAttribute("class", "square");
        div.setAttribute("id", "div" + i);
        cont.appendChild(div);
    }
}
