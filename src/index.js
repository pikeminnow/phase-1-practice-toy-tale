let addToy = false;

//sample data
// {
//   "id": 1,
//   "name": "Woody",
//   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//   "likes": 5
// },

document.addEventListener("DOMContentLoaded", () => {

  //page element variables
  const newToyForm = document.getElementsByClassName('add-toy-form');
  const toyCollection = document.getElementById('toy-collection');

  //When the page loads, make a 'GET' request to fetch all the toy objects. 

  fetch('http://localhost:3000/toys')
    .then((response) => response.json())
    .then(displayToysInDom);

  //With the response data, make a <div class="card"> for each toy and add it to the toy-collection div.
  // h2 tag with the toy's name
  // img tag with the src of the toy's image attribute and the class name "toy-avatar"
  // p tag with how many likes that toy has
  // button tag with a class "like-btn" and an id attribute set to the toy's id number
  function displayToysInDom(toysObjects) {

    toysObjects.forEach(toyObject => {

      toyCollection.append(populateCard(toyObject));

    });

    function populateCard(toyObject) {

      let toyName = document.createElement('h2');
      let toyImg = document.createElement('img');
      let toyLikes = document.createElement('p');
      let toyButton = document.createElement('button');


      let card = document.createElement('div');
      card.className = "card";
      card.id = toyObject.id;
      toyCollection.append(card);

      toyName.innerText = toyObject.name;
      toyImg.src = toyObject.image;
      toyImg.className = "toy-avatar";
      toyLikes.innerText = toyObject.likes;
      toyButton.className = 'like-btn';
      toyButton.id = toyObject.id;

      card.append(toyName, toyImg, toyLikes, toyButton);
      return card;
    }

  }

  //When a user submits the toy form, things should happen:
  // the toy should be added to the DOM without reloading the page.
  newToyForm[0].addEventListener('submit', displayNewToy);
  function displayNewToy(newToyEvent) {
    newToyEvent.preventDefault();
    console.log(newToyEvent);
    toyCollection.append(populateNewToyCard(newToyEvent));

  }

  function populateNewToyCard(toyArray) {

    let toyName = document.createElement('h2');
    let toyImg = document.createElement('img');
    let toyLikes = document.createElement('p');
    let toyButton = document.createElement('button');


    let card = document.createElement('div');
    card.className = "card";
    toyCollection.append(card);

    toyName.innerText = toyArray.target.name.value;
    toyImg.src = toyArray.target.image.value;
    toyImg.className = "toy-avatar";
    toyLikes.innerText = '0';
    toyButton.className = 'like-btn';
    toyButton.id = '#';

    card.append(toyName, toyImg, toyLikes, toyButton);
    return card;
  }


  //pre-supplied code
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
