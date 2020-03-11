console.log('%c HI', 'color: firebrick')

/**
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener('DOMContentLoaded', () => {
  fetchDogs()
  fetchBreeds()
})

function fetchDogs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json))
}

function renderDogs(json) {
    const dogImageContainer = document.getElementById('dog-image-container')
    json.message.forEach(dog => {
        dogImageContainer.innerHTML += `<img src='${dog}'>`
    })
}

function fetchBreeds() {
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(json) {
  const dogBreedContainer = document.querySelector('#breed-dropdown')
  const dogObj = json.message
  Object.keys(dogObj).forEach(dog => {
    dogBreedContainer.innerHTML += `<li id='${dog.charAT(0)}'>${dog}</li>`
  })
  textColor()

  let dropDown = document.querySelector('#breed-dropdown')

  dropDown.addEventListener('change', (e) => {
    let breedChildren = document.querySelector('#dog-breeds').children
    let breedsArray = [...breedChildren]
    breedsArray.forEach(breed => {
      if (breed.id === e.target.value) {
        breed.style.display = null
      } else {
        breed.style.display = 'none'
      }
    })
  })
}

function textColor() {
    let dogBreedContainer = document.querySelector('#dog-breeds')
    dogBreedContainer.addEventListener("click", (e) => {
        e.target.style.color = '#69b9ff'
    })
}
**/

let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
  loadImages();
  loadBreedOptions();
});

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(dogPicUrl) {
  let container = document.queryElector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}

function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(res => res.json())
  .then(results => {
    breeds = Object.keys(results.message);
    updateBreedList(breeds);
    addBreedSelectListener();
  });
}

function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateColor(event) {
  event.target.style.color = 'palevioletred';
}
