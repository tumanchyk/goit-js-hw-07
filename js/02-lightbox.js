import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery')


function makeGalleryItemsMarkup (items){
 return items.map(({ preview, original, description})  => ` <a class="gallery__item" href="${original}">
 <img
   class="gallery__image"
   src="${preview}"
   alt="${description}"
 />
</a>`).join("")
}

const result = makeGalleryItemsMarkup (galleryItems)

function insertMarkup(position, string){
position.innerHTML = string
}

insertMarkup(galleryRef, result)


let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
gallery.on();