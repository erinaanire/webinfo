/**
 * Getting the parent div from index.html
 */

var parentContainer = document.getElementById("heading");

/**
 * Create a Header
 */
 const headerDiv = document.createElement("div");
 const headerTag = document.createElement("h1");
 const headerContent = document.createTextNode("Travel App");
 headerTag.appendChild(headerContent);
 headerDiv.appendChild(headerTag);
 headerTag.setAttribute("class","heading-css");
 parentContainer.appendChild(headerDiv);


/**
 * Getting the form div from index.html
 */
var formDiv = document.getElementById("form-div");
parentContainer.appendChild(formDiv);
 


// submitButton.onclick = function(e){
  // console.log("e",e);
   //e.target.style.display = 'none'
  //validation();
// }
 //submitButton.setAttribute("onclick","clickFunction()");
 
 function validateForm() {
  var error = 0;
  
  var a = document.forms["client_details"]["email"].value;
  document.getElementById('email_error').innerHTML = '';
  if (a == null || a == "") {
      // alert("Name must be filled out");
      error++;
      document.getElementById('email_error').innerHTML = 'Email must be filled out';
  }

  var b = document.forms["client_details"]["ph_no"].value;
  document.getElementById('ph_no_error').innerHTML = '';
  if (b == null || b == "") {
      // alert("Email must be filled out");
      error++;
      document.getElementById('ph_no_error').innerHTML = 'Phone No must be filled out';
  }

  var c = document.forms["client_details"]["query"].value;
  document.getElementById('query_error').innerHTML = '';
  if (c == null || c == "") {
      // alert("Username must be filled out");
      error++;
      document.getElementById('query_error').innerHTML = 'Username must be filled out';
  }

  var d = document.forms["client_details"]["ph_no"].value;
  document.getElementById('ph_no_error').innerHTML = '';
  if(d < 10 || d > 10){
    error++;
    document.getElementById('ph_no_error').innerHTML = 'Enter 10 digit phone number';
  }

  var e = document.forms["client_details"]["email"].value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  document.getElementById('email_error').innerHTML = '';
  if(!e.match(validRegex)){
    error++;
    document.getElementById('email_error').innerHTML = 'InValid email address!';
  }

if(error>0) {
  return false;
}
return true;
}

 //function clickFunction(e){

  //console.log("hi");
  
  //empty pa naat
  //email should be string
  //email should not be number
  //phonenumbershould be 10 digits
  //phono should be number
  //validation();
 //}



/**
 * Creating cards
 */

var divForLoop = document.createElement("div");
//let tourno = 0;
for(var item of travelData){
    //tourno++;
    //console.log("hi",item);
    var divForIndividualCard = document.createElement("div");
    divForIndividualCard.setAttribute("class","individual-css");
    divForIndividualCard.setAttribute("id","individual-card");
    var titleCon = document.createElement("h3");
    titleCon.setAttribute("class","title-text");
    var titleConText = document.createTextNode("Destination:");
    titleCon.appendChild(titleConText);
    var titleHeading = document.createElement("h4");
    titleHeading.setAttribute("class","title-textSmall");
    var titleHeadingText = document.createTextNode(item.title);
    titleHeading.appendChild(titleHeadingText);
    var costMainHeading = document.createElement("h3");
    costMainHeading.setAttribute("class","title-text");
    var costMainHeadingContent = document.createTextNode("Cost Per Person:");
    costMainHeading.appendChild(costMainHeadingContent);
    var costTitle = document.createElement("h4");
    costTitle.setAttribute("class","title-textSmall");
    var costContent = document.createTextNode(item.cost_perperson);
    costTitle.appendChild(costContent);                                                         
    var imageEle = document.createElement("img");
    imageEle.setAttribute("class","img");
    imageEle.setAttribute("id","image-id");
    imageEle.setAttribute("src",item.image);
    
    /**
     * Accessing the Days data
     */
    //console.log("QW",travelData);
    //let tourno = 0;
    for(var day of item.days){
      //  tourno++;
        //console.log("day",day);
        var mainTitle = document.createElement("h2");
        mainTitle.setAttribute("class","title-text default");
        var mainTitleContent = document.createTextNode("Click For More Details:");
        mainTitle.appendChild(mainTitleContent);
        mainTitle.setAttribute("id","main-title");
        //var paraTag = document.createElement("p");
       // let paraIdName = 'paraId'+tourno;
        //paraTag.setAttribute("class",paraIdName);
        var divForDaysContent = document.createElement("div");
        //let divIdName = 'divId'+tourno;
        divForDaysContent.setAttribute("class","title-textSmall");
        var noOfDaysTitle = document.createElement("h3");
        var noOfDaysTitleContent = document.createTextNode("Number of Days:");
        noOfDaysTitle.appendChild(noOfDaysTitleContent);
        divForDaysContent.appendChild(noOfDaysTitle);
        var noOfDaysContentTag = document.createElement("p");
        var noOfDaysContent = document.createTextNode(day.noOfDays);
        noOfDaysContentTag.appendChild(noOfDaysContent);
        divForDaysContent.appendChild(noOfDaysContentTag);
        var descTitle = document.createElement("h3");
        //descTitle.setAttribute("class","default");
        var descTitleContent = document.createTextNode("Description:");
        descTitle.appendChild(descTitleContent);
        divForDaysContent.appendChild(descTitle);
        var descContentTag = document.createElement("h4");
        var descContent = document.createTextNode(day.Description);
        descContentTag.appendChild(descContent);
        divForDaysContent.appendChild(descContentTag);
        divForDaysContent.style.display = 'none';
        //let tempVar;
        mainTitle.onclick = function(e){
            e.target.innerHTML = 'Back';
            let imageWidth = e.target.parentElement;
            //console.log("tempVar",tempVar, imageWidth);
            imageWidth.style.width = 'unset';
            //console.log("called it",e);
            //console.log("val",e.target.nextSibling);
            //console.log("qa",divForDaysContent.style.display);
            if(e.target.nextSibling.style.display == 'none'){
               e.target.nextSibling.style.display = 'block';
            }else{
              e.target.nextSibling.style.display = 'none';
              e.target.innerHTML = 'Click For More Details:';
              imageWidth.style.width = '650px';
            }
             
        }
    }
        

    divForIndividualCard.appendChild(titleCon);
    divForIndividualCard.appendChild(titleHeading);
    divForIndividualCard.appendChild(costMainHeading);
    divForIndividualCard.appendChild(costTitle);
    divForIndividualCard.appendChild(imageEle);
    divForIndividualCard.appendChild(mainTitle);
    divForIndividualCard.appendChild(divForDaysContent);
    //divForIndividualCard.appendChild(paraTag);
    //divForIndividualCard.appendChild(noOfDaysTitle);
    //divForIndividualCard.appendChild(noOfDaysContent);
    //divForIndividualCard.appendChild(descTitle);
    //divForIndividualCard.appendChild(descContentTag);
    divForLoop.appendChild( divForIndividualCard);
    divForLoop.setAttribute("class","row");
}

parentContainer.appendChild(divForLoop);




/**
 * Create Footer
 */
 const footerDiv = document.createElement("div");
 const footerTag = document.createElement("p");
 const footerNode = document.createTextNode("Made with love in JS and flex");
 footerTag.appendChild(footerNode);
 footerDiv.appendChild(footerTag);
 footerTag.setAttribute("class","footer-css");
 parentContainer.appendChild(footerDiv);

//function toggleOverview(divIdName){
  //  var divId = document.getElementById(divIdName);
   // console.log("qw",divId);
  //  if(divId.style.display == 'block'){
  //      divId.style.display = 'none'
  //  }else{
  //      divId.style.display = 'block'
   // }

 //}