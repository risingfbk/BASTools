function eval(){
    // function that evaluates the features passed to the form
    const checkedValues = [];
    const checkboxes = document.querySelectorAll('input[name="checklist"]:checked');
    
    checkboxes.forEach((checkbox) => {
        checkedValues.push(checkbox.value);
    });
    
    // Gathered the values i have to find the best match between the tool characteristics and the features required by the users
    let x=check_best_match(checkedValues);
    //console.log("Items received:",checkedValues); 
}

function check_best_match(checkedValues){


    caldera_value = 0;
    for (let index = 0; index < caldera_data.length; index++) {
        const element = caldera_data[index];
        for (let index2 = 0; index2 < checkedValues.length; index2++) {
            if(checkedValues[index2] == element.Feature){
                if(element.Value =="y" || element.Value=="y*"){
                    caldera_value+=1;
                }
            }   
        }
    }

    dummy_value = 0;
    for (let index = 0; index < dummy_data.length; index++) {
        const element = dummy_data[index];
        for (let index2 = 0; index2 < checkedValues.length; index2++) {
            if(checkedValues[index2] == element.Feature){
                if(element.Value =="y" || element.Value=="y*"){
                    dummy_value+=1;
                }
            }
        }
    }
    
    generateHTML(caldera_value, dummy_value,checkedValues.length);
}


function generateHTML(caldera_value, dummy_value, n_checked_values){
    document.getElementsByClassName('evaluator-results')[0].innerHTML=''; // delete previous result
    var best_tool="";
    if(caldera_value>=dummy_value){
        best_tool="Caldera"
    }
    else{
        best_tool="Dummy"
    }
    var text=document.createElement("p");
    text.style.fontSize='x-large';
    text.textContent = best_tool + " is the best tool, having " + caldera_value + " of the " + n_checked_values + " features requested";
    document.getElementsByClassName("evaluator-results")[0].appendChild(text);

}