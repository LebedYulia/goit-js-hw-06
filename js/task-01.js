const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);


categories.forEach(function (item) {
 const categoryName = item.querySelector("h2");
 console.log('Category:', categoryName.textContent);

 const categoryEl = item.querySelectorAll("li");
 console.log('Elements:', categoryEl.length);
})