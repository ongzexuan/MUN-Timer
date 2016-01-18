//t_timer functions
//var t_time = ['30','45','60','90','120','150','300','600','900','1200','1800','2700','3600']
var t_time_min = ['0','1','2','3','4','5','6','7','8','9','10','15','20','25','30','35','40','45','50','55','60'];
var t_time_sec = ['0','5','10','15','20','25','30','35','40','45','50','55'];
var t_seconds = 0;
var t_mins = 0;
var t_timer;
var t_istiming = false;
var t_firstindex = 0; //keeps track of the next div
var t_divindex = 0; //to create new div ids
var t_selected = null;

//function for generating time options
function t_generateTimeOptions() {
  
  for (var i = 0; i < t_time_sec.length; i++) {
    t_seconds = t_time_sec[i];

    var t_timerpickersec = document.getElementById("t_timepickersec");
    var option = document.createElement("option");
    if (t_seconds<10) {//printing the last zero
      option.text = "0"+t_seconds;
    } else {
      option.text = t_seconds;
    }
    t_timepickersec.add(option);
  }

  for (var i = 0; i < t_time_min.length; i++) {
    t_mins = t_time_min[i];

    var t_timerpickermin = document.getElementById("t_timepickermin");
    var option = document.createElement("option");
    if (t_mins<10) {//printing the last zero
      option.text = "0"+t_mins;
    } else {
      option.text = t_mins;
    }
    t_timepickermin.add(option);
  }
}

//recurring t_timer update function
function t_updateTime() {
  var display = document.getElementById("t_time");
  t_seconds--;
  if (t_seconds==-1) {
    t_seconds = 59;
    t_mins--;   
  }
  if (t_mins<0) {
    display.innerHTML = "Time is up!";
  } else {
    if (t_mins<10&&t_seconds<10) {
      display.innerHTML = "0"+t_mins+":0"+t_seconds;  
    } else if (t_mins<10) {
      display.innerHTML = "0"+t_mins+":"+t_seconds;  
    } else if (t_seconds<10) {
      display.innerHTML = t_mins+":0"+t_seconds;  
    } else {
      display.innerHTML = t_mins+":"+t_seconds;  
    }
    t_timer = setTimeout("t_updateTime()",1000);
  }
  
}

//function to start t_timer
function t_startTimer() {
  
  
  
  var list = document.getElementById("list_gsl");
  //var gsl0 = document.getElementById("gsl0");

  //find first filled div
  /*var thegsl = null;
  for (var i = 0; i < 10; i++) {
    var x = document.getElementById("gsl"+i);
    if (x.innerHTML!=null&&x.innerHTML!="") {
      thegsl = x;
      break;
    }
  }*/
  var thegsl = list.children[0];
  //alert(thegsl.innerHTML);

  //cleanQueue();

  if (thegsl == null) {
    alert("The queue is empty!");
  } else {
    //reset
    clearTimeout(t_timer);

    //get time from dropdown
    var index_sec = document.getElementById("t_timepickersec").selectedIndex;
    var index_min = document.getElementById("t_timepickermin").selectedIndex;
    //var currtime = t_time[index];
    t_seconds = t_time_sec[index_sec];
    t_mins = t_time_min[index_min];

    //display time
    var display = document.getElementById("t_time");
    if (t_mins<10&&t_seconds<10) {
      display.innerHTML = "0"+t_mins+":0"+t_seconds;  
    } else if (t_mins<10) {
      display.innerHTML = "0"+t_mins+":"+t_seconds;  
    } else if (t_seconds<10) {
      display.innerHTML = t_mins+":0"+t_seconds;  
    } else {
      display.innerHTML = t_mins+":"+t_seconds;  
    }

    console.log(thegsl.innerHTML);
    t_information.innerHTML = "Delegate of "+thegsl.innerHTML;
    thegsl.parentNode.removeChild(thegsl);

    /*for (var i = 0; i < 9; i++) {
      var curr = document.getElementById("gsl"+i);
      var next = document.getElementById("gsl"+(i+1));
      if (next.innerHTML!=null&&next.innerHTML!="") {
        curr.innerHTML = next.innerHTML;
      } else {
        curr.innerHTML = null;
        break;
      }
    }*/
    //document.getElementById("gsl9").innerHTML=null;
    
    //right.removeChild(right.children[0]);

    //start t_timer
    t_istiming = true;
    t_stopbutton.innerHTML="Pause"
    t_timer = setTimeout("t_updateTime()",1000);
  }
  
  
  
}

function t_select(event) {
  if (t_selected!=null) {
    t_selected.className="list-group-item";
  }
  if (t_selected==event.target) {
    t_selected.className="list-group-item";
    t_selected = null;
  } else {
    event.target.className="list-group-item active";
    t_selected = event.target;
  }
  

  return false;

  /*if (t_selected!=null) {
    t_selected.style.backgroundColor = null;
  }
  if (t_selected==event.target) {
    t_selected.style.backgroundColor = null;
    t_selected = null;
  } else {
    t_selected = event.target;
    t_selected.style.backgroundColor = "cyan";
  }*/
  
}

function cleanQueue() {
  
  
  for (var i = 0; i < 10; i++) {
    var curr = document.getElementById("gsl"+i); 
    if (curr.innerHTML==null||curr.innerHTML=="") {
      for (var j = i+1; j < 10; j++) {
        var next = document.getElementById("gsl"+j);
        if (next.innerHTML!=null&&next.innerHTML!="") {
          curr.innerHTML = next.innerHTML;
          next.innerHTML = null;
          break;
        }
      }
    }
  }
}

//function to stop t_timer
function t_stopTimer() {
  
  if (t_mins>=0 && !t_istiming) {
    var t_stopbutton = document.getElementById("t_stopbutton");
    t_stopbutton.innerHTML="Pause"
    t_timer = setTimeout("t_updateTime()",1000);
    t_istiming = true;
  } else if (t_istiming) {
    clearTimeout(t_timer);
  //var t_startbutton = document.getElementById("t_startbutton");
    var t_stopbutton = document.getElementById("t_stopbutton");
    t_stopbutton.innerHTML="Resume"
    t_istiming = false;
  }
  
}

//COUNTRY FLOW

//updating list of countries in dropdown
function updateCountry() {

  //clear box
  var t_picker = document.getElementById("t_countrypicker");
  var c_picker = document.getElementById("c_countrypicker");
  for (var i = t_picker.options.length-1; i>=0; i--) {
    t_picker.remove(i);
    c_picker.remove(i);
  }

  //populate
  for (var i = 0; i < countrylist.length; i++) {
      var checkbox = document.getElementById("cbcountry"+i);
      if (checkbox!=null) {
          if (checkbox.checked==true) {
              var option1 = document.createElement("option");
              option1.text = checkbox.value;
              var option2 = document.createElement("option");
              option2.text = checkbox.value;
              t_picker.add(option1);
              c_picker.add(option2);
          }
      }
  }
  updateMajorities();

  
}

function updateMajorities() {

  
  var size = document.getElementById("t_countrypicker").length;
  console.log("t_countrypicker.size = "+size);
  var halfsize = Math.ceil(size/2);
  if (halfsize == size/2) {
    halfsize+=1;
  }
  document.getElementById("labels").innerHTML = "Stakeholders: "+size;
  document.getElementById("labelone").innerHTML = "Simple Majority: "+halfsize;
  document.getElementById("labeltwo").innerHTML = "Two-third Majority: "+Math.ceil(2*size/3);
  document.getElementById("labelthree").innerHTML = "One-fifth: "+Math.ceil(size/5);

}

//add a country to speaker's list
function t_addCountry() {
  var list = document.getElementById("list_gsl");
  var picker = document.getElementById("t_countrypicker");
  var ele = document.createElement("a");
  ele.setAttribute("id","caucus"+t_divindex++);
  ele.setAttribute("href","#");
  ele.setAttribute("class","list-group-item");
  ele.setAttribute("onClick","t_select(event)");
  ele.setAttribute("draggable","true");
  ele.setAttribute("ondrop","t_drop(event)");
  ele.setAttribute("ondragover","t_allowDrop(event)");
  ele.setAttribute("ondragstart","t_drag(event)");
  ele.innerHTML=picker.options[picker.selectedIndex].value;
  list.appendChild(ele);

  /*var found = false;
  for (var i = 0; i < 10; i++) {
    var div = document.getElementById("gsl"+i);
    if (div.innerHTML==null||div.innerHTML=="") {
      div.innerHTML = picker.options[picker.selectedIndex].value;
      found = true;
      break;
    }
  }
  if (!found) {
    alert("The Software is only able to accomodate 10 delegates on the General Speaker's List.");
  }*/

}

//yield to another country in the picker
function t_yieldCountry() {

  var t_information = document.getElementById("t_information");
  var picker = document.getElementById("t_countrypicker");
  t_information.innerHTML = "Delegate of "+picker.options[picker.selectedIndex].value;

}

function t_removeCountry() {

  if (t_selected!=null) {
    /*t_selected.innerHTML = null;    
    t_selected.style.backgroundColor = null;
    t_selected = null;
    cleanQueue();*/
    t_selected.parentNode.removeChild(t_selected);
    t_selected = null;
  }
}

//dragging
function t_allowDrop(event) {
  event.preventDefault();
}

function t_drag(event) {
  event.dataTransfer.setData("thedata", event.target.id);
}

function t_drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("thedata");
  var tmp = event.target.innerHTML;
  var othertarget = document.getElementById(data);
  var list = document.getElementById("list_gsl");
  //CHANGES
  //event.target.innerHTML = othertarget.innerHTML;
  //othertarget.innerHTML = tmp;
  var stringto = othertarget.innerHTML;

  var children = list.children;
  var indexto = -1;
  var indexfrom = -1;
  for (var i = 0; i < children.length; i++) {
    if (children[i] == event.target) {
      indexto = i;
      console.log("indexto = "+i);
    } else if (children[i] == othertarget){
      indexfrom = i;
      console.log("indexfrom = "+i);
    }
  }

  //if for some reason only one index available
  if (indexto*indexfrom < 0) {
    return null;
  }

  //if moving up the list
  if (indexto < indexfrom) {
    for (var i = indexfrom; i > indexto; i--) {
      children[i].innerHTML = children[i-1].innerHTML;
    }
    children[indexto].innerHTML = stringto;
  } else {//moving down the list
    for (var i = indexfrom; i < indexto; i++) {
      children[i].innerHTML = children[i+1].innerHTML;
    }
    children[indexto].innerHTML = stringto;
  }


}


/*document.ondrop=function(event) {
  alert("something");
  //event.preventDefault();
  event.target.innerHTML = null;
}*/