//1

const array = [
  {
    price: "3000",
    item: "t-shirt",
    quantity: 1,
  },
  {
    price: "12000",
    item: "shorts",
    quantity: 2,
  },
  {
    price: "3000",
    item: "pant",
    quantity: 5,
  },
];

let totalAmount = () => {
  let amount = array
    .map((x) => {
      let { price, quantity } = x;
      return +price * quantity;
    })
    .reduce((x, y) => x + y, 0);
  console.log(amount);
};

totalAmount();

//2

const numbers = "12234534342";

const quant = numbers.split("").filter(function (value) {
  return value === "2";
}).length;

console.log(quant);

//3

let data = [
  {
    name: "Alice",
    phoneNum: "8164035456",
  },
  {
    name: "Bob",
    phoneNum: "5725662397",
  },
  {
    name: "Cris",
    phoneNum: "8643094841",
  },
  {
    name: "Daniel",
    phoneNum: "8164035456",
  },
];

data = JSON.parse(localStorage.getItem('contacts')) || [];

let items = document.querySelector(".items");

let generateItems = () => {
  data.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return (items.innerHTML = data
    .map((x) => {
      let { name, phoneNum } = x;
      return `
      <div class="item">
          <span class="item-name">${name}</span>
          <span class="item-phone">${phoneNum}</span>
    </div>
      `;
    })
    .join(""));
};

generateItems();

let addContact = () => {
  data.push({
    name: document.querySelector(".username").value,
    phoneNum: document.querySelector(".phone_number").value,
  });
  localStorage.setItem("contacts", JSON.stringify(data));
  generateItems();
  document.querySelector(".username").value = "";
  document.querySelector(".phone_number").value = "";
};

let input = document.querySelector(".search_input");
let item = document.querySelectorAll(".item");

const searchFunc = () => {
  for (let i = 0; i < item.length; i++) {
    if (item[i].innerText.toLowerCase().includes(input.value.toLowerCase())) {
      item[i].classList.remove("hidden");
    } else {
      item[i].classList.add("hidden");
    }
  }
};

const deleteFunc = () => {
  data = data.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.phoneNum === value.phoneNum)
  );
  localStorage.setItem("contacts", JSON.stringify(data));
  generateItems();
};
