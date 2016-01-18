<!DOCTYPE html>
<html>
<head><title>MUN Application</title>
<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css" media="screen">
<script type="text/javascript" src="../js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="../js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/typeahead.bundle.js"></script>
<script type="text/javascript" src="../js/mun/committee.js"></script>
<script type="text/javascript" src="../js/mun/timer.js"></script>
<script type="text/javascript" src="../js/mun/timercaucus.js"></script>
<script type="text/javascript" src="../js/mun/settings.js"></script>
<script>

window.onload=function(){
  //IMPORTANT
  initializeBloodhound();
  generateListOfCountries()
  c_generateTimeOptions();
  t_generateTimeOptions();
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

.selectwidthauto {
  width: auto !important;
}

.gsl {
  width:350px;
  height:30px;
  padding:10px;
  border:1px solid #aaaaaa;

}

#jumbo1 {
  padding: 20px;
}
#jumbo2 {
  padding: 20px;
}
#jumbo3 {
  padding: 20px;
}

</style>

</head>

<body>

	<div class="container">
  <div class="text-center">


  <h1 id="maintitle">MUN Timer Application</h1>
<div class="tabbable">
  <ul class="nav nav-tabs">
    <li class="active" onclick="updateCountry()"><a href="#pane1" data-toggle="tab">General Debate</a></li>
    <li onclick="updateCountry()"><a href="#pane2" data-toggle="tab">Caucus</a></li>
    <li><a href="#pane3" data-toggle="tab">Stakeholders</a></li>
    <li><a href="#pane4" data-toggle="tab">Application Settings</a></li>
  </ul>
  <div class="tab-content">
    <!--TAB ONE-->
    <div id="pane1" class="tab-pane active">
      <br>
      <?php include("timer.php"); ?>
    </div>
    <!--TAB TWO-->
    <div id="pane2" class="tab-pane">
      <br>
      <?php include("timercaucus.php"); ?>
    </div>
    <div id="pane3" class="tab-pane">
      <br>
      <?php include("committee.php"); ?>
    </div>
    <div id="pane4" class="tab-pane">
      <br>
      <?php include("settings.php"); ?>
    </div>
  </div><!-- /.tab-content -->
</div><!-- /.tabbable -->

    
   
  </div>  
	</div>






</body>
</html>