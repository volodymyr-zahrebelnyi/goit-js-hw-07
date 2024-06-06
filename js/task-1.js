const categories = document.querySelector("#categories");
const categoriesItems = categories.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoriesTitles = item.querySelector("h2").textContent;
    const categoriesElements = item.querySelectorAll("li");

    console.log(`Category: ${categoriesTitles}`);
    console.log(`Elements: ${categoriesElements.length}`);

});