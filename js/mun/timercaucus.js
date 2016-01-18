//c_timer functions
//var c_time = ['30','45','60','90','120','150','300','600','900','1200','1800','2700','3600']
var c_time_min = ['0','1','2','3','4','5','6','7','8','9','10','15','20','25','30','35','40','45','50','55','60'];
var c_time_sec = ['0','5','10','15','20','25','30','35','40','45','50','55'];
var c_seconds_inv = 0;
var c_seconds_cau = 0;
var c_mins_inv = 0;
var c_mins_cau = 0;
var c_timer_inv;
var c_timer_cau;
var c_istiming_inv = false;
var c_istiming_cau = false;
var c_firstindex = 0; //keeps track of the next div
var c_divindex = 0; //to create new div ids
var c_selected = null;

//function for generating time options
function c_generateTimeOptions() {
  
  for (var i = 0; i < c_time_sec.length; i++) {
    var c_seconds_inv = c_time_sec[i];

    var c_timerpickersec_inv = document.getElementById("c_timepickersec_inv");
    var c_timerpickersec_cau = document.getElementById("c_timepickersec_cau");
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    if (c_seconds_inv<10) {//printing the last zero
      option1.text = "0"+c_seconds_inv;
      option2.text = "0"+c_seconds_inv;
    } else {
      option1.text = c_seconds_inv;
      option2.text = c_seconds_inv;
    }
    c_timepickersec_inv.add(option1);
    c_timepickersec_cau.add(option2);
  }

  for (var i = 0; i < c_time_min.length; i++) {
    var c_min_inv = c_time_min[i];

    var c_timerpickermin_inv = document.getElementById("c_timepickermin_inv");
    var c_timerpickermin_cau = document.getElementById("c_timepickermin_cau");
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    if (c_min_inv<10) {//printing the last zero
      option1.text = "0"+c_min_inv;
      option2.text = "0"+c_min_inv;
    } else {
      option1.text = c_min_inv;
      option2.text = c_min_inv;
    }
    c_timepickermin_inv.add(option1);
    c_timepickermin_cau.add(option2);
  }
}

//recurring c_timer update function
function c_updateTime_inv() {
  var display = document.getElementById("c_time_inv");
	c_seconds_inv--;
	if (c_seconds_inv==-1) {
		c_seconds_inv = 59;
		c_mins_inv--;		
	}
	if (c_mins_inv<0) {
		display.innerHTML = "Time!";
	} else {
    if (c_mins_inv<10&&c_seconds_inv<10) {
      display.innerHTML = "0"+c_mins_inv+":0"+c_seconds_inv;  
    } else if (c_mins_inv<10) {
      display.innerHTML = "0"+c_mins_inv+":"+c_seconds_inv;  
    } else if (c_seconds_inv<10) {
      display.innerHTML = c_mins_inv+":0"+c_seconds_inv;  
    } else {
      display.innerHTML = c_mins_inv+":"+c_seconds_inv;  
    }
    c_timer_inv = setTimeout("c_updateTime_inv()",1000);
	}
	
}

//recurring c_timer update function
function c_updateTime_cau() {
  var display = document.getElementById("c_time_cau");
  c_seconds_cau--;
  if (c_seconds_cau==-1) {
    c_seconds_cau = 59;
    c_mins_cau--;   
  }
  if (c_mins_cau<0) {
    display.innerHTML = "Time!";
    c_seconds_cau = 0;
    c_mins_cau = 0;
  } else {
    if (c_mins_cau<10&&c_seconds_cau<10) {
      display.innerHTML = "0"+c_mins_cau+":0"+c_seconds_cau;  
    } else if (c_mins_cau<10) {
      display.innerHTML = "0"+c_mins_cau+":"+c_seconds_cau;  
    } else if (c_seconds_cau<10) {
      display.innerHTML = c_mins_cau+":0"+c_seconds_cau;  
    } else {
      display.innerHTML = c_mins_cau+":"+c_seconds_cau;  
    }
    c_timer_cau = setTimeout("c_updateTime_cau()",1000);
  }
  
}

//function to start c_timer
function c_startTimer_inv() {
  
  var list = document.getElementById("list_caucus");
  var thegsl = list.children[0];

  if (thegsl == null) {
    alert("The queue is empty!");
  } else {
    //reset
    clearTimeout(c_timer_inv);

    //get time from dropdown
    var index_sec = document.getElementById("c_timepickersec_inv").selectedIndex;
    var index_min = document.getElementById("c_timepickermin_inv").selectedIndex;
    //var currtime = c_time[index];
    var c_seconds = c_time_sec[index_sec];
    var c_mins = c_time_min[index_min];

    c_seconds_inv = c_seconds;
    c_mins_inv = c_mins;

    //display time
    var display = document.getElementById("c_time_inv");
    if (c_mins<10&&c_seconds<10) {
      display.innerHTML = "0"+c_mins+":0"+c_seconds;  
    } else if (c_mins<10) {
      display.innerHTML = "0"+c_mins+":"+c_seconds;  
    } else if (c_seconds<10) {
      display.innerHTML = c_mins+":0"+c_seconds;  
    } else {
      display.innerHTML = c_mins+":"+c_seconds;  
    }

    console.log(thegsl.innerHTML);
    c_information_inv.innerHTML = "Delegate of "+thegsl.innerHTML;
    thegsl.parentNode.removeChild(thegsl);

    c_istiming_inv = true;
    c_stopbutton_inv.innerHTML="Pause"
    c_timer_inv = setTimeout("c_updateTime_inv()",1000);
  }
  
}

//function to start c_timer
function c_startTimer_cau() {
  


  
    //reset
    clearTimeout(c_timer_cau);

    //get time from dropdown
    var index_sec = document.getElementById("c_timepickersec_cau").selectedIndex;
    var index_min = document.getElementById("c_timepickermin_cau").selectedIndex;
    //var currtime = c_time[index];
    var c_seconds = c_time_sec[index_sec];
    var c_mins = c_time_min[index_min];

    c_seconds_cau = c_seconds;
    c_mins_cau = c_mins;

    //display time
    var display = document.getElementById("c_time_cau");
    if (c_mins<10&&c_seconds<10) {
      display.innerHTML = "0"+c_mins+":0"+c_seconds;  
    } else if (c_mins<10) {
      display.innerHTML = "0"+c_mins+":"+c_seconds;  
    } else if (c_seconds<10) {
      display.innerHTML = c_mins+":0"+c_seconds;  
    } else {
      display.innerHTML = c_mins+":"+c_seconds;  
    }

    c_istiming_cau = true;
    c_stopbutton_cau.innerHTML="Pause"
    c_timer_cau = setTimeout("c_updateTime_cau()",1000);
  
  
}

function c_select(event) {
  if (c_selected!=null) {
    c_selected.className="list-group-item";
  }
  if (c_selected==event.target) {
    c_selected.className="list-group-item";
    c_selected = null;
  } else {
    event.target.className="list-group-item active";
    c_selected = event.target;
  }
  

  return false;

  /*if (c_selected!=null) {
    c_selected.style.backgroundColor = null;
  }
  if (c_selected==event.target) {
    c_selected.style.backgroundColor = null;
    c_selected = null;
  } else {
    c_selected = event.target;
    c_selected.style.backgroundColor = "cyan";
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

//function to stop c_timer
function c_stopTimer_inv() {
  
  if (c_mins_inv>=0 && !c_istiming_inv) {
    var c_stopbutton_inv = document.getElementById("c_stopbutton_inv");
    c_stopbutton_inv.innerHTML="Pause"
    c_timer_inv = setTimeout("c_updateTime_inv()",1000);
    c_istiming_inv = true;
  } else if (c_istiming_inv) {
    clearTimeout(c_timer_inv);
  //var c_startbutton = document.getElementById("c_startbutton");
    var c_stopbutton_inv = document.getElementById("c_stopbutton_inv");
    c_stopbutton_inv.innerHTML="Resume"
    c_istiming_inv = false;
  }
  
}

//function to stop c_timer
function c_stopTimer_cau() {
  
  if (c_mins_cau>=0 && !c_istiming_cau) {
    var c_stopbutton_cau = document.getElementById("c_stopbutton_cau");
    c_stopbutton_cau.innerHTML="Pause"
    c_timer_cau = setTimeout("c_updateTime_cau()",1000);
    c_istiming_cau = true;
  } else if (c_istiming_cau) {
    clearTimeout(c_timer_cau);
  //var c_startbutton = document.getElementById("c_startbutton");
    var c_stopbutton_cau = document.getElementById("c_stopbutton_cau");
    c_stopbutton_cau.innerHTML="Resume"
    c_istiming_cau = false;
  }
  
}

function c_addTime_cau() {

    //get time from dropdown
    var index_sec = document.getElementById("c_timepickersec_cau").selectedIndex;
    var index_min = document.getElementById("c_timepickermin_cau").selectedIndex;
    //var currtime = c_time[index];
    var c_seconds = c_time_sec[index_sec];
    var c_mins = c_time_min[index_min];
    //console.log("seconds = "+c_seconds+", minutes = "+c_mins);

    c_seconds_cau = Number(c_seconds_cau)+Number(c_seconds);
    c_mins_cau = Number(c_mins_cau)+Number(c_mins);
    //console.log("seconds = "+c_seconds_cau+", minutes = "+c_mins_cau);

    if (c_seconds_cau >= 60) {
      c_seconds_cau -= 60;
      c_mins_cau += 1;
    }
}

//COUNTRY FLOW

//updating list of countries in dropdown
/*function updateCountry() {

  //clear box
  var picker = document.getElementById("c_countrypicker");
  for (var i = picker.options.length-1; i>=0; i--) {
    picker.remove(i);
  }

  //populate
  for (var i = 0; i < countrylist.length; i++) {
      var checkbox = document.getElementById("country"+i);
      if (checkbox!=null) {
          if (checkbox.checked==true) {
              var c_countrypicker = document.getElementById("c_countrypicker");
              var option = document.createElement("option");
              option.text = checkbox.value;
              c_countrypicker.add(option);
          }
      }
  }
  
}*/

//add a country to speaker's list
function c_addCountry() {
  var list = document.getElementById("list_caucus");
  var picker = document.getElementById("c_countrypicker");
  var ele = document.createElement("a");
  ele.setAttribute("id","caucus"+c_divindex++);
  ele.setAttribute("href","#");
  ele.setAttribute("class","list-group-item")
  ele.setAttribute("onClick","c_select(event)");
  ele.setAttribute("draggable","true");
  ele.setAttribute("ondrop","c_drop(event)");
  ele.setAttribute("ondragover","c_allowDrop(event)");
  ele.setAttribute("ondragstart","c_drag(event)");
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
function c_yieldCountry() {

  var c_information = document.getElementById("c_information");
  var picker = document.getElementById("c_countrypicker");
  c_information.innerHTML = "Delegate of "+picker.options[picker.selectedIndex].value;

}

function c_removeCountry() {
  if (c_selected!=null) {
    /*c_selected.innerHTML = null;    
    c_selected.style.backgroundColor = null;
    c_selected = null;
    cleanQueue();*/
    c_selected.parentNode.removeChild(c_selected);
    c_selected = null;
  }
}

//dragging
function c_allowDrop(event) {
  event.preventDefault();
}

function c_drag(event) {
  event.dataTransfer.setData("thedata", event.target.id);
}

function c_drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("thedata");
  var tmp = event.target.innerHTML;
  var othertarget = document.getElementById(data);
  event.target.innerHTML = othertarget.innerHTML;
  othertarget.innerHTML = tmp;

}


/*document.ondrop=function(event) {
  alert("something");
  //event.preventDefault();
  event.target.innerHTML = null;
}*/