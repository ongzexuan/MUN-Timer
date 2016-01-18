
<div class="text-center">
      <input id="searcher" class="form-control" type="text" placeholder="Country" onkeypress="submitCountry(event)">
      <button class="btn-success btn" id="resetCommBtn" type="Button" onclick="clearSelection()">Clear Stakeholders</button>
      <br><br>
      <form>
      	<input type="radio" name="RBcommittee" value="Cultivation" id="RBCultivation" onclick="selectCultivation()"><label for="RBCultivation"> Cultivation</label>
      	<input type="radio" name="RBcommittee" value="Textiles" id="RBTextiles"><label for="RBTextiles" onclick="selectTextiles()"> Textiles</label>
      	<input type="radio" name="RBcommittee" value="Education" id="RBEducation" onclick="selectEducation()"><label for="RBEducation"> Education</label>
      	<input type="radio" name="RBcommittee" value="Oceans" id="RBOceans"><label for="RBOceans" onclick="selectOceans()"> Oceans</label>
      	<input type="radio" name="RBcommittee" value="Mining" id="RBMining"><label for="RBMining" onclick="selectMining()"> Mining</label>
      	<input type="radio" name="RBcommittee" value="Healthcare" id="RBHealthcare" onclick="selectHealthcare()"><label for="RBHealthcare"> Healthcare</label>
            <input type="radio" name="RBcommittee" value="NATO" id="RBNATO" onclick="selectNato()"><label for="RBNATO"> NATO</label>
            <input type="radio" name="RBcommittee" value="Warsaw Pact" id="RBWarsawPact" onclick="selectWarsaw()"><label for="RBWarsawPact"> Warsaw Pact</label>
      	
  	  </form>
</div>
<br>
<div class="col-md-4 text-left">
      <form id="firstcol">
      </form>
</div>
<div class="col-md-4 text-left">
      <form id="secondcol">
      </form>
</div>
<div class="col-md-4 text-left">
      <form id="thirdcol">
      </form>
</div>
