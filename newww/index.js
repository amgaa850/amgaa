const addBtn = document.getElementById('add-btn');
const input = document.getElementById('input');
const history = document.querySelector('.history');

addBtn.addEventListener("click", function () {
    let value = input.value
    if (input.value === "") return;

    const newDiv = document.createElement('div');
    newDiv.textContent = input.value;
    
    const newP = document.createElement("P");
    newP.textContent - "edit";

    newDiv.appendChild(newP)
    
const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    editBtn.addEventListener("click", function () {
        if (editBtn.textContent === "edit") {
            const newInput = document.createElement("Input")
            newInput.value = value;
            newInput.classList.add("new-input");
            newDiv.prepend(newInput);

            editBtn.textContent = "save";
            newP.style.display = "none";
        } else {
            const newInput1 = newDiv.querySelector(".new-input");
            newP.textContent = newInput1.value;
            value = newInput1.value;

            newInput1.style.display = "none";

            editBtn.textContent = "edit";

            newP.style.display = "block";

        }
    }) ;
    

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener("click", function () {
        newDiv.remove();
    });

    newDiv.appendChild(editBtn);
    newDiv.appendChild(deleteBtn);
    
    input.value = "";
    history.appendChild(newDiv);
}); 
