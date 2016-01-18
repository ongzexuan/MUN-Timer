

    <div class="col-md-4 sidebar-offcanvas" id="csidebar" role="navigation">
          <div id="list_caucus" class="list-group">
            <!--<a id="caucus0" href="#" onClick="c_select(event)" class="list-group-item">Some Country</a>-->
          </div>
        </div>



<div class="col-md-8 text-center" id="cright">
    <h3 id="caucustitle">Committee for Global Problems</h3>
    <div class="col-md-6 text-center">
        <div id="jumbo2" class="jumbotron">
            <div id="c_time_inv" style="font-size:100px">00:00</div>
            <p id="c_information_inv">Delegate of Afghanistan</p>
            <!--<img src="../res/flags/ad.png"> -->
        </div>
    </div>
    <div class="col-md-6 text-center">
        <div id="jumbo3" class="jumbotron">
            <div id="c_time_cau" style="font-size:100px">00:00</div>
            <p id="c_information_cau">Total Caucus Time Remaining</p>
            
            
        </div>
    </div>
                      
    

    <div class="col-md-4 text-left">
        <h5>Individual Delegate Timer:<h5>
        <form role="form" class="form-inline">  
        <button class="btn btn-success" id="c_startbutton_inv" type="button" onclick="c_startTimer_inv()">Start</button>
        <button class="btn btn-danger" id="c_stopbutton_inv" type="button" onclick="c_stopTimer_inv()" >Pause</button>
        <br><br><select class="form-control selectwidthauto" id="c_timepickermin_inv"></select>
        <select class="form-control selectwidthauto" id="c_timepickersec_inv"></select>
        
        </form>
    </div>

    <div class="col-md-4 text-left">
        <h5>Caucus Timer:<h5>
        <form role="form" class="form-inline">  
        <button class="btn btn-success" id="c_startbutton_cau" type="button" onclick="c_startTimer_cau()">Start</button>
        <button class="btn btn-danger" id="c_stopbutton_cau" type="button" onclick="c_stopTimer_cau()" >Pause</button>
        <button class="btn btn-warning" id="c_addtimebutton_cau" type="button" onclick="c_addTime_cau()" >Add</button>
        <br><br><select class="form-control selectwidthauto" id="c_timepickermin_cau"></select>
        <select class="form-control selectwidthauto" id="c_timepickersec_cau"></select>
        </form>
    </div>

    <div class="col-md-4 text-left">
        <h5>Delegate Functions:<h5>
        <form role="form" class="form-inline"> 
        <button class="btn btn-success" id="c_addbutton" type="button" onclick="c_addCountry()" >Add</button>
        <button class="btn btn-danger" id="c_rmvbutton" type="button" onclick="c_removeCountry()" >Remove</button>
        <!--<button class="btn btn-warning" id="c_yieldbutton" type="button" onclick="c_yieldCountry()" >Yield</button>-->
        <br><br><select class="form-control selectwidthauto" id="c_countrypicker">
          <option>Afghanistan</option>
        </select>
        </form>
    </div>
</div>    




    

    
           
                             
