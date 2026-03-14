console.log("IAI.ONE loaded")

document.querySelectorAll(".app").forEach(function(el){

el.addEventListener("mouseover",function(){

el.style.transform="scale(1.05)"

})

el.addEventListener("mouseout",function(){

el.style.transform="scale(1)"

})

})
