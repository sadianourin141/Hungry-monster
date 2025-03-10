// fetch('www.themealdb.com/api/json/v1/1/categories.php')
//     .then(response => response.json())
//     .then(data => console.log(data))



fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => {
        displayFood(data)
        console.log(data)

    })


const displayFood = foods => {
    console.log(foods.categories)
    const foodDiv = document.getElementById('foodDiv');

    for (let i = 0; i < foods.categories.length; i++) {
        const food = foods.categories[i];
        console.log(food);

        const info = `
        <img src="${food.strCategoryThumb}" alt="">
        <h2>${food.strCategory}</h2>
        <button onClick="displayDetail('${food.strCategory}')">Detail</button>
        
        `
            // <h4>${food.strCategoryDescription}</h4>
        const newDiv = document.createElement('div');
        newDiv.className = 'newDiv'

        newDiv.innerHTML = info;

        foodDiv.appendChild(newDiv);



    }




}

// const displayFood = foods => {
//     console.log(foods.categories)

//     const ul = document.getElementById('ul-item');

//     for (let i = 0; i < foods.length; i++) {
//         const food = foods[i];
//         console.log(food.categories.strCategory);

//         const li = document.createElement('li');
//         li.innerText = element.categories[0].strCategory;
//         ul.appendChild(li);



//     }


// }

const displayDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displaySingleFood(data)
            console.log(data.meals[0]);

        })



}

const displaySingleFood = detail => {
    const detailDiv = document.getElementById('detail')

    console.log(detail)
    for (let i = 0; i < detail.meals.length; i++) {
        const element = detail.meals[i];
        console.log(element)

        const foodInfo = `
   <h2>${element.strMeal}</h2>
   <h3>${element.strArea}<//h3>
   <h3>${element.strIngredient1}<//h3>
   `
        const infoDiv = document.createElement('div')
        infoDiv.innerHTML = foodInfo;
        detailDiv.appendChild(infoDiv);



    }


}