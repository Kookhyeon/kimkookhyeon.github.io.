const costs = document.querySelectorAll(".cost");
const consts1 = document.querySelector(".cost1");

costs.forEach((cost)=> {
    cost.addEventListener("click", ()=>{
        const html = cost.innerHTML.replace(/\s+/g, "").replace("<br>", "<br/>");
        if ( html === "cost:<br/>1M₩") {
            cost.innerHTML= "39.2k";
        } else if ( html ==="cost:<br/>1.7M₩") {
            cost.innerHTML = "21.6k";
        } else if ( html === "39.2k" ) {
            cost.innerHTML = "cost:<br/>1M₩";
        } else if ( html === "21.6k") {
            cost.innerHTML = "cost:<br/>1.7M₩";
        }
        });

    });

// consts1.forEach((cost1)=> {
//     cost1.addEventListener("click", ()=> {
//         const html1 = cost1.innerHTML.replace(/\s+/g, "").replace("<br>", "<br/>");
//         const original = html1;
//         const alt = cost1.dataset.alt;

//         if(original === "cost: not<br/>specified") {
//             cost.innerHTML = alt;
//         } else {
//             cost.innerHTML = original;
//         }
//     });
// });