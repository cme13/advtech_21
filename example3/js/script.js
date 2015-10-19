document.onmousemove = function(evt){
   makeACircle(evt);
}
function makeACircle(evt){
/*
 * this method generate a red circle div
 * where the user clicks
 *
 *@param evt    the info about the click
 */
//generate a div 
//alert(evt.clientX);
    var circ = document.createElement("div");
    //set its horizontal pos to that of the cursor:
    circ.style.left= evt.clientX+'px';
     //set its vertical pos to that of the cursor:
    circ.style.top= evt.clientY+'px';
    //adds it to the HTML as child of <body>
    document.body.appendChild(circ);
}