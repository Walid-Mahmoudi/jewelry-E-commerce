// ******* MY ACOUNT ********//
let edit = document.getElementById("edit");
let updateInformation = document.querySelector(".update-information");
let accountInformation = document.querySelector(".profile");
let updatePassword = document.querySelector(".update-password");

function editAccount() {
  accountInformation.classList.add("disable");
  updateInformation.classList.remove("disable");
}
function back() {
  accountInformation.classList.remove("disable");
  updateInformation.classList.add("disable");
}

function resetPassword() {
  accountInformation.classList.add("disable");
  updatePassword.classList.remove("disable");
}
function backReset() {
  accountInformation.classList.remove("disable");
  updatePassword.classList.add("disable");
}
// ******** MY ORDER **********//
let order = document.querySelector(".order");
let ordersVeiw = document.querySelector(".orders-veiw");
let orderStatus = document.querySelector(".order-status");
let backOrders = document.querySelector(".back-orders");

orderStatus.classList.add("active");
order.addEventListener("click", () => {
  console.log("hero");
  ordersVeiw.classList.add("active");
  orderStatus.classList.remove("active");
});

backOrders.addEventListener("click", () => {
  ordersVeiw.classList.remove("active");
  orderStatus.classList.add("active");
});
// ********** RETURN *************//
let refundedButton = document.querySelector(".btn-refunded");
let reviewingButton = document.querySelector(".btn-reviewing");
let returnsVeiw = document.querySelector(".returns-veiw");
let refundedItems = document.querySelector(".refunded-items");
let reviewingItems = document.querySelector(".reviewing-items");

refundedItems.classList.add("disable");
reviewingItems.classList.add("disable");

refundedButton.addEventListener("click", () => {
  refundedItems.classList.remove("disable");
  returnsVeiw.classList.add("disable");
});
reviewingButton.addEventListener("click", () => {
  reviewingItems.classList.remove("disable");
  returnsVeiw.classList.add("disable");
});

function back() {
  returnsVeiw.classList.remove("disable");
  refundedItems.classList.add("disable");
  reviewingItems.classList.add("disable");
}
