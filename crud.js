// Container   Crud


let editBtn = document.getElementById('edit');
let deleteBtn = document.getElementById('delete');
let addBtn = document.getElementById('add');

let editCrud = document.getElementById('crud-edit');
let deleteCrud = document.getElementById('crud-delete');
let addCrud = document.getElementById('crud-add');


editBtn.addEventListener('click', () => {
    editBtn.classList = 'button blue active-blue';
    deleteBtn.classList = 'button red';
    addBtn.classList = 'button green';

    editCrud.classList = 'visible';
    deleteCrud.classList = 'hidden';
    addCrud.classList = 'hidden';
})

deleteBtn.addEventListener('click', () => {
    editBtn.classList = 'button blue';
    deleteBtn.classList = 'button red active-red';
    addBtn.classList = 'button green';

    editCrud.classList = 'hidden';
    deleteCrud.classList = 'visible';
    addCrud.classList = 'hidden';
})

addBtn.addEventListener('click', () => {
    editBtn.classList = 'button blue';
    deleteBtn.classList = 'button red';
    addBtn.classList = 'button green  active-green';

    editCrud.classList = 'hidden';
    deleteCrud.classList = 'hidden';
    addCrud.classList = 'visible';
})

// Crud Edit

let editCategories = document.getElementById('edit-categories');
let editItems = document.getElementById('edit-items');
let editItemList = document.getElementById('items');

let editName = document.getElementById('edit-name');
let editPrice = document.getElementById('edit-price');
let editDropArea = document.getElementById('edit-drop-area');

let saveBtn = document.getElementById('save');

const addItemsToListEdit = () => {
    let category = editCategories.value;
    let tempArray = JSON.parse(localStorage.getItem(category));

    editItemList.innerHTML = '';
    editItems.value = '';

    tempArray.forEach(item => {
        editItemList.innerHTML += `<option value="${item.name}"></option>`;
    })
    
}

editCategories.addEventListener('focusout', addItemsToListEdit);


let editImage = '';

const handleDragOver = (event) => {
    event.preventDefault();
}

const handleDrop = (event) => {
    event.preventDefault();
    
    const image = event.dataTransfer.files[0];

    if (image) {
        const reader = new FileReader();

        reader.onload = function (e) {
            editImage = e.target.result;
        };

        reader.readAsDataURL(image);
    }
}


const editSelectedItem = () => {
    let category = editCategories.value;
    let tempArray = JSON.parse(localStorage.getItem(category));
    let selectedItem = editItems.value;

    let newName = editName.value;
    let newPrice = editPrice.value;

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].name === selectedItem) {
            if (newName) {
                tempArray[i].name = newName;
            }
            if (newPrice) {
                tempArray[i].price = newPrice;
            }
            if (editImage) {
                tempArray[i].image = editImage;
            }

            localStorage.setItem(category, JSON.stringify(tempArray))

            editImage = '';
            break;
        }
    }
}

saveBtn.addEventListener('click', editSelectedItem);

// Crud Delete

let deleteCategories = document.getElementById('delete-categories');
let deleteItems = document.getElementById('delete-items');
let deleteItemBtn = document.getElementById('delete-item');


const addItemsToListDelete = () => {
    let category = deleteCategories.value;
    let tempArray = JSON.parse(localStorage.getItem(category));

    editItemList.innerHTML = '';
    deleteItems.value = '';

    tempArray.forEach(item => {
        editItemList.innerHTML += `<option value="${item.name}"></option>`;
    })
}

deleteCategories.addEventListener('focusout', addItemsToListDelete);


const deleteItem = () => {
    let category = deleteCategories.value;
    let tempArray = JSON.parse(localStorage.getItem(category));
    let name = deleteItems.value;

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].name === name) {
            tempArray.splice(i, 1);
            localStorage.setItem(category, JSON.stringify(tempArray));
        }
    }
}

deleteItemBtn.addEventListener('click', deleteItem);

// Crud Add

let addCategories = document.getElementById('add-categories');
let addName = document.getElementById('add-name');
let addPrice = document.getElementById('add-price');
let addItemBtn = document.getElementById('add-item');

let addNewImage = ''

const handleDropAdd = (event) => {
    event.preventDefault();

    const image = event.dataTransfer.files[0];

    if (image) {
        const reader = new FileReader();

        reader.onload = function (e) {
            addNewImage = e.target.result;
        }

        reader.readAsDataURL(image);
    }
}

const addNewItem = () => {
    let category = addCategories.value;
    let tempArray = JSON.parse(localStorage.getItem(category));
    let name = addName.value;
    let price = addPrice.value;

    if (category && name && price && addNewImage) {
        tempArray.push({name: name, price: price, image: addNewImage});
        localStorage.setItem(category, JSON.stringify(tempArray));
    }
}

addItemBtn.addEventListener('click', addNewItem);