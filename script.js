function appendList() {
  // get value from input form
  const inputValue = document.getElementById("add").value;

  // add new list item and append it to the list
  const list = document.getElementById("list");
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item", "d-flex", "align-items-center");
  listItem.style.border = "None";
  list.appendChild(listItem);

  // create checkbox and append it to list item
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");
  checkbox.style.width = "1.7em";
  checkbox.style.height = "1.1em";
  listItem.appendChild(checkbox);

  // create new input, append it to list item and give it the value from input form
  const newItem = document.createElement("input");
  newItem.type = "text";
  newItem.readOnly = true;
  newItem.style.backgroundColor = "#fff";
  newItem.classList.add("form-control", "mx-3");
  newItem.value = inputValue;
  newItem.innerHTML = inputValue;
  listItem.appendChild(newItem);

  // button for removing items from the list
  let removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="bi bi-trash"></i>';
  listItem.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    listItem.remove();
    checkbox.remove();
    removeButton.remove();
  });

  // if checkbox is checked, change font color to gray
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      console.log("checked");
      newItem.style.color = "#c4c1c0";
    } else {
      console.log("not checked");
      newItem.style.color = "#212529";
    }
  });
}
