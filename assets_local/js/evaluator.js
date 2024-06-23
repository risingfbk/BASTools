function eval(){
    const checkedValues = [];
    const checkboxes = document.querySelectorAll('input[name="checklist"]:checked');
    
    checkboxes.forEach((checkbox) => {
        checkedValues.push(checkbox.value);
    });
    
    console.log(checkedValues); 
}