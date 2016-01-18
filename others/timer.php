

    <div class="col-md-4 sidebar-offcanvas" id="tsidebar" role="navigation">
          <div id="list_gsl" class="list-group">
            <!--<a id="gsl0" href="#" onClick="t_select(event)" class="list-group-item">Some Country</a>-->
          </div>
        </div>



<div class="col-md-8 text-center" id="cright">
    <h3>General Debate</h3>
    <div id="jumbo1" class="jumbotron">
    <div id="t_time" style="font-size:100px">00:00</div>
    <p id="t_information">Delegate of Afghanistan</p>
    <!--<img src="../res/flags/ad.png">                   -->
    </div>

    <div class="col-md-4 text-left">
        <h5>Timer Functions:<h5>
        <form role="form" class="form-inline">  
        <button class="btn btn-success" id="t_startbutton" type="button" onclick="t_startTimer()">Start</button>
        <button class="btn btn-danger" id="t_stopbutton" type="button" onclick="t_stopTimer()" >Pause</button>
        <br><br><select class="form-control selectwidthauto" id="t_timepickermin"></select>
        <select class="form-control selectwidthauto" id="t_timepickersec"></select>
        </form>
    </div>

    <div class="col-md-4 text-left">
        <h5>Delegate Functions:<h5>
        <form role="form" class="form-inline"> 
        <button class="btn btn-success" id="t_addbutton" type="button" onclick="t_addCountry()" >Add</button>
        <button class="btn btn-danger" id="t_rmvbutton" type="button" onclick="t_removeCountry()" >Remove</button>
        <button class="btn btn-warning" id="t_yieldbutton" type="button" onclick="t_yieldCountry()" >Yield</button>
        <br><br><select class="form-control selectwidthauto" id="t_countrypicker">
          <option>Afghanistan</option>
        </select>
        </form>
    </div>

    <div class="col-md-4 text-left">
        <h5>Majorities</h5>
        <label id="labels">Stakeholders: 50</label>
        <label id="labelone">Simple Majority: 50</label>
        <label id="labeltwo">Two-third Majority: 50</label>
        <label id="labelthree">One-fifth: 50</label>
    </div>  
</div>    




    

    
           
                             
