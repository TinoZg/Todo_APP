function appendList() {
  // get value from input
  let inputValue = document.getElementById("add").value;

  // add new list element and give it value from input
  let list = document.getElementById("list");
  let listItem = document.createElement("li");
  list.appendChild(listItem);
  listItem.innerHTML = inputValue;

  // create buttons for checking and removing list item
  let checkedButton = document.createElement("button");
  checkedButton.innerHTML = "X";
  checkedButton.addEventListener("click", () => {
    listItem.remove();
    checkedButton.remove();
    doneButton.remove();
  });
  list.appendChild(checkedButton);

  let doneButton = document.createElement("button");
  doneButton.innerHTML = "Done";
  doneButton.addEventListener("click", () => {
    if (listItem.style.getPropertyValue("text-decoration") === "line-through") {
      listItem.style = "text-decoration:none";
    } else {
      listItem.style = "text-decoration:line-through";
    }
  });
  list.appendChild(doneButton);
}
