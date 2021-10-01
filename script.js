const Toggle = document.querySelector(".toggle");
const nav = document.querySelector(".header__nav");
const left = document.querySelector(".left");
const right = document.querySelector("right");
const Lists = document.querySelectorAll(".header__list");
const cart = document.querySelector(".cart");
const cartDetail = document.querySelector(".cartDetail");
const navLists = Array.from(Lists);

const handleCart = () => {
  cartDetail.classList.toggle("showCart");
};
cart.addEventListener("click", handleCart);

const handleToggle = () => {
  nav.classList.toggle("show");
  Toggle.classList.toggle("left-show");

  if (nav.classList.contains("show")) {
    cartDetail.classList.remove("showCart");
  }
};

Toggle.addEventListener("click", handleToggle);

function HandleMenus() {
  navLists.forEach((nav) => nav.classList.remove("active"));
  this.classList.add("active");

  nav.classList.toggle("show");
}

navLists.forEach((nav) => {
  nav.addEventListener("click", HandleMenus);
});

const scrollingUp = document.querySelector(".scroll-up");
const rootElement = document.documentElement;

scrollingUp.addEventListener("click", () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const changeTheme = document.querySelector(".change-theme");

const wrapper = document.querySelector(".wrapper");

let localData = localStorage.getItem("currentTheme");

if (localData) {
  wrapper.classList.add("dark");
}
changeTheme.addEventListener("click", () => {
  wrapper.classList.toggle("dark");

  if (wrapper.classList.contains("dark")) {
    localStorage.setItem("currentTheme", "enabled");
  } else {
    localStorage.removeItem("currentTheme");
  }

  console.log("clicked");
});

//get cart Object
const getCartObject = (e) => {
  const menuObject = {};
  const menuz = e.target.closest("div");
  const menuImage = menuz.querySelector(".menu-img").src;
  const menuName = menuz.querySelector(".food-name").textContent;

  const price = menuz.querySelector("strong").textContent;
  let menuPrice = price.slice(1);
  menuObject.foodImage = menuImage;
  menuObject.foodName = menuName;
  menuObject.foodPrice = menuPrice;

  // Stop Reservation from being made for same food twice
  const names = cartContainer.querySelectorAll(".food-title");
  for (let i = 0; i < names.length; i++) {
    if (names[i].textContent == menuName) {
      alert("This Food is already added");

      return;
    }
  }

  addToReservation(menuObject);
  let totalP = 0;
  const reservedPrices = cartContainer.querySelectorAll(".resrved-price");

  reservedPrices.forEach((price) => {
    const numberPrice = parseInt(price.textContent);

    totalP += numberPrice;
  });

  document.querySelector(".final-price").textContent = `$ ${totalP}`;
  document.querySelector(".delivery-fee").textContent = `$ 10`;
  const sumTotal = totalP + 10;
  document.querySelector(".sum-total").textContent = `$ ${sumTotal}`;
};

const addIcons = document.querySelectorAll(".add-icon");

const cartContainer = document.getElementsByClassName("shopping-container")[0];
const cartContain = document.getElementsByClassName("food-title")[0];

addIcons.forEach((addIcon, index) => {
  addIcon.addEventListener("click", getCartObject);
});

//create dynamic reservation item
const addToReservation = (menuObject) => {
  const reservedItem = document.createElement("div");

  reservedItem.classList.add("shopping-main");

  reservedItem.innerHTML = `
<div class="shopping-main">
<div class="shopping-item">
<div class="image-text">
    <div class="img-shopping">
        <img class="img-shop" src="${menuObject.foodImage}" alt="">
    </div>
    <div class="text">
        <h3 class='food-title'>${menuObject.foodName}</h3>
        <h4 >PRICE: $ <span class="resrved-price"> ${menuObject.foodPrice}</span> </h4>
        <button class="remove-btn"><i class='bx bxs-trash' style="color: red"></i></button>
    </div>
</div>

<div class="input">
    <input class="input-num"  type="number" value="1" min="1" disabled >
</div>

<div class="subtotal"><h4>$ ${menuObject.foodPrice}</h4></div>
</div>
</div>

`;

  const container = document.querySelector(".shopping-container");
  const summation = document.querySelector(".summation");
  container.insertBefore(reservedItem, summation);
  alert(" Menu added to reservation");

  //Delete item

  const deleteBtns = document.querySelectorAll(".remove-btn");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", handleRemove);
  });
};

//Function in charge of deleting reservation
function handleRemove(e) {
  e.target.parentElement.parentElement.parentElement.parentElement.remove();
  updatePrice();
  alert("Menu is removed from reservation");
}

//Update price after Delete
function updatePrice() {
  let totalP = 0;
  const reservedPrices = Array.from(
    cartContainer.querySelectorAll(".resrved-price")
  );

  reservedPrices.forEach((price) => {
    const numberPrice = parseInt(price.textContent);

    totalP += numberPrice;
    return totalP;
  });

  document.querySelector(".final-price").textContent = `$ ${totalP}`;
  const sumTotal = totalP + 10;
  totalP == 0
    ? (document.querySelector(".delivery-fee").textContent = `$ 0`)
    : (document.querySelector(".delivery-fee").textContent = `$ 10`);
  totalP == 0
    ? (document.querySelector(".sum-total").textContent = `$ 0`)
    : (document.querySelector(".sum-total").textContent = `$ ${sumTotal}`);
}
