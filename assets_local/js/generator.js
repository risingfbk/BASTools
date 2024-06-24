// THis function evaluates which of the two types of form should the website display,
// The Default one (choice1) is the simple with few features,
// the other one contains all the feature
// the handling of the content is basic (keep a variable to keep track of what to show)

let choice1=true;
let choice2=false;

function choice(clicked){
    //console.log(clicked); //print the choice passed to this function
  
    document.getElementsByClassName('evaluator-results')[0].innerHTML=''; // delete previous result    
    // User clicked one of the two buttons
    if(clicked=='choice1'){
        if(choice1==false){
            choice2=false; // update variables
            choice1=true; // update variables
            document.getElementsByClassName('container')[0].innerHTML=choice1_formHTML; // add form choice 1 (removes form choice2)
            document.getElementById('choice2').style="color:#ffffff; background-color:#6f777d"; // set the style of choice2 as "not selected"
            document.getElementById('choice1').style="color:#3d4144; background-color:#60CCD2"; // set the style of choice1 as "selected
        }
    }
    else{
        if(choice2==false){
            choice1=false;
            choice2=true;
            document.getElementsByClassName('container')[0].innerHTML=choice2_formHTML; // add form choice 1 (removes form choice2)
            document.getElementById('choice1').style="color:#ffffff; background-color:#6f777d"; // set the style of choice1 as "not selected"
            document.getElementById('choice2').style="color:#3d4144; background-color:#60CCD2"; // set the style of choice2 as "selected"
        }
    }
}

function toggleCheckbox(id) {
    // function that togles the checkboxes
    const checkbox = document.getElementById(id);
    checkbox.checked = !checkbox.checked;
}



// HTML content for the form of choice1
const choice1_formHTML = `
<form>
<div class="checklist-item" onclick="toggleCheckbox('item1')" >
    <input type="checkbox" id="item1" name="checklist" value="GUI">
    <label for="item1">GUI</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item2')">
    <input type="checkbox" id="item2" name="checklist" value="CLI">
    <label for="item2">CLI</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item3')">
    <input type="checkbox" id="item3" name="checklist" value="API">
    <label for="item3">API</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item4')">
    <input type="checkbox" id="item4" name="checklist" value="On Premise Deployment">
    <label for="item4">On Premise Deployment</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item5')">
    <input type="checkbox" id="item5" name="checklist" value="Cloud-Based Deployment">
    <label for="item5">Cloud-Based Deployment</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item6')">
    <input type="checkbox" id="item6" name="checklist" value="SaaS">
    <label for="item6">SaaS</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item7')">
    <input type="checkbox" id="item7" name="checklist" value="Agent Based">
    <label for="item7">Agent Based</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item8')">
    <input type="checkbox" id="item8" name="checklist" value="APT">
    <label for="item8">APT</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item9')">
    <input type="checkbox" id="item9" name="checklist" value="Lateral Movement">
    <label for="item9">Lateral Movement</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item10')">
    <input type="checkbox" id="item10" name="checklist" value="Pre-Compromise">
    <label for="item10">Pre-Compromise</label>
</div>
</form>
`;

const choice2_formHTML = `
<form>
<div class="checklist-item" onclick="toggleCheckbox('item1')" >
    <input type="checkbox" id="item1" name="checklist" value="Item 1">
    <label for="item1">GUI</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item2')">
    <input type="checkbox" id="item2" name="checklist" value="Item 2">
    <label for="item2">CLI</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item3')">
    <input type="checkbox" id="item3" name="checklist" value="Item 3">
    <label for="item3">API</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item4')">
    <input type="checkbox" id="item4" name="checklist" value="Item 4">
    <label for="item4">On Premise</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item5')">
    <input type="checkbox" id="item5" name="checklist" value="Item 5">
    <label for="item5">Cloud Based</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item6')">
    <input type="checkbox" id="item6" name="checklist" value="Item 6">
    <label for="item6">SaaS</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item7')">
    <input type="checkbox" id="item7" name="checklist" value="Item 7">
    <label for="item7">Direct Deployment</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item8')">
    <input type="checkbox" id="item8" name="checklist" value="Item 8">
    <label for="item8">Agent Based</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item9')">
    <input type="checkbox" id="item9" name="checklist" value="Item 9">
    <label for="item9">Agentless</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item10')">
    <input type="checkbox" id="item10" name="checklist" value="Item 10">
    <label for="item10">Virtual Agents</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item11')">
    <input type="checkbox" id="item11" name="checklist" value="Item 11">
    <label for="item11">Security Requirements </label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item12')">
    <input type="checkbox" id="item12" name="checklist" value="Item 12">
    <label for="item11">General Requirements </label>
</div>
</form>
`;