var list = [];
var itemsCount = list.length;

var listView = document.getElementById("list");
var input = document.getElementById("new_item");
var addButton = document.getElementById("add_item");

function AddItem(task) {
    itemsCount += 1;
    list.push({
    id: itemsCount,
    task: task,
    });
    PrintList();
}
          
function RemoveItem(event) {
    var id = event.target.getAttribute("data-id");
    list = list.filter(item=>{
    return item.id != id;
    });
    PrintList()
}

function CreateRow(data) {
            
    var p = document.createElement("p")
    p.innerHTML = data.task;
    p.classList.add("noMargin");

    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Task Completed";
    removeButton.dataset.id = data.id;
    removeButton.classList.add("noFlexShrink");
    removeButton.addEventListener("click", RemoveItem);

    var div = document.createElement("div");
    div.classList.add("inputRow");
    div.classList.add("taskRow");
    div.classList.add("textAlignLeft");
    div.appendChild(p);
    div.appendChild(removeButton);

    listView.appendChild(div);
}         

function PrintList() {
    while (listView.firstChild) {
      listView.removeChild(listView.firstChild);
    }
    list.forEach(data=>{
    CreateRow(data);
    });
}

addButton.addEventListener("click", function() {
    var task = input.value;
    if (task.trim().length == 0) return;
    AddItem(task);
    input.value = "";
});        
             
PrintList();