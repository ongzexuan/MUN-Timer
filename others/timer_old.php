<div class="jumbotron">
    <div id="time" style="font-size:120px">SDYC</div>
    <p id="information">Delegate of Some Country</p>
    <img src="../res/flags/">                   
</div>

<div class="col-md-4 text-right" id="left">
    
    <form role="form" class="form-inline">  
    <button class="btn btn-success" id="startbutton" type="button" onclick="startTimer()">Start</button>
    <button class="btn btn-danger" id="stopbutton" type="button" onclick="stopTimer()" >Pause</button>
    <select class="form-control selectwidthauto" id="timepicker">
    </select>
    </form>

    <br>

    <form role="form" class="form-inline"> 
    <button class="btn btn-success" id="addbutton" type="button" onclick="addCountry()" >Add</button>
    <button class="btn btn-danger" id="rmvbutton" type="button" onclick="removeCountry()" >Remove</button>
    <button class="btn btn-warning" id="yieldbutton" type="button" onclick="yieldCountry()" >Yield</button>
    <select class="form-control selectwidthauto" id="countrypicker">
      <option>Afghanistan</option>
    </select>
    </form>

    <br>

    <button class="btn btn-primary" id="modbutton" type="button" onclick="addCountry()" >Mod</button>
    <button class="btn btn-primary" id="unmodbutton" type="button" onclick="addCountry()" >Unmod</button>
    <button class="btn btn-primary" id="updatebutton" type="button" onclick="updateCountry()" >Update</button>
           
                             
</div>

<div class="col-md-4 text-center" id="middle">
      
    <div class="gsl" id="gsl0" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    <div class="gsl" id="gsl1" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    <div class="gsl" id="gsl2" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    <div class="gsl" id="gsl3" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    <div class="gsl" id="gsl4" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    

</div>

<div class="col-md-4 text-center" id="right">
      
    <div class="gsl" id="gsl5" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    <div class="gsl" id="gsl6" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    <div class="gsl" id="gsl7" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    <div class="gsl" id="gsl8" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    <div class="gsl" id="gsl9" draggable="true" onclick="select(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>
    


</div>
