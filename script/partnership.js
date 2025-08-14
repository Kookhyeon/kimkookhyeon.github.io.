const costs = document.querySelectorAll(".cost");
const items = document.querySelectorAll(".cost1");

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

items.forEach((el)=> {
    const original = el.innerHTML;
    const alt = el.dataset.alt;     
    
    el.addEventListener("click", ()=> {

        el.innerHTML = (el.innerHTML === original) ? alt : original;
   });
 });