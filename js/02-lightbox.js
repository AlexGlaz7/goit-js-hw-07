import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divRef = document.querySelector(".js-gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map((item) => {
      return `
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>
    `;
    })
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
divRef.innerHTML = addGalleryMarkup;

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});

console.log(galleryItem);
