import { circuit } from "./circuit.js";
let obj = new circuit(10, 10, 0);
obj.generate(5);
obj.checkGenerate();
// document.getElementById("button_save")!.addEventListener("click", obj.setCookie);
document.getElementById("haut").addEventListener("click", function () { direction("haut"); });
document.getElementById("droite").addEventListener("click", function () { direction("droite"); });
document.getElementById("gauche").addEventListener("click", function () { direction("gauche"); });
document.getElementById("bas").addEventListener("click", function () { direction("bas"); });
function direction(direction) {
    if (direction == "haut") {
        obj.Turn(obj, "UP");
    }
    else if (direction == "droite") {
        obj.Turn(obj, "RIGHT");
    }
    else if (direction == "gauche") {
        obj.Turn(obj, "LEFT");
    }
    else if (direction == "bas") {
        obj.Turn(obj, "DOWN");
    }
    console.log(matrice.frog);
}
let matrice = {
    tags: [],
    flies: [],
    frog: {
        name: "",
        coordX: 0,
        coordY: 0,
        css_class: ""
    }
};
let saveButton = document.getElementById('button_save');
let loadButton = document.getElementById('button_download');
saveButton === null || saveButton === void 0 ? void 0 : saveButton.addEventListener('click', function (event) {
    console.log(obj.frog);
    // matrice.frog = obj.frog;
    // matrice.flies = obj.flies;
    Object.assign(matrice.frog, obj.frog);
    Object.assign(matrice.flies, obj.flies);
    matrice.tags = [];
    let container = document.getElementById('container-circuit');
    let allchild = container.getElementsByTagName("*");
    for (let element of allchild) {
        matrice.tags.push({
            x: element.getAttribute('data-x'),
            y: element.getAttribute('data-y'),
            type: element.className
        });
    }
    console.log(matrice.frog);
});
loadButton === null || loadButton === void 0 ? void 0 : loadButton.addEventListener('click', function (event) {
    var _a;
    console.log(obj.frog);
    console.log(matrice.frog);
    // obj.frog = matrice.frog;
    // obj.flies = matrice.flies;
    Object.assign(obj.frog, matrice.frog);
    Object.assign(obj.flies, matrice.flies);
    let container = document.getElementById('container-circuit');
    container.innerHTML = "";
    for (let element of matrice.tags) {
        let htmlTag = document.createElement('div');
        switch (element.type) {
            case "square frog":
                htmlTag.setAttribute('type', 'frog');
                break;
            case "square fly":
                htmlTag.setAttribute('type', 'fly');
                break;
            case "square rock":
                htmlTag.setAttribute('type', 'rock');
                break;
            case "square":
                htmlTag.setAttribute('type', '');
                break;
        }
        htmlTag.setAttribute('class', element.type);
        if (element.type === 'row') {
            container === null || container === void 0 ? void 0 : container.appendChild(htmlTag);
        }
        else {
            htmlTag.setAttribute('data-x', element.x.toString());
            htmlTag.setAttribute('data-y', element.y.toString());
            (_a = container === null || container === void 0 ? void 0 : container.lastChild) === null || _a === void 0 ? void 0 : _a.appendChild(htmlTag);
        }
    }
});
