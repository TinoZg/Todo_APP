// Adds items to list and local storage
// Deletes items from list and local storage
const appendList = () => {
  // Exit function if input is empty
  if (document.getElementById("add").value == "") {
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

  // create new input, append it to list item and give it the value from input the form
  let storageLength = localStorage.length + 1;
  const newItem = document.createElement("input");
  newItem.type = "text";
  newItem.readOnly = true;
  newItem.style.backgroundColor = "#fff";
  newItem.setAttribute("id", "item" + storageLength);
  newItem.classList.add("form-control", "mx-3");
  newItem.value = inputValue;
  listItem.appendChild(newItem);

  // Add items to local storage
  localStorage.setItem("item" + storageLength, inputValue);

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
  // Local storage
  let storageLength = localStorage.length;
  for (let i = 0; i < storageLength; i++) {
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
    newItem.setAttribute("id", "item" + (i + 1));
    newItem.classList.add("form-control", "mx-3");
    newItem.value = localStorage.getItem(
      localStorage.key(storageLength - i - 1)
    );
    listItem.appendChild(newItem);

    // button for removing items from the list
    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="bi bi-trash"></i>';
    listItem.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
      localStorage.removeItem("item" + (i + 1));
      listItem.remove();
      checkbox.remove();
      removeButton.remove();
    });
  }
};
