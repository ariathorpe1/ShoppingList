// Write your code here:

// DOM elements
const input = document.querySelector("#shopping-form input");
const addBtn = document.querySelector("#shopping-form button");
const list = document.querySelector("#shopping-list");
const template = document.querySelector("#item-template");

// Create and add a new shopping list item
function createItem() {
  const text = input.value.trim();
  if (!text) return;

  // clone template
  const clone = template.content.cloneNode(true);
  const li = clone.querySelector("li");
  const textEl = clone.querySelector(".item-text");
  const removeBtn = clone.querySelector(".remove-btn");

  // set text
  textEl.textContent = text;

  // remove button behavior
  removeBtn.addEventListener("click", removeShoppingListItem);

  // add to list
  list.appendChild(li);

  // clear input
  input.value = "";
}

// Remove an item
function removeShoppingListItem(event) {
  event.target.closest("li").remove();
}

// Add button event
addBtn.addEventListener("click", createItem);
