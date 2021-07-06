var cont = document.getElementById("container");

if (cont){
    for (var i: number= 1; i < 101; ++i) {
        let div = document.createElement("div");
        div.setAttribute("class", "square");
        div.setAttribute("id", "div" + i);
    
        cont.appendChild(div);
    }
}


// method save()




