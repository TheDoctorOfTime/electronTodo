var inputValue;
var i = 0

function newItem(){
    inputValue  = document.getElementById('todoItemText').value;
    if(inputValue.length > 0)
    {
        //set parent container
        var parentContainer = document.createElement("div");
        parentContainer.setAttribute('class', 'input-group mb-3');
        parentContainer.setAttribute('id', 'item' + i);

        //checkbox container
        var cbContainerDom = document.createElement("div");
        var cbContainerSub = document.createElement("div");
        cbContainerDom.setAttribute('class', 'input-group-prepend');
        cbContainerSub.setAttribute('class', 'input-group-text cbCont');

        //checkbox && label
        var checkbox = document.createElement("button");
        var label = document.createElement("i");

        checkbox.setAttribute('type', 'button');
        checkbox.setAttribute('class', 'btn btn-default btn-circle')
        checkbox.setAttribute('state', 'unchecked');
        checkbox.setAttribute('id', 'checkbox' + i);
        checkbox.setAttribute('onclick', 'this.blur(); check(this.id);');
        label.setAttribute('class', 'fa fa-check')

        //<button type="button" class="btn btn-default btn-circle" state="unchecked"><i class="fa fa-check"></i></button>
        checkbox.appendChild(label);
        cbContainerSub.appendChild(checkbox);
        cbContainerDom.appendChild(cbContainerSub);

        //textbox
        var textbox = document.createElement("input");
        textbox.setAttribute('type', 'text');
        textbox.setAttribute('class', 'form-control');
        textbox.setAttribute('id', 'textboxControl');
        textbox.setAttribute('aria-label', 'Text input with checkbox');
        textbox.setAttribute('value', inputValue);

        //delete button container
        var dbContainer = document.createElement("div");

        //delete button
        var dbutton = document.createElement("button");
        dbutton.setAttribute('class', 'btn btn-outline-secondary rightSpace');
        dbutton.setAttribute('type', 'button');
        dbutton.setAttribute('id', 'button-addon2');
        dbutton.setAttribute('itemNum', 'item' + i);
        dbutton.setAttribute('onclick', 'deleteItem(this);');
        dbutton.innerText = "Delete";

        dbContainer.appendChild(dbutton);

        //append all as children to parentContainer
        parentContainer.appendChild(cbContainerDom);
        parentContainer.appendChild(textbox);
        parentContainer.appendChild(dbContainer);

        document.getElementById("list").insertBefore(parentContainer, document.getElementById("end"));
        i++;
        document.getElementById('todoItemText').value = null;

    }
}

function deleteItem(data){

    var element = document.getElementById(data.getAttribute('itemNum'));
    element.parentNode.removeChild(element);

}

function check(data){

    var state = document.getElementById(data).getAttribute("state");

    if(state == "unchecked"){
        document.getElementById(data).setAttribute("state", "checked");
    }
    else if(state == "checked"){
        document.getElementById(data).setAttribute("state", "unchecked");
    }

}

var input = document.getElementById("todoItemText");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        newItem();
    }
});