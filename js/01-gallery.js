import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery')

galleryRef.addEventListener('click', onGalleryItemClick)

function makeGalleryItemsMarkup (items){
 return items.map(({ preview, original, description})  => ` <a class="gallery__link" href="${original}">
 <img
   class="gallery__image"
   src="${preview}"
   data-source="${original}"
   alt="${description}"
 />
</a>`).join("")
}

const result = makeGalleryItemsMarkup (galleryItems)

function insertMarkup(position, string){
position.innerHTML = string
}

insertMarkup(galleryRef, result)



function onGalleryItemClick (e) {
e.preventDefault();
if(!e.target.classList.contains('gallery__image')){
    return
} 
const modalImg = basicLightbox.create(` <img
//     src="${e.target.dataset.source}"
//     alt="${e.target.alt}"
//   />`)
modalImg.show()

galleryRef.addEventListener('keydown', closeModalEscape)
function closeModalEscape(e){
    if(e.key === 'Escape'){
        modalImg.close();
    }
}
}


