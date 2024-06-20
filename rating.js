const box  =  document.querySelector(" main div.container")
const box2  =  document.querySelector(" main div.success")
const score  =  box2.querySelector("span");
const btn  =  box.querySelector("form button")
const listItems  =  box.querySelectorAll("form ul li");let selectedRating = null;
listItems.forEach((items)=>{
    items.addEventListener("click",()=>{
        listItems.forEach((li)=>li.classList.remove("active"))
        items.classList.add("active")
        console.log(items.textContent)
        console.log("hi")
        selectedRating = items.textContent;
    })

})
btn.addEventListener("click",()=>{
    event.preventDefault();
    if (selectedRating){
        score.textContent=selectedRating;
        box.style.display="none";
        box2.style.display="flex"
        box2.classList.add("animated");

        
    }
    else {
        alert("Please select a rating before submit.");
      }

})