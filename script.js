let images = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg',
];

let cartItem = 1;

addImages(images);
// nextImage(images);
// addImages(images);
// preview(images);
// previousImage(images);

const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
  previousImage(images);
  addImages(images);
  preview(images);
});

const next = document.querySelector('.next');
next.addEventListener('click', () => {
  nextImage(images);
  addImages(images);
  preview(images);
});

const imageContainers = document.querySelectorAll('.img-secondary');
imageContainers.forEach((image, index) => {
  image.addEventListener('click', () => {
    sliceArray(images, index);
    console.log(images);
    addImages(images);
    preview(images);
  });
});

const cartDisplay = document.querySelector('.cart-display');
cartDisplay.addEventListener('click', cartContent);

function preview(images) {
  const container = document.querySelector('.img-primary');
  container.style.backgroundImage = `url(${images[0]})`;
}

function nextImage(arrayImages) {
  const shifted = arrayImages.shift();
  arrayImages.push(shifted);
  console.log(images);
}

function previousImage(arrayImages) {
  const popped = arrayImages.pop();
  arrayImages.unshift(popped);
  console.log(images);
}

function addImages(arrayImage) {
  const imageContainers = document.querySelectorAll('.img-secondary');
  imageContainers.forEach((img, index) => {
    img.style.backgroundImage = `url(${images[index]})`;
    if (index == 0) {
      img.style.opacity = '0.5';
    }
  });
}

function sliceArray(arrayImages, index) {
  const deleted = arrayImages.splice(index);
  images = [...deleted, ...arrayImages];
}

function cartContent() {
  console.log('fired');
  const cart = document.querySelector('.cart');
  cart.classList.toggle('active');
  if (cartItem == 0) {
    cart.innerHTML = '<h6>Cart</h6><p>Your cart is empty</p>';
  } else {
    cart.innerHTML =
      "<h6>Cart</h6><div class='item'><img src='./images/image-product-1-thumbnail.jpg' alt='' /><div class='text'><div class='price-checkout'><p>Fall Limited Edition Sneakers</p><div style='display: flex'><p class='calc'>125$ x 3</p><p class='price-checkoutt'>$375.00</p></div></div><img src='./images/icon-delete.svg' alt='' class='del' /></div></div><div class='ccc'><button class='check'>Checkout</button></div>";
  }
}
