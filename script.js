const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");

imageInput.addEventListener("change", () => {
  const files = imageInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Hanya proses file gambar
    if (!file.type.startsWith("image/")) continue;

    const reader = new FileReader();

    reader.onload = function (event) {
      const img = document.createElement("img");
      img.src = event.target.result;
      gallery.appendChild(img);
    };

    reader.readAsDataURL(file);
  }
});

const modal = document.getElementById('modalPreview');
const modalImg = document.getElementById('modalImage');

function showModal(imgSrc) {
  modalImg.src = imgSrc;
  modal.style.display = 'flex';
}

modal.onclick = () => {
  modal.style.display = 'none';
};

