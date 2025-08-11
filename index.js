const wrapper = document.querySelector(".slider-wrapper");
const menu = document.querySelectorAll(".Menu-Item");

const product = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "Red",
        img: "/img/Air_Jordan-removebg-preview.png",
      },
      { code: "blue", img: "/img/Nike air 2.png" },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 1124,
    colors: [
      {
        code: "#f5f5f5",
        img: "/img/Jumpman_Air_Jordan_Drawing_Shoe_Sneakers_PNG-removebg-preview.png",
      },
      {
        code: "Red",
        img: "/img/red jordan.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 1564,
    colors: [
      { code: "blue", img: "img/blue_shoe-removebg-preview.png" },
      { code: "gray", img: "/img/grayblazer.png" },
    ],
  },
  {
    id: 4,
    title: "Hippie",
    price: 2578,
    colors: [
      {
        code: "#f5f5f5",
        img: "/img/Nike_Air_Max_Air_Jordan_Air_Force_1_Sneakers_PNG-removebg-preview.png",
      },
      { code: "black", img: "/img/black hippie.png" },
    ],
  },
];

let choosenProduct = product[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menu.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide

    wrapper.style.transform = ` translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = product[index];

    //cahnge text of current products

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    /// assign new color

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payments");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
