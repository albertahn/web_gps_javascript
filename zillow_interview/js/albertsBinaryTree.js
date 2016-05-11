/* 
 * binary tree to sort data and retrieve when needed
 */


function Node(distance, propIndex){ //creates the node 
        
        this.value = distance;
        this.index = propIndex;
        this.count = 1;
        this.left = null;
        this.right = null;
        
        this.context = {};
        
    }//node
    
function binaryTree(){
  
    
    var rootNode = null;
    
    var count = 0;
    
    this.count = function(){
        
        return count;
    }//function count
    
    
    
    this.traverse = function(callback){
        var mainRoot = rootNode;
        
        //go to first one
        
        while(mainRoot.left !=null){
            current = mainRoot.left;
            current.back = mainRoot;
            mainRoot = current;
            
        }
        
        while(mainRoot != null){ //check 
            callback(mainRoot);
            
            if(mainRoot.right !=null){
                mainRoot.right.back = mainRoot.back;
                mainRoot = mainRoot.right;
                
                while(mainRoot.left !=null){
                    current = mainRoot.left;
                    current.back = mainRoot;
                    mainRoot = current;
                    
                }//while
                
            }else{//if
                
                current = mainRoot.back;
                mainRoot.back = null;
                mainRoot = current;
            }
            
            
        }//while
        
        
    }//trav end
    
    ///add the node
    
    this.addNode = function(value, prop_index, callback){
        
        if(rootNode ==null){
            rootNode = new Node(value, prop_index);
            callback(rootNode);
            count +=1;
            
        }else{//else not null
            var parent = rootNode;
            while(true){ 
                
                if(parent.value == value){ //value is the same
                    callback(parent);
                    parent.count +=1;
                    break;
                    
                }else if(parent.value > value){//if smaller then left
                    
                    if(parent.left ==null){
                        parent.left = new Node(value, prop_index);
                        vallback(parent.left);
                        count +=1;
                        break;
                        
                    }else{//if
                        parent = parent.left; //now the left is the parent
                        
                    }//else
                    
                }//elif
                
                
            }// end while true
            
            
        }//end else
            
        
    }//add node
    
   
    
    //function to input all the distances in recursice fasion 
    
    
    
    
}//end binary tree

 function sentenceToNode(node, sentence){
        
        if(node.context.sentences == null ) {
        node.context.sentences = [sentence];
    } else {
        node.context.sentences.push(sentence);
    }
    }//sentence endt
    
function buildTree(mylat, mylong, obj){
   var results = [];
    var bTree = new binaryTree();
    
    //scan the javascript object  
    var objCount = 1;
    var distance = "";
    
    
    
    for(var index =0; index< Object.keys(obj).length; index +=1){
        
        var mylat = parseFloat(mylat);
          var mylong= parseFloat(mylong);
             var lat2= parseFloat(obj[index].lat)
            var long2= parseFloat(obj[index].long);
            
            
        
        /*  console.log("mylat"+mylat);
           console.log("mylong"+mylong);
          console.log("lat2"+lat2);
       
          console.log("long2"+long2);
          */
        
        var distance = getDistance(mylat,mylong,lat2, long2);
        
       // console.log("distance:"+ distance);
        
        bTree.addNode(distance, index, function (node) { sentenceToNode(node, objCount); });
        
         bTree.traverse(function (node) {
        results.push(node.value +" : "+node.index);
        
         });//traverse
    }//for
    
    console.log("results: "+ results);
    
      alert("results: "+ results);
   // return results;
    
  
    
}//end build tree
Number.prototype.toRad = function() { return this * (Math.PI / 180); };

function getDistance(lat1, lon1, lat2, lon2){
    
    
    
    var R = 3956; // miles
var dLat = (lat2-lat1).toRad();
var dLon = (lon2-lon1).toRad();
var lat1 = lat1.toRad();
var lat2 = lat2.toRad();

var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c;
    
    return d;
}//get distance


/*
function getNearest(mylat, mylong, obj){
    var results = [];
    var bTree = new binaryTree();
    
    //scan the javascript object  
    var objCount = 1;
    var distance = "";
    
        console.log("lat: "+obj[0].lat );
    
    
    for(var index =0; index< Object.keys(obj).length; index +=1){
        
        console.log("lat: "+obj[index].lat );
        
    }
    
    
} //get nearest */