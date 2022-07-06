const ramenMenuDiv = document.getElementById('ramen-menu')
const ramenImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const ramenRestaurant = document.querySelector('.restaurant')
const ramenRating = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')
const ramenForm = document.querySelector('#new-ramen')

function addImageClick(img, ramen)
{
    img.addEventListener("click", () => {
        ramenImage.src = ramen.image
        ramenName.innerText = ramen.name
        ramenRestaurant.innerText = ramen.restaurant
        ramenRating.innerText = ramen.rating
        ramenComment.innerText = ramen.comment
    })
}

function populateMenu(array)
{
    console.log(array)
    for(let i=0; i<array.length; i++)
    {
        let newImg = document.createElement('img');
        newImg.src = array[i].image
        ramenMenuDiv.append(newImg);
        addImageClick(newImg, array[i]);
    }
}

function fetchRamen()
{
    return fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(function makeSite(data) {
        populateMenu(data)
    })
}

ramenForm.addEventListener('submit', function addNewRamen(event) {
    event.preventDefault()
    let newRamen = {};
    newRamen['name'] = document.getElementById('new-name').value
    newRamen['restaurant'] = document.getElementById('new-restaurant').value
    newRamen['image'] = document.getElementById('new-image').value
    newRamen['rating'] = document.getElementById('new-rating').value
    newRamen['comment'] = document.getElementById('new-comment').value
    console.log(newRamen)
    let newImage = document.createElement('img')
    ramenMenuDiv.append(newImage);
    newImage.src = newRamen['image']
    addImageClick(newImage, newRamen)
})

fetchRamen()

