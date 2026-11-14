// Gallery photos. To change the gallery:
// 1. Put the image file in images/gallery/ (any name, .jpg .jpeg .png or .webp).
// 2. Add, remove, or replace its filename in this list.
// The first 12 show when the page loads. Photos after that rotate in.
const galleryPhotos = [
  "IMG_1819.JPG",
  "IMG_1828 (1).JPG",
  "IMG_1870.JPG",
  "IMG_1890.JPG",
  "IMG_6786 (1).JPG",
  "IMG_6789.JPG",
  "IMG_6796.JPG",
  "IMG_7855.JPG",
  "IMG_7984.JPG",
  "IMG_7990.JPG",
  "IMG_8775.JPG",
  "IMG_8779.JPG",
  "IMG_8784.JPG",
  "IMG_8810.JPG",
  "IMG_8822.JPG",
  "IMG_8843.JPG",
];

const VISIBLE_COUNT = 12;
const SWAPS_PER_CYCLE = 2;
const SWAP_INTERVAL_MS = 3000;
const FADE_MS = 1000;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function photoSrc(filename) {
  return `../images/gallery/${encodeURIComponent(filename)}`;
}

function createPhoto(filename) {
  const img = document.createElement("img");
  img.src = photoSrc(filename);
  img.alt = "CUSail gallery photo";
  img.dataset.filename = filename;
  img.classList.add("fade-in");
  return img;
}

const hiddenPhotos = galleryPhotos.slice(VISIBLE_COUNT);
const container = document.getElementById("photo-container");

galleryPhotos.slice(0, VISIBLE_COUNT).forEach((filename) => {
  container.appendChild(createPhoto(filename));
});

function swapOne(displayedPhotos) {
  if (displayedPhotos.length === 0 || hiddenPhotos.length === 0) return;

  const removeIndex = getRndInteger(0, displayedPhotos.length - 1);
  const addIndex = getRndInteger(0, hiddenPhotos.length - 1);
  const removePhoto = displayedPhotos.splice(removeIndex, 1)[0];
  const nextFilename = hiddenPhotos[addIndex];

  hiddenPhotos.splice(addIndex, 1);
  hiddenPhotos.push(removePhoto.dataset.filename);

  removePhoto.classList.remove("fade-in");
  removePhoto.classList.add("fade-out");

  setTimeout(() => {
    removePhoto.insertAdjacentElement("afterend", createPhoto(nextFilename));
    removePhoto.remove();
  }, FADE_MS);
}

if (hiddenPhotos.length > 0) {
  setInterval(() => {
    const displayed = Array.from(container.querySelectorAll("img.fade-in"));
    const swaps = Math.min(SWAPS_PER_CYCLE, displayed.length, hiddenPhotos.length);
    for (let i = 0; i < swaps; i++) {
      swapOne(displayed);
    }
  }, SWAP_INTERVAL_MS);
}
