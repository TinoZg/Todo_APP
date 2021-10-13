// Adds items to list and local storage
// Deletes items from list and local storage
const appendList = () => {
  // Exit function if input is empty
  if (document.getElementById("add").value === "") {
    return;
  }

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

  // If local storage is currently empty, add key = item1
  // If local storage is not empty take "biggest" key value and add 1
  // e.g. (item1,item2,item3) since item3 is "biggest" new item will be item(3+1) = item4
  let newStorageKey;
  if (localStorage.key(0) == null) {
    newStorageKey = "1";
  } else {
    newStorageKey = parseInt(localStorage.key(0).charAt(4)) + 1;
  }
  const newItem = document.createElement("input");
  newItem.type = "text";
  newItem.readOnly = true;
  newItem.style.backgroundColor = "#fff";
  newItem.setAttribute("id", "item" + newStorageKey);
  newItem.classList.add("form-control", "mx-3");
  newItem.value = inputValue;
  listItem.appendChild(newItem);

  // Add items to local storage
  localStorage.setItem("item" + newStorageKey, inputValue);

  // button for removing items from the list and local storage
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="bi bi-trash"></i>';
  listItem.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    localStorage.removeItem(newItem.id);
    listItem.remove();
    checkbox.remove();
    removeButton.remove();
  });

  // if checkbox is checked, change font color to gray
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      newItem.style.color = "#c4c1c0";
    } else {
      newItem.style.color = "#212529";
    }
  });
};

// Renders items on page load from local storage
const renderStorageItems = () => {
  Object.keys(localStorage)
    .reverse()
    .forEach((element) => {
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

      // if checkbox is checked, change font color to gray
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          newItem.style.color = "#c4c1c0";
        } else {
          newItem.style.color = "#212529";
        }
      });

      // create new input, append it to list item and give it the value from input form
      const newItem = document.createElement("input");
      newItem.type = "text";
      newItem.readOnly = true;
      newItem.style.backgroundColor = "#fff";
      newItem.setAttribute("id", element);
      newItem.classList.add("form-control", "mx-3");
      newItem.value = localStorage.getItem(element);
      listItem.appendChild(newItem);

      // button for removing items from the list
      const removeButton = document.createElement("button");
      removeButton.innerHTML = '<i class="bi bi-trash"></i>';
      listItem.appendChild(removeButton);
      removeButton.addEventListener("click", () => {
        localStorage.removeItem(element);
        listItem.remove();
        checkbox.remove();
        removeButton.remove();
      });
    });
};
