




document.addEventListener("DOMContentLoaded", function(event) { 
    fetch('../assets/shared/nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#replace_with_navbar");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem)
    })
});


    // fetch('../assets/shared/nav.html')
    // .then(res => res.text())
    // .then(text => {
    //     let oldelem = document.querySelector("script#replace_with_navbar");
    //     let newelem = document.createElement("div");
    //     newelem.innerHTML = text;
    //     oldelem.parentNode.replaceChild(newelem,oldelem)
    // })

// yhgtyfgtyftdfthvhvghvgh
// jkhghvghgggujgvgygy
// njkhujk