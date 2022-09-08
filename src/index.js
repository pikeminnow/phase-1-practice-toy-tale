let addToy = false;

//sample data
// {
//   "id": 1,
//   "name": "Woody",
//   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//   "likes": 5
// },

document.addEventListener("DOMContentLoaded", () => {
  //When the page loads, make a 'GET' request to fetch all the toy objects. 

  //With the response data, make a <div class="card"> for each toy and add it to the toy-collection div.
  // h2 tag with the toy's name
  // img tag with the src of the toy's image attribute and the class name "toy-avatar"
  // p tag with how many likes that toy has
  // button tag with a class "like-btn" and an id attribute set to the toy's id number

//When a user submits the toy form, things should happen:
// the toy should be added to the DOM without reloading the page.

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
