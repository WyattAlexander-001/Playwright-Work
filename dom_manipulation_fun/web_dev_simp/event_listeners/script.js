const grandparent =  document.querySelector(".grandparent");
const parent = grandparent.querySelector(".parent");
const child = parent.querySelector(".child");

document.addEventListener("click", e => {
    // console.log(e.target);
    console.log("document clicked");

});

grandparent.addEventListener("click", e => {
    // console.log(e.target);
    console.log("grandparent clicked");
    },
    // {capture: true}
);

parent.addEventListener("click", e => {
    // console.log(e.target);
    console.log("parent clicked");
    },
    // {capture: true}
);

// This makes a good single box to click
child.addEventListener("click", e => {
    // console.log(e.target);
    console.log("child clicked");
    e.stopPropagation();
    }, {once: true}
);

//Bubbles up tree
const divs = document.querySelectorAll("div");
divs.forEach(div => {
    div.addEventListener("click", e => {
        // console.log(e.target);
        div.style.backgroundColor = "purple";
        console.log("div clicked");
        e.stopPropagation();
        }, {once: true}
    );
});

// https://www.youtube.com/watch?v=XF1_MlZ5l6M

document.addEventListener("click", e => {
    if(e.targets.matches("div")){
        console.log("div clicked");
        e.stopPropagation();
    }
});

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            console.log("global event listener");
            callback(e);
        }
    });
}

// Example usage
addGlobalEventListener("click", "div", (e) => {
    console.log("Div clicked!", e);
});


