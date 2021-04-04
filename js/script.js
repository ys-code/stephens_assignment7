// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form=window.document.getElementById('addForm');
let table=window.document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count=0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    
    // GET THE VALUES FROM THE TEXT BOXES
    let id=document.getElementById('id').value;
    let name=document.getElementById('name').value;
    let extension=document.getElementById('extension').value;
    let mail=document.getElementById('email').value;
    let department=document.getElementById('department').value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow= table.insertRow();
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idCell=newRow.insertCell(0);
    let nameCell=newRow.insertCell(1);
    let extensionCell=newRow.insertCell(2);
    let mailCell=newRow.insertCell(3);
    let departmentCell=newRow.insertCell(4);
    let iconCell=newRow.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let idValue=window.document.createTextNode(id);
        idCell.appendChild(idValue);
    let nameValue=window.document.createTextNode(name);
        nameCell.appendChild(nameValue);
    let extensionValue=window.document.createTextNode(extension);
        extensionCell.appendChild(extensionValue);
    let mailValue=window.document.createTextNode(mail);
        mailCell.appendChild(mailValue);
    let departmentValue=window.document.createTextNode(department);
        departmentCell.appendChild(departmentValue);
    
    // CREATE THE DELETE BUTTON
    let deleteBnt=window.document.createElement('button');
    let deleteBntValue=window.document.createTextNode('X');
        deleteBnt.appendChild(deleteBntValue);
        iconCell.appendChild(deleteBnt);
    
    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    window.document.getElementById('id').focus();
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count+=1;
    window.document.getElementById('empCount').value=count;
});

// DELETE EMPLOYEE
table.addEventListener('click', e =>{
    let clickTarget=e.target;
    let bntparent=clickTarget.parentElement.parentElement.rowIndex;
    window.confirm('The selected data will be deleted');
    table.deleteRow(bntparent);
    count-=1;
    window.document.getElementById('empCount').value=count;
});