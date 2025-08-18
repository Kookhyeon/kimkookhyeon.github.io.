const costs1 = document.querySelectorAll(".cost1");
const costs2 = document.querySelectorAll(".cost2");

costs1.forEach((el1) => {
    const original1 = el1.innerHTML;
    const alt1 = el1.dataset.alt;

    el1.addEventListener("click", ()=> {
        el1.innerHTML = (el1.innerHTML === original1) ? alt1 : original1;
    })
})

costs2.forEach((el2)=> {
    const original2 = el2.innerHTML;
    const alt2 = el2.dataset.alt;     
    
    el2.addEventListener("click", ()=> {

        el2.innerHTML = (el2.innerHTML === original2) ? alt2 : original2;
   });
 });