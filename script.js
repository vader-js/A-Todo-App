let entry = document.querySelector('#entry');
let addButton = document.querySelector('#add_button');
let output = document.querySelector(".container2");

class item {

  constructor (itemName) {
    this.createDiv(itemName);
  }

createDiv(itemName) {
  let input = document.createElement("input");
  input.disabled= true;
  input.type= 'text';
  input.value = itemName;
  input.classList.add("output_value");
  console.log(input)

   let itemBox = document.createElement("div");
  itemBox.classList.add("output");

  let editButton = document.createElement("button");
  editButton.classList.add("edit_button");
  editButton.innerHTML= "EDIT";

  let removeButton = document.createElement("button");
  removeButton.classList.add("trash_button");
  removeButton.innerHTML = "Remove";

  output.appendChild(itemBox);
  console.log(output)
  console.log(itemBox)

  itemBox.appendChild(input);
  itemBox.appendChild(editButton);
  itemBox.appendChild(removeButton);
  entry.value = "";
  }
}
 
function handleClick(){
  if (entry.value == ""){
    return ;
  } else{
    let newItem = new item(entry.value);
    }
}  
//newItem.createDiv("ayomide");
addButton.addEventListener("click", handleClick);