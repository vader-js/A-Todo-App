
var entry = document.querySelector('#entry');
var addButton = document.querySelector('#add_button');
var output = document.querySelector(".container2");

class item {

  constructor (itemName) {
    this.createDiv(itemName);
  }

createDiv(itemName) {
  let input= document.createElement("input");
  input.disabled= true;
  input.type= 'text';
  input.value= itemName;
  input.classList.add("ouput_value");

 /** let itemBox = document.createElement("div");
  itemBox.classList.add("output");

  let editButton = document.createElement("button");
  editButton.classList.add("edit_button");
  editButton.innerHTML= EDIT;

  let removeButton = document.createElement("button");
  editButton.classList.add("trash_button");
  removeButton.innerHTML =<i class="fas fa-plus"></i>;**/

  output.appendChild(input);

 /** itemBox.appendChild(input);
  itemBox.appendChild(editButton);
  itemBox.appendChild(removeButton);**/
  }
}
new item("ayomide");   