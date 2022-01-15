const searchBar = document.getElementById("searchBar");
const productDiv = document.getElementById("product-div")
const displayedProducts = document.getElementsByClassName("product-on-display")

let item = [];

searchBar.addEventListener('keyup', (e) => {
    const searchedValue =  e.target.value.toLowerCase();
    Array.from(displayedProducts).forEach((element)=>{
        const cardTitle = element.querySelector(".title").innerText.toLowerCase();
        if(cardTitle.includes(searchedValue)){
            element.style.display = "block";
        }else {
            element.style.display = "none";
        }
    })

    // const filteredCharacters = item.filter((character) => {
    //     return character.title.includes(searchedValue)
    // } )
    // console.log(filteredCharacters);
    // console.log(searchedValue)
})




function apiRequest() {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
//  .then(data=>console.log(data))
    .then(data => {
        item = data;
        // console.log(item)
        
        productDiv.innerHTML = `
        ${item.map(product => {
            return `
            <div class="product-on-display">
                <img class="product-img" src="${product.image}">
                <p class="title">${product.title}</p>
                <p>Price : ${product.price} </p>
                <p>Rating : ${product.rating} </p>
                <button class="add-to-cart">Add item to cart</button>
            </div>
            `
        }).join('')}
        `
    }) 
}

apiRequest();


// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// // .then(data=>console.log(data))
// .then(data => {
//     item = data;
//     console.log(item)
//     const productDiv = document.getElementById("product-div")
//     productDiv.innerHTML = `
//     ${item.map(product => {
//         return `
//         <div class="product-on-display">
//             <img class="product-img" src="${product.image}">
//             <p>${product.title}</p>
//             <p>Price : ${product.price} </p>
//             <p>Rating : ${product.rating} </p>
//             <button class="add-to-cart">Add item to cart</button>
//         </div>
//         `
//     }).join('')}
//     `
// }) 