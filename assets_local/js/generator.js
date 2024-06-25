// THis function evaluates which of the two types of form should the website display,
// The Default one (choice1) is the simple with few features,
// the other one contains all the feature
// the handling of the content is basic (keep a variable to keep track of what to show)

let choice1=true;
let choice2=false;
let select_status=false;

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

function selectall(){
    const checkboxes = document.querySelectorAll('input onclick="event.stopPropagation()"[name="checklist"]');
    // Iterate over the NodeList and check each checkbox
    
    if(select_status==true){
        //I want to deselect
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
        document.getElementById("selectall").innerText="Select All";
        select_status = false;
    }
    else{
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
        document.getElementById("selectall").innerText="Deselect All";
        select_status = true;
    };
    
}

// HTML content for the form of choice1
const choice1_formHTML = `
<form>
<div class="checklist-item" onclick="toggleCheckbox('item1')" >
    <input onclick="event.stopPropagation()" type="checkbox" id="item1" name="checklist" value="GUI">
    <label for="item1">GUI</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item2')">
    <input onclick="event.stopPropagation()" type="checkbox" id="item2" name="checklist" value="CLI">
    <label for="item2">CLI</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item3')">
    <input onclick="event.stopPropagation()" type="checkbox" id="item3" name="checklist" value="API">
    <label for="item3">API</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item4')">
    <input onclick="event.stopPropagation()" type="checkbox" id="item4" name="checklist" value="On Premise Deployment">
    <label for="item4">On Premise Deployment</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item5')">
    <input onclick="event.stopPropagation()" type="checkbox" id="item5" name="checklist" value="Cloud-Based Deployment">
    <label for="item5">Cloud-Based Deployment</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item6')">
    <input onclick="event.stopPropagation()" type="checkbox" id="item6" name="checklist" value="SaaS">
    <label for="item6">SaaS</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item7')">
    <input onclick="event.stopPropagation()" type="checkbox" id="item7" name="checklist" value="Agent Based">
    <label for="item7">Agent Based</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item8')">
    <input onclick="event.stopPropagation()" type="checkbox" id="item8" name="checklist" value="APT">
    <label for="item8">APT</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item9')">
    <input onclick="event.stopPropagation()" type="checkbox" id="item9" name="checklist" value="Lateral Movement">
    <label for="item9">Lateral Movement</label>
</div>
<div class="checklist-item" onclick="toggleCheckbox('item10')">
    <input onclick="event.stopPropagation()" type="checkbox" id="item10" name="checklist" value="Pre-Compromise">
    <label for="item10">Pre-Compromise</label>
</div>
</form>
`;

const choice2_formHTML = `
<form>
<div class="category">Architecture</div>
<div class="checklist-item" onclick="toggleCheckbox('item1')"> <input onclick="event.stopPropagation()" type="checkbox" id="item1" name="checklist"
    value="GUI"> <label for="item1">GUI</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item2')"> <input onclick="event.stopPropagation()" type="checkbox" id="item2" name="checklist"
    value="CLI"> <label for="item2">CLI</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item3')"> <input onclick="event.stopPropagation()" type="checkbox" id="item3" name="checklist"
    value="API"> <label for="item3">API</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item4')"> <input onclick="event.stopPropagation()" type="checkbox" id="item4" name="checklist"
    value="On Premise Deployment"> <label for="item4">On Premise Deployment</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item5')"> <input onclick="event.stopPropagation()" type="checkbox" id="item5" name="checklist"
    value="Cloud-Based Deployment"> <label for="item5">Cloud-Based Deployment</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item6')"> <input onclick="event.stopPropagation()" type="checkbox" id="item6" name="checklist"
    value="SaaS"> <label for="item6">SaaS</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item7')"> <input onclick="event.stopPropagation()" type="checkbox" id="item7" name="checklist"
    value="Direct Deployment"> <label for="item7">Direct Deployment</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item8')"> <input onclick="event.stopPropagation()" type="checkbox" id="item8" name="checklist"
    value="Containerized Deployment"> <label for="item8">Containerized Deployment</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item11')"> <input onclick="event.stopPropagation()" type="checkbox" id="item11" name="checklist"
    value="Agent Based"> <label for="item11">Agent Based</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item12')"> <input onclick="event.stopPropagation()" type="checkbox" id="item12" name="checklist"
    value="Agentless"> <label for="item12">Agentless</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item13')"> <input onclick="event.stopPropagation()" type="checkbox" id="item13" name="checklist"
    value="Virtual Agents"> <label for="item13">Virtual Agents</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item14')"> <input onclick="event.stopPropagation()" type="checkbox" id="item14" name="checklist"
    value="Security Requirements"> <label for="item14">Security Requirements</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item15')"> <input onclick="event.stopPropagation()" type="checkbox" id="item15" name="checklist"
    value="General Requirements"> <label for="item15">General Requirements</label> </div>
<div class="category">Organization</div>
 <div class="checklist-item" onclick="toggleCheckbox('item16')"> <input onclick="event.stopPropagation()" type="checkbox" id="item16" name="checklist"
    value="Ability"> <label for="item16">Ability</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item17')"> <input onclick="event.stopPropagation()" type="checkbox" id="item17" name="checklist"
    value="Ability Configuration"> <label for="item17">Ability Configuration</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item18')"> <input onclick="event.stopPropagation()" type="checkbox" id="item18" name="checklist"
    value="Custom Ability"> <label for="item18">Custom Ability</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item19')"> <input onclick="event.stopPropagation()" type="checkbox" id="item19" name="checklist"
    value="Custom Ability Saving"> <label for="item19">Custom Ability Saving</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item20')"> <input onclick="event.stopPropagation()" type="checkbox" id="item20" name="checklist"
    value="Import Ability"> <label for="item20">Import Ability</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item21')"> <input onclick="event.stopPropagation()" type="checkbox" id="item21" name="checklist"
    value="Operation"> <label for="item21">Operation</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item22')"> <input onclick="event.stopPropagation()" type="checkbox" id="item22" name="checklist"
    value="Operation Configuration"> <label for="item22">Operation Configuration</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item23')"> <input onclick="event.stopPropagation()" type="checkbox" id="item23" name="checklist"
    value="Custom Operation"> <label for="item23">Custom Operation</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item24')"> <input onclick="event.stopPropagation()" type="checkbox" id="item24" name="checklist"
    value="Custom Operation Saving"> <label for="item24">Custom Operation Saving</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item25')"> <input onclick="event.stopPropagation()" type="checkbox" id="item25" name="checklist"
    value="Import Operation"> <label for="item25">Import Operation</label> </div>
<div class="category">Attack</div>
 <div class="checklist-item" onclick="toggleCheckbox('item26')"> <input onclick="event.stopPropagation()" type="checkbox" id="item26" name="checklist"
    value="APT"> <label for="item26">APT</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item27')"> <input onclick="event.stopPropagation()" type="checkbox" id="item27" name="checklist"
    value="Group of APTs"> <label for="item27">Group of APTs</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item28')"> <input onclick="event.stopPropagation()" type="checkbox" id="item28" name="checklist"
    value="Lateral Movement"> <label for="item28">Lateral Movement</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item29')"> <input onclick="event.stopPropagation()" type="checkbox" id="item29" name="checklist"
    value="Multiple Targets"> <label for="item29">Multiple Targets</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item30')"> <input onclick="event.stopPropagation()" type="checkbox" id="item30" name="checklist"
    value="Multi Objectives"> <label for="item30">Multi Objectives</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item31')"> <input onclick="event.stopPropagation()" type="checkbox" id="item31" name="checklist"
    value="Pre-Compromise"> <label for="item31">Pre-Compromise</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item32')"> <input onclick="event.stopPropagation()" type="checkbox" id="item32" name="checklist"
    value="Reusable Information"> <label for="item32">Reusable Information</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item33')"> <input onclick="event.stopPropagation()" type="checkbox" id="item33" name="checklist"
    value="System Detection"> <label for="item33">System Detection</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item34')"> <input onclick="event.stopPropagation()" type="checkbox" id="item34" name="checklist"
    value="Activities Filtering"> <label for="item34">Activities Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item35')"> <input onclick="event.stopPropagation()" type="checkbox" id="item35" name="checklist"
    value="Activities Combined Filtering"> <label for="item35">Activities Combined Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item36')"> <input onclick="event.stopPropagation()" type="checkbox" id="item36" name="checklist"
    value="Target Filtering"> <label for="item36">Target Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item37')"> <input onclick="event.stopPropagation()" type="checkbox" id="item37" name="checklist"
    value="Planners"> <label for="item37">Planners</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item38')"> <input onclick="event.stopPropagation()" type="checkbox" id="item38" name="checklist"
    value="Prioritisation"> <label for="item38">Prioritisation</label> </div>
<div class="category">Results</div>
 <div class="checklist-item" onclick="toggleCheckbox('item39')"> <input onclick="event.stopPropagation()" type="checkbox" id="item39" name="checklist"
    value="Manual Report"> <label for="item39">Manual Report</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item40')"> <input onclick="event.stopPropagation()" type="checkbox" id="item40" name="checklist"
    value="Automatic Report"> <label for="item40">Automatic Report</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item41')"> <input onclick="event.stopPropagation()" type="checkbox" id="item41" name="checklist"
    value="Automatic Report Sending"> <label for="item41">Automatic Report Sending</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item42')"> <input onclick="event.stopPropagation()" type="checkbox" id="item42" name="checklist"
    value="Role based Reports"> <label for="item42">Role based Reports</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item43')"> <input onclick="event.stopPropagation()" type="checkbox" id="item43" name="checklist"
    value="Analytics"> <label for="item43">Analytics</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item44')"> <input onclick="event.stopPropagation()" type="checkbox" id="item44" name="checklist"
    value="Results Filtering "> <label for="item44">Results Filtering </label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item45')"> <input onclick="event.stopPropagation()" type="checkbox" id="item45" name="checklist"
    value="Framework-Based Results"> <label for="item45">Framework-Based Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item46')"> <input onclick="event.stopPropagation()" type="checkbox" id="item46" name="checklist"
    value="System Response"> <label for="item46">System Response</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item47')"> <input onclick="event.stopPropagation()" type="checkbox" id="item47" name="checklist"
    value="System Vulnerability Levels"> <label for="item47">System Vulnerability Levels</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item48')"> <input onclick="event.stopPropagation()" type="checkbox" id="item48" name="checklist"
    value="Targets Vulnerability Levels"> <label for="item48">Targets Vulnerability Levels</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item49')"> <input onclick="event.stopPropagation()" type="checkbox" id="item49" name="checklist"
    value="System Overall Vulnerability Level"> <label for="item49">System Overall Vulnerability Level</label></div>
 <div class="checklist-item" onclick="toggleCheckbox('item50')"> <input onclick="event.stopPropagation()" type="checkbox" id="item50" name="checklist"
    value="Targets Overall Vulnerability Level"> <label for="item50">Targets Overall Vulnerability Level</label></div>
 <div class="checklist-item" onclick="toggleCheckbox('item51')"> <input onclick="event.stopPropagation()" type="checkbox" id="item51" name="checklist"
    value="System Risk Levels"> <label for="item51">System Risk Levels</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item52')"> <input onclick="event.stopPropagation()" type="checkbox" id="item52" name="checklist"
    value="Targets Risk Levels"> <label for="item52">Targets Risk Levels</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item53')"> <input onclick="event.stopPropagation()" type="checkbox" id="item53" name="checklist"
    value="System Overall Risk Level"> <label for="item53">System Overall Risk Level</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item54')"> <input onclick="event.stopPropagation()" type="checkbox" id="item54" name="checklist"
    value="Targets Overall Risk Level"> <label for="item54">Targets Overall Risk Level</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item55')"> <input onclick="event.stopPropagation()" type="checkbox" id="item55" name="checklist"
    value="Vulnerabilities Visualization"> <label for="item55">Vulnerabilities Visualization</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item56')"> <input onclick="event.stopPropagation()" type="checkbox" id="item56" name="checklist"
    value="Threat Grouping"> <label for="item56">Threat Grouping</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item57')"> <input onclick="event.stopPropagation()" type="checkbox" id="item57" name="checklist"
    value="Attack Path Visualization"> <label for="item57">Attack Path Visualization</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item58')"> <input onclick="event.stopPropagation()" type="checkbox" id="item58" name="checklist"
    value="Discovered Targets"> <label for="item58">Discovered Targets</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item59')"> <input onclick="event.stopPropagation()" type="checkbox" id="item59" name="checklist"
    value="Compromised Targets"> <label for="item59">Compromised Targets</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item60')"> <input onclick="event.stopPropagation()" type="checkbox" id="item60" name="checklist"
    value="Lateral Movement Visualization"> <label for="item60">Lateral Movement Visualization</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item61')"> <input onclick="event.stopPropagation()" type="checkbox" id="item61" name="checklist"
    value="Benchmark"> <label for="item61">Benchmark</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item62')"> <input onclick="event.stopPropagation()" type="checkbox" id="item62" name="checklist"
    value="Mitigation insights"> <label for="item62">Mitigation insights</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item63')"> <input onclick="event.stopPropagation()" type="checkbox" id="item63" name="checklist"
    value="Comparison"> <label for="item63">Comparison</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item64')"> <input onclick="event.stopPropagation()" type="checkbox" id="item64" name="checklist"
    value="Integration Comparison"> <label for="item64">Integration Comparison</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item65')"> <input onclick="event.stopPropagation()" type="checkbox" id="item65" name="checklist"
    value="Live Results"> <label for="item65">Live Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item66')"> <input onclick="event.stopPropagation()" type="checkbox" id="item66" name="checklist"
    value="Outputs"> <label for="item66">Outputs</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item67')"> <input onclick="event.stopPropagation()" type="checkbox" id="item67" name="checklist"
    value="Logs "> <label for="item67">Logs </label> </div>
<div class="category">Information and Filtering</div>
 <div class="checklist-item" onclick="toggleCheckbox('item68')"> <input onclick="event.stopPropagation()" type="checkbox" id="item68" name="checklist"
    value="Name"> <label for="item68">Name</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item69')"> <input onclick="event.stopPropagation()" type="checkbox" id="item69" name="checklist"
    value="Name Filtering"> <label for="item69">Name Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item70')"> <input onclick="event.stopPropagation()" type="checkbox" id="item70" name="checklist"
    value="Name Results"> <label for="item70">Name Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item71')"> <input onclick="event.stopPropagation()" type="checkbox" id="item71" name="checklist"
    value="Source Code"> <label for="item71">Source Code</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item72')"> <input onclick="event.stopPropagation()" type="checkbox" id="item72" name="checklist"
    value="Explanation"> <label for="item72">Explanation</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item73')"> <input onclick="event.stopPropagation()" type="checkbox" id="item73" name="checklist"
    value="Objective"> <label for="item73">Objective</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item74')"> <input onclick="event.stopPropagation()" type="checkbox" id="item74" name="checklist"
    value="History"> <label for="item74">History</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item75')"> <input onclick="event.stopPropagation()" type="checkbox" id="item75" name="checklist"
    value="Number of Runs"> <label for="item75">Number of Runs</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item76')"> <input onclick="event.stopPropagation()" type="checkbox" id="item76" name="checklist"
    value="Number of Runs Filtering"> <label for="item76">Number of Runs Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item77')"> <input onclick="event.stopPropagation()" type="checkbox" id="item77" name="checklist"
    value="Number of Run Results"> <label for="item77">Number of Run Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item78')"> <input onclick="event.stopPropagation()" type="checkbox" id="item78" name="checklist"
    value="Framework/CTI Reference"> <label for="item78">Framework/CTI Reference</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item79')"> <input onclick="event.stopPropagation()" type="checkbox" id="item79" name="checklist"
    value="Framework/CTI Filtering"> <label for="item79">Framework/CTI Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item80')"> <input onclick="event.stopPropagation()" type="checkbox" id="item80" name="checklist"
    value="Framework/CTI Results"> <label for="item80">Framework/CTI Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item81')"> <input onclick="event.stopPropagation()" type="checkbox" id="item81" name="checklist"
    value="Target OS"> <label for="item81">Target OS</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item82')"> <input onclick="event.stopPropagation()" type="checkbox" id="item82" name="checklist"
    value="Target OS Filtering"> <label for="item82">Target OS Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item83')"> <input onclick="event.stopPropagation()" type="checkbox" id="item83" name="checklist"
    value="Target OS Results"> <label for="item83">Target OS Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item84')"> <input onclick="event.stopPropagation()" type="checkbox" id="item84" name="checklist"
    value="Creation Date"> <label for="item84">Creation Date</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item85')"> <input onclick="event.stopPropagation()" type="checkbox" id="item85" name="checklist"
    value="Creation Date Filtering"> <label for="item85">Creation Date Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item86')"> <input onclick="event.stopPropagation()" type="checkbox" id="item86" name="checklist"
    value="Creation Date Results"> <label for="item86">Creation Date Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item87')"> <input onclick="event.stopPropagation()" type="checkbox" id="item87" name="checklist"
    value="Creator"> <label for="item87">Creator</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item88')"> <input onclick="event.stopPropagation()" type="checkbox" id="item88" name="checklist"
    value="Creator Filtering"> <label for="item88">Creator Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item89')"> <input onclick="event.stopPropagation()" type="checkbox" id="item89" name="checklist"
    value="Creator Results"> <label for="item89">Creator Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item90')"> <input onclick="event.stopPropagation()" type="checkbox" id="item90" name="checklist"
    value="Update"> <label for="item90">Update</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item91')"> <input onclick="event.stopPropagation()" type="checkbox" id="item91" name="checklist"
    value="Update Filtering"> <label for="item91">Update Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item92')"> <input onclick="event.stopPropagation()" type="checkbox" id="item92" name="checklist"
    value="Update Results"> <label for="item92">Update Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item93')"> <input onclick="event.stopPropagation()" type="checkbox" id="item93" name="checklist"
    value="Requirements"> <label for="item93">Requirements</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item94')"> <input onclick="event.stopPropagation()" type="checkbox" id="item94" name="checklist"
    value="Requirements Filtering"> <label for="item94">Requirements Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item95')"> <input onclick="event.stopPropagation()" type="checkbox" id="item95" name="checklist"
    value="Requirements Results "> <label for="item95">Requirements Results </label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item96')"> <input onclick="event.stopPropagation()" type="checkbox" id="item96" name="checklist"
    value="APT Correlation"> <label for="item96">APT Correlation</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item97')"> <input onclick="event.stopPropagation()" type="checkbox" id="item97" name="checklist"
    value="APT Correlation Filtering"> <label for="item97">APT Correlation Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item98')"> <input onclick="event.stopPropagation()" type="checkbox" id="item98" name="checklist"
    value="APT Correlation Results "> <label for="item98">APT Correlation Results </label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item99')"> <input onclick="event.stopPropagation()" type="checkbox" id="item99" name="checklist"
    value="Sector Correlation"> <label for="item99">Sector Correlation</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item100')"> <input onclick="event.stopPropagation()" type="checkbox" id="item100" name="checklist"
    value="Sector Correlation Filtering"> <label for="item100">Sector Correlation Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item101')"> <input onclick="event.stopPropagation()" type="checkbox" id="item101" name="checklist"
    value="Sector Correlation Results"> <label for="item101">Sector Correlation Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item102')"> <input onclick="event.stopPropagation()" type="checkbox" id="item102" name="checklist"
    value="Nation/Region Correlation"> <label for="item102">Nation/Region Correlation</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item103')"> <input onclick="event.stopPropagation()" type="checkbox" id="item103" name="checklist"
    value="Nation/Region Correlation Filtering"> <label for="item103">Nation/Region Correlation Filtering</label></div>
 <div class="checklist-item" onclick="toggleCheckbox('item104')"> <input onclick="event.stopPropagation()" type="checkbox" id="item104" name="checklist"
    value="Nation/Region Attacker Correlation"> <label for="item104">Nation/Region Attacker Correlation</label></div>
 <div class="checklist-item" onclick="toggleCheckbox('item105')"> <input onclick="event.stopPropagation()" type="checkbox" id="item105" name="checklist"
    value="Nation/Region Attacker Filtering"> <label for="item105">Nation/Region Attacker Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item106')"> <input onclick="event.stopPropagation()" type="checkbox" id="item106" name="checklist"
    value="Tag"> <label for="item106">Tag</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item107')"> <input onclick="event.stopPropagation()" type="checkbox" id="item107" name="checklist"
    value="Tag Filtering"> <label for="item107">Tag Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item108')"> <input onclick="event.stopPropagation()" type="checkbox" id="item108" name="checklist"
    value="Tag Results"> <label for="item108">Tag Results</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item109')"> <input onclick="event.stopPropagation()" type="checkbox" id="item109" name="checklist"
    value="System's Vulnerability"> <label for="item109">System's Vulnerability</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item110')"> <input onclick="event.stopPropagation()" type="checkbox" id="item110" name="checklist"
    value="System's Vulnerability Filtering"> <label for="item110">System's Vulnerability Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item111')"> <input onclick="event.stopPropagation()" type="checkbox" id="item111" name="checklist"
    value="Targets' Vulnerability"> <label for="item111">Targets' Vulnerability</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item112')"> <input onclick="event.stopPropagation()" type="checkbox" id="item112" name="checklist"
    value="Target's Vulnerability  Filtering"> <label for="item112">Target's Vulnerability Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item113')"> <input onclick="event.stopPropagation()" type="checkbox" id="item113" name="checklist"
    value="System's Risk "> <label for="item113">System's Risk </label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item114')"> <input onclick="event.stopPropagation()" type="checkbox" id="item114" name="checklist"
    value="System's Risk Filtering"> <label for="item114">System's Risk Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item115')"> <input onclick="event.stopPropagation()" type="checkbox" id="item115" name="checklist"
    value="Targets' Risk"> <label for="item115">Targets' Risk</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item116')"> <input onclick="event.stopPropagation()" type="checkbox" id="item116" name="checklist"
    value="Targets' Risk Filtering"> <label for="item116">Targets' Risk Filtering</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item117')"> <input onclick="event.stopPropagation()" type="checkbox" id="item117" name="checklist"
    value="Rollback"> <label for="item117">Rollback</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item118')"> <input onclick="event.stopPropagation()" type="checkbox" id="item118" name="checklist"
    value="Rollback Filtering"> <label for="item118">Rollback Filtering</label> </div>
<div class="category">Simulation</div>
 <div class="checklist-item" onclick="toggleCheckbox('item119')"> <input onclick="event.stopPropagation()" type="checkbox" id="item119" name="checklist"
    value="Cleanup "> <label for="item119">Cleanup </label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item120')"> <input onclick="event.stopPropagation()" type="checkbox" id="item120" name="checklist"
    value="Simulation Live Info"> <label for="item120">Simulation Live Info</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item121')"> <input onclick="event.stopPropagation()" type="checkbox" id="item121" name="checklist"
    value="Pause"> <label for="item121">Pause</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item122')"> <input onclick="event.stopPropagation()" type="checkbox" id="item122" name="checklist"
    value="Override"> <label for="item122">Override</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item123')"> <input onclick="event.stopPropagation()" type="checkbox" id="item123" name="checklist"
    value="Interrupt "> <label for="item123">Interrupt </label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item124')"> <input onclick="event.stopPropagation()" type="checkbox" id="item124" name="checklist"
    value="Schedule "> <label for="item124">Schedule </label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item125')"> <input onclick="event.stopPropagation()" type="checkbox" id="item125" name="checklist"
    value="Import Simulation"> <label for="item125">Import Simulation</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item124')"> <input onclick="event.stopPropagation()" type="checkbox" id="item124" name="checklist"
    value="Schedule"> <label for="item124">Schedule </label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item125')"> <input onclick="event.stopPropagation()" type="checkbox" id="item125" name="checklist"
    value="Import Simulation"> <label for="item125">Import Simulation</label> </div>
<div class="category">Environment</div>
 <div class="checklist-item" onclick="toggleCheckbox('item126')"> <input onclick="event.stopPropagation()" type="checkbox" id="item126" name="checklist"
    value="Integrations"> <label for="item126">Integrations</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item127')"> <input onclick="event.stopPropagation()" type="checkbox" id="item127" name="checklist"
    value="Integrable"> <label for="item127">Integrable</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item128')"> <input onclick="event.stopPropagation()" type="checkbox" id="item128" name="checklist"
    value="RBAC"> <label for="item128">RBAC</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item129')"> <input onclick="event.stopPropagation()" type="checkbox" id="item129" name="checklist"
    value="Production Enviroment"> <label for="item129">Production Enviroment</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item130')"> <input onclick="event.stopPropagation()" type="checkbox" id="item130" name="checklist"
    value="Sector Specific"> <label for="item130">Sector Specific</label> </div>
 <div class="category">Other</div>
 <div class="checklist-item" onclick="toggleCheckbox('item131')"> <input onclick="event.stopPropagation()" type="checkbox" id="item131" name="checklist"
    value="Plugins"> <label for="item131">Plugins</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item132')"> <input onclick="event.stopPropagation()" type="checkbox" id="item132" name="checklist"
    value="CTI Updates"> <label for="item132">CTI Updates</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item133')"> <input onclick="event.stopPropagation()" type="checkbox" id="item133" name="checklist"
    value="Documentation"> <label for="item133">Documentation</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item134')"> <input onclick="event.stopPropagation()" type="checkbox" id="item134" name="checklist"
    value="Interactive Tutorial"> <label for="item134">Interactive Tutorial</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item135')"> <input onclick="event.stopPropagation()" type="checkbox" id="item135" name="checklist"
    value="General Vulnerability Score "> <label for="item135">General Vulnerability Score </label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item136')"> <input onclick="event.stopPropagation()" type="checkbox" id="item136" name="checklist"
    value="General Risk Score"> <label for="item136">General Risk Score</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item137')"> <input onclick="event.stopPropagation()" type="checkbox" id="item137" name="checklist"
    value="General Security Score"> <label for="item137">General Security Score</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item138')"> <input onclick="event.stopPropagation()" type="checkbox" id="item138" name="checklist"
    value="General Security Trend"> <label for="item138">General Security Trend</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item139')"> <input onclick="event.stopPropagation()" type="checkbox" id="item139" name="checklist"
    value="Impact level"> <label for="item139">Impact level</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item140')"> <input onclick="event.stopPropagation()" type="checkbox" id="item140" name="checklist"
    value="Targets Relevance"> <label for="item140">Targets Relevance</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item141')"> <input onclick="event.stopPropagation()" type="checkbox" id="item141" name="checklist"
    value="Tag Creatio"> <label for="item141">Tag Creation</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item142')"> <input onclick="event.stopPropagation()" type="checkbox" id="item142" name="checklist"
    value="Target Customization"> <label for="item142">Target Customization</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item143')"> <input onclick="event.stopPropagation()" type="checkbox" id="item143" name="checklist"
    value="Manual Targets Grouping"> <label for="item143">Manual Targets Grouping</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item144')"> <input onclick="event.stopPropagation()" type="checkbox" id="item144" name="checklist"
    value="Automatic Targets Grouping"> <label for="item144">Automatic Targets Grouping</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item145')"> <input onclick="event.stopPropagation()" type="checkbox" id="item145" name="checklist"
    value="Compliance"> <label for="item145">Compliance</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item146')"> <input onclick="event.stopPropagation()" type="checkbox" id="item146" name="checklist"
    value="Standalone"> <label for="item146">Standalone</label> </div>
 <div class="checklist-item" onclick="toggleCheckbox('item147')"> <input onclick="event.stopPropagation()" type="checkbox" id="item147" name="checklist"
    value="Automatic Mitigation"> <label for="item147">Automatic Mitigation</label> </div>
</form>
`;