<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Alberts api</title>
  <link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-1.23.1.css">
  
  <script src="libs/jquery.js"></script>
   <script src="https://code.jquery.com/qunit/qunit-1.23.1.js"></script>
   
   <script src="js/data.js"></script>
   
   <script src="js/albertsBinaryTree.js"></script>
   
  
</head>
<body>
    
    <script>
    
     $(document).ready(function () {
         
         
     });
     
     QUnit.test( "Unit test working", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
    </script>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  
  <div style="width:50%; display: block;margin: auto; margin-top:20px;">
  <h1>Please fill the input below for longitude and latitude</h1>
  
  
 
  <label>Latitude: </label> 
  <input type="text" value="37.778175" id="lat_input" />
  <p></p>
   <label>Longitude: </label> 
  <input type="text" value="-122.390725" id="long_input" />
  </div>
  
            <button class="btn btn-danger" onclick="getResults();" style=" display: block;margin: auto; margin-top:20px;" >click to find nearby places</button>
            
            
            <div id ="show_results" class="btn btn-primary" style="display: block; margin: auto;">
            
        </div>
            
 
</body>
</html>
<script>

function getResults(){
    
    var long = $("#long_input").val();
     var lat = $("#lat_input").val();
     
      //getNearest(long, lat, propertyList);
    
   // alert(":"+ propertyList[0].long);
    
    buildTree(lat, long, propertyList);
    
    var results = [];
    var bTree = new binaryTree();
    
    //scan the javascript object  
    var objCount = 1;
    var distance = "";
       // console.log("lat: "+ propertyList[0].lat );
    
   /* for(var index =0; index< Object.keys(obj).length; index +=1){
        
        console.log("lat: "+obj[index].lat );
        
    }*/
        
        
}

</script>



<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * var R = 3956; // miles
var dLat = (lat2-lat1).toRad();
var dLon = (lon2-lon1).toRad();
var lat1 = lat1.toRad();
var lat2 = lat2.toRad();

var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c;
 */

