// HTML Elements
const catImage = document.getElementById("catImage");
const nextBtn = document.getElementById("nextBtn");
const likeBtn = document.getElementById("likeBtn");
const downloadBtn = document.getElementById("downloadBtn");
const message = document.getElementById("message");
const favoritesContainer = document.getElementById("favoritesContainer");

// Store favourite cats
let favorites = JSON.parse(localStorage.getItem("catFavorites")) || [];

// Fetch Random Cat
async function getRandomCat() {
    try {
        message.textContent = "Finding a cute cat... 🐾";
        nextBtn.disabled = true;

        const response = await fetch(
            "https://api.thecatapi.com/v1/images/search"
        );

        if (!response.ok) {
            throw new Error("Unable to fetch cat image");
        }

        const data = await response.json();

        catImage.src = data[0].url;
        catImage.dataset.id = data[0].id;

        message.textContent = "A new furry friend has arrived! 🐱";

    } catch (error) {
        message.textContent = "Oops! Something went wrong. Try again.";

        console.error(error);

    } finally {
        nextBtn.disabled = false;
    }
}

// Display Favourite Cats
function displayFavorites() {

    favoritesContainer.innerHTML = "";

    if (favorites.length === 0) {
        favoritesContainer.innerHTML =
            "<p>No favourites yet. Start liking some cats!</p>";
        return;
    }

    favorites.forEach((cat) => {

        const img = document.createElement("img");

        img.src = cat.url;
        img.alt = "Favourite cat";
        img.className = "favorite-cat";

        favoritesContainer.appendChild(img);
    });
}

// Like Button
likeBtn.addEventListener("click", () => {

    const catUrl = catImage.src;
    const catId = catImage.dataset.id;

    if (!catId || !catUrl) {
        message.textContent = "Please wait for a cat to load!";
        return;
    }

    const alreadyLiked = favorites.some(
        cat => cat.id === catId
    );

    if (alreadyLiked) {
        message.textContent = "You already liked this cat! ❤️";
        return;
    }

    favorites.push({
        id: catId,
        url: catUrl
    });

    localStorage.setItem(
        "catFavorites",
        JSON.stringify(favorites)
    );

    displayFavorites();

    message.textContent = "Added to your favourites! ❤️";
});

// Download Button
downloadBtn.addEventListener("click", async () => {

    try {
        const response = await fetch(catImage.src);

        if (!response.ok) {
            throw new Error("Download failed");
        }

        const blob = await response.blob();

        const imageUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = imageUrl;
        link.download = "CatCloud-Cat.jpg";

        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(imageUrl);

        message.textContent = "Cat image downloaded! 📥";

    } catch (error) {
        message.textContent = "Download unavailable. Try opening the image directly.";
        console.error(error);
    }
});

// Another Cat Button
nextBtn.addEventListener("click", getRandomCat);

// Load saved favourites and first cat
displayFavorites();
getRandomCat();