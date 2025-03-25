console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener("DOMContentLoaded", function() {

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById("dog-image-container");
            data.message.forEach(imgUrl => {
                let img = document.createElement("img");
                img.src = imgUrl;
                img.style.width = "200px";
                img.style.margin = "10px";
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching images:", error));

    
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById("dog-breeds");
            for (const breed in data.message) {
                let li = document.createElement("li");
                li.innerText = breed;
                breedList.appendChild(li);

            
                li.addEventListener("click", function() {
                    li.style.color = "red";
                });
            }
        })
        .catch(error => console.error("Error fetching breeds:", error));


    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function(e) {
        const letter = e.target.value;
        const breedList = document.getElementById("dog-breeds");
        const breeds = breedList.getElementsByTagName("li");

        for (const breed of breeds) {
            if (breed.innerText.startsWith(letter)) {
                breed.style.display = "";
            } else {
                breed.style.display = "none";
            }
        }
    });
});


