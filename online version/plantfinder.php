<?php
session_start();
require_once ('db_connect.php'); // include the database connection 
?>

<!DOCTYPE html>
<html>
<head>
<title>Natureloveyou Plant Finder</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css" media="screen">
<script src="../js/jquery-1.11.1.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/typeahead.bundle.js"></script>


<script>
    
window.onload=function(){

var namelist = [];
var jsondata = JSON.parse('<?php echo json_encode($json_response); ?>');
for (var i = 0; i < jsondata.length; i++) {
  namelist.push(jsondata[i].ScientificName);
}
console.log(namelist); 
initializeBloodhound(); 


function initializeBloodhound() {
  // instantiate the bloodhound suggestion engine
var names = new Bloodhound({
datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.name); },
queryTokenizer: Bloodhound.tokenizers.whitespace,
local: $.map(namelist, function(item) { return { name: item }; })
/*[
{ name: 'Amelia' },
{ name: 'Benjamin' },
{ name: 'Chang Joon' },
{ name: 'Dousabel' },
{ name: 'Eunice' },
{ name: 'Frederick' },
{ name: 'Gabriel' },
{ name: 'Hajeong' },
{ name: 'Henry' },
{ name: 'Hank' },
{ name: 'Hamster' },
{ name: 'Handsome' }
]*/
});
 
// initialize the bloodhound suggestion engine
names.initialize();
 
// instantiate the typeahead UI
$('#searcher').typeahead(null, {
displayKey: 'name',
source: names.ttAdapter()
});

}


}

function submit(event) {
  if(event.keyCode == 13) {
    gotopage();
  }
}

function gotopage() {
  var input = document.getElementById("searcher").value;
  var url = "http://natureloveyou.sg/"+input+"/Main.html";
  window.open(url);
}


</script>
<style>

.typeahead {
  background-color: #fff;
}

.typeahead:focus {
  border: 2px solid #0097cf;
}

.tt-query {
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
     -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}

.tt-hint {
  color: #999
}

.tt-dropdown-menu {
  width: 260px;
  margin-top: 12px;
  padding: 8px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 8px;
     -moz-border-radius: 8px;
          border-radius: 8px;
  -webkit-box-shadow: 0 5px 10px rgba(0,0,0,.2);
     -moz-box-shadow: 0 5px 10px rgba(0,0,0,.2);
          box-shadow: 0 5px 10px rgba(0,0,0,.2);
}

.tt-suggestion {
  padding: 3px 20px;
  font-size: 18px;
  line-height: 24px;
}

.tt-suggestion.tt-cursor {
  color: #fff;
  background-color: #0097cf;

}

.tt-suggestion p {
  margin: 0;
}

</style>


</head>

<body>


<div class="container">
  <div class="text-center">


    <div class="jumbotron">
      <h1 id="title">Natureloveyou Plant Finder</h1>
      <p id="information">Type in the scientific name of the plant:</p>
      
    
      
      <div class="col-md-6 col-md-offset-3">
        
          <input id="searcher" class="form-control" type="text" placeholder="Name" onkeypress="submit(event)">
          
          <button class="btn btn-success" type="button" onclick="gotopage()">Find</button>
          
        
      </div>
      
    </div>
   
  </div>  
</div>


</div>




  



</body>
</html>
