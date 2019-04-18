console.log("let the force be with us");

const saywhat = document.querySelector("#output");

const listItems = document.querySelectorAll(".list-item");
// console.log("listItems", listItems);


for (let i = 0; i < listItems.length; i++){
    listItems.item(i).addEventListener("click", handleClick);
}

function handleClick(event){
    // console.log("event", event);
    let elementText = event.target.innerHTML;
    saywhat.innerHTML = "hummmm, " + elementText + " clicked you have";
}


const inputArea = document.querySelector("#keypress-input");

inputArea.addEventListener("keyup", function(event){
    // console.log("what is event", event);
    saywhat.innerHTML = event.target.value;
});

const yodaImage = document.querySelector("#theYoda");

document.querySelector("#change-color").addEventListener("click", (event) => {
    yodaImage.classList.toggle("flashy");
});

document.getElementById("force-lots-of").addEventListener("click", (event)  => {
    yodaImage.classList.toggle("moreforce");
});

//same as previous function, just written differently
document.getElementById("add-border").addEventListener("click", function () {
    yodaImage.classList.toggle("bordered");
});

document.getElementById("wrapper").addEventListener("click", function (event) {
    // console.log("EVENT", event);
    console.log("target", event.target);
    console.log("currentTarget", event.currentTarget);

    // Handle the click event on any li
    //toLowerCase adds a type of protection against careless coding
    if (event.target.tagName.toLowerCase() === "li") {
        // console.log("You clicked on an <li> element");
    }

    // Handle the click event on any section
    // * Notice how when you click on a section, it executes
    // this code, but *also* the code on above.
    if (event.target.className === "list-item") {
        // console.log("You clicked on an `list-item` element");
    }

    // Inspect the `id` property of the event target
    if (event.target.id === "page-title") {
        // console.log("You clicked on the page-title element");
    }
})

// Looping through array and adding events doesn't work with innerHTML because it removed previous items from the DOM before reinsering them.
// This deletes the added event handlers. Here's an alternative


var quotesArray = [
    "A long time ago in a galaxy far, far away…",
    "Use the force, Luke.",
    "The force is strong with this one.",
    "Do. Or do not. There is no try.",
    "Fear is the path to the dark side.",
    "Someday I will be the most powerful Jedi ever.",
    "You were the chosen one!"
]
//Quote = Array item
quotesArray.forEach((quote, index) => {
    let quoteBlock = `<div id="quote--${index}">
                        <h3>"${quote}" - Star Wars</h3>
                      </div>`

    let quoteDiv = document.createElement("div");
    quoteDiv.innerHTML = quoteBlock;
    document.getElementById("stickItHere").appendChild(quoteDiv);

    const quoteDom = document.getElementById(`quote--${index}`);
    quoteDom.addEventListener("click", () => {
        console.log("event", event);
        event.currentTarget.classList.add("accent");
    })
})

//Output locations
const mirrorTypeRight = document.getElementById("boxRight");
const mirrorTypeLeft = document.getElementById("boxLeft");

//Select the element
const inputText = document.querySelector("#message");
inputText.addEventListener("keyup", () => {
    mirrorTypeRight.innerHTML = event.target.value;
    mirrorTypeLeft.innerHTML = event.target.value;
})

