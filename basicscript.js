// ******************************** \\
// Variables and start page

// Variables
const allMovies = movies.filter((movie) => movie.type === "movie");
const searchInputField = document.getElementById("searchInput");
const filteredList = document.getElementById("movieList");
const allRadioBtn = document.querySelectorAll("input");

const radios = document.querySelectorAll("input[type=radio]");

// Start page
allMovies.forEach((movie) => {
  createNewLi(movie);
});

// ******************************** \\
// ** Event listeners ** \\

// Radio buttons
for (var r = 0, rLen = radios.length; r < rLen; r++) {
  radios[r].onclick = filter;
}
// Searchbar + button
searchBtn.addEventListener("click", searchInput);
searchInputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchInput();
  }
});

// ******************************** \\
// ** Functions ** \\

// Clear filtered list
function removeListItems() {
  while (filteredList.firstChild) {
    filteredList.removeChild(filteredList.firstChild);
  }
}
// Create new LI's
function createNewLi(movie) {
  const newLi = document.createElement("li");
  const newImg = document.createElement("img");
  const newA = document.createElement("a");
  filteredList.appendChild(newLi);
  newLi.appendChild(newA);
  newA.href = "https://www.imdb.com/title/" + movie.imdbID;
  // newA.target = "_blank";
  newA.appendChild(newImg);
  newImg.src = movie.poster;
}

// Check and change input for filter function
function checkFilterInput(name) {
  if (typeof name != "string") {
    const userFilter = name.target.defaultValue;
    return userFilter;
  } else {
    const userFilter = name;
    return userFilter;
  }
}
// Filter function
function filter(name) {
  let userFilter = checkFilterInput(name);
  console.log("userFilter", userFilter);

  switch (userFilter) {
    case "latest":
      removeListItems();
      let allLatest = allMovies.filter(
        (movie) => parseInt(movie.year, 10) >= 2014
      );
      allLatest.forEach((movie) => {
        createNewLi(movie);
      });
      break;
    case "avenger":
    case "avengers":
      removeListItems();
      let allAvenger = allMovies.filter((movie) =>
        movie.title.includes("Avenger")
      );
      allAvenger.forEach((movie) => {
        createNewLi(movie);
      });
      break;
    case "x-men":
    case "xmen":
      removeListItems();
      let allXmen2 = allMovies.filter((movie) => movie.title.includes("X-Men"));
      allXmen2.forEach((movie) => {
        createNewLi(movie);
      });
      break;
    case "princess":
      removeListItems();
      let allPrincess = allMovies.filter((movie) =>
        movie.title.includes("Princess")
      );

      allPrincess.forEach((movie) => {
        createNewLi(movie);
      });
      break;
    case "batman":
      removeListItems();
      let allBatman = allMovies.filter((movie) =>
        movie.title.includes("Batman")
      );
      allBatman.forEach((movie) => {
        createNewLi(movie);
      });
      break;
    case "":
      removeListItems();
      allMovies.forEach((movie) => {
        createNewLi(movie);
      });
      break;
    default:
  }
}

// Function for search bar

function searchInput() {
  let text;
  let search = document.getElementById("searchInput").value.toLowerCase();
  for (let r = 0, rLen = radios.length; r < rLen; r++) {
    if (radios[r].value === search) {
      radios[r].checked = true;
    } else {
      radios[r].checked = false;
    }
  }
  console.log("search input = ", typeof search);
  switch (search) {
    case "avenger":
    case "avengers":
      filter(search);
      break;
    case "x-men":
      filter(search);
      break;
    case "xmen":
      filter(search);
      break;
    case "princess":
      filter(search);
      break;
    case "batman":
      filter(search);
      break;
    case "latest":
      filter(search);
      break;
    case "":
      filter(search);
      break;
    default:
      text = `Helaas zijn er geen films gevonden met de naam ${search}`;
  }
  if (text != undefined) {
    removeListItems();
    document.querySelector("p").innerHTML = text;
  }
  return;
}
// *********************************************
