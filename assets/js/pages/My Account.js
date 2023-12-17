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
