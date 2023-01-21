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
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
