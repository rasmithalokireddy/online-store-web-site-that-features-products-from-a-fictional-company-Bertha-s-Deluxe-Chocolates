
// <!-- Lokireddy, Rasmitha
//        Jadrn032
//        project #4
//        fall 2017  -->



var proj4_data;

$(document).ready(function() {
    proj4_data = new Array();
    var cart = new shopping_cart("jadrn032");
    $.get('/perl/jadrn032/proj4/get_products.cgi', storeData)
    .done(function(data){
        
        updateDisplay(cart.getCartArray(),cart.size());
        display_chocolate();
    });


    $('#milk').on('click', function() {
        tmpString = "";
        row_count=0;
        for (var i = 0; i < proj4_data.length; i++){
            if(i==0){
                tmpString += "<div class='row'>";
            }
            if(proj4_data[i][1] == "Milk chocolate") {
            row_count++;
            tmpString += "<div class='col-md-4'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";  

                tmpString += "<b>" + proj4_data[i][2] + "</b><br />";//title
                tmpString += proj4_data[i][3] + "<br />";//category
                tmpString += proj4_data[i][4] + "<br />";//short desc
                // tmpString += proj4_data[i][4] + "<br />";//long desc
                tmpString += "<b>Price: $" + proj4_data[i][6] + "</b><br />";//sale price  

                 

                    tmpString += "<input type='button' name="+proj4_data[i][0]+
                    " value='Add to Cart' /></div>";            
                }
            if(row_count == 3){
                tmpString += "</div><div class='row'>";
                row_count = 0;
            }
            }
            tmpString += "</div>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
    
    $('#dark').on('click', function() {
        tmpString = "";
        row_count=0;
        for (var i = 0; i < proj4_data.length; i++){
            if(i==0){
                tmpString += "<div class='row'>";
            }
            if(proj4_data[i][1] == "Dark chocolate") {
                row_count++;
            tmpString += "<div class='col-md-4'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<b>" + proj4_data[i][2] + "</b><br />";//title
                tmpString += proj4_data[i][3] + "<br />";//category
                tmpString += proj4_data[i][4] + "<br />";//short desc
                // tmpString += proj4_data[i][4] + "<br />";//long desc
                tmpString += "<b>Price: $" + proj4_data[i][6] + "</b><br />";//sale price  



            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /></div>";                
                }
            if(row_count == 3){
                tmpString += "</div><div class='row'>";
                row_count = 0;
            }
        }
        tmpString += "</div>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        row_count=0;
        for (var i = 0; i < proj4_data.length; i++){
            if(i==0){
                tmpString += "<div class='row'>";
            }
            if(proj4_data[i][1] == "Nuts and chews") {  
                row_count++;
            tmpString += "<div class='col-md-4'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";    

                tmpString += "<b>" + proj4_data[i][2] + "</b><br />";//title
                tmpString += proj4_data[i][3] + "<br />";//category
                tmpString += proj4_data[i][4] + "<br />";//short desc
                // tmpString += proj4_data[i][4] + "<br />";//long desc
                tmpString += "<b>Price: $" + proj4_data[i][6] + "</b><br />";//sale price  



            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /></div>";                
                }
            if(row_count == 3){
                tmpString += "</div><div class='row'>";
                row_count = 0;
            }
        }
        tmpString += "</div>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        tmpString = "";
        row_count=0;
    for (var i = 0; i < proj4_data.length; i++){
        if(i==0){
            tmpString += "<div class='row'>";
        }
            if(proj4_data[i][1] == "Brittles and toffies") {
                row_count++;
            tmpString += "<div class='col-md-4'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";  

                tmpString += "<b>" + proj4_data[i][2] + "</b><br />";//title
                tmpString += proj4_data[i][3] + "<br />";//category
                tmpString += proj4_data[i][4] + "<br />";//short desc
                // tmpString += proj4_data[i][4] + "<br />";//long desc
                tmpString += "<b>Price: $" + proj4_data[i][6] + "</b><br />";//sale price   



            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /></div>";                
                }
        if(row_count == 3){
                tmpString += "</div><div class='row'>";
                row_count = 0;
            }
    }
    tmpString += "</div>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

    $('#truffles').on('click', function() {
        tmpString = "";
        row_count=0;
    for (var i = 0; i < proj4_data.length; i++){
        if(i==0){
            tmpString += "<div class='row'>";
        }
            if(proj4_data[i][1] == "Truffles") {
                row_count++;
            tmpString += "<div class='col-md-4'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";  

                tmpString += "<b>" + proj4_data[i][2] + "</b><br />";//title
                tmpString += proj4_data[i][3] + "<br />";//category
                tmpString += proj4_data[i][4] + "<br />";//short desc
                // tmpString += proj4_data[i][4] + "<br />";//long desc
                tmpString += "<b>Price: $" + proj4_data[i][6] + "</b><br />";//sale price   

                

            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /></div>";                
                }
        if(row_count == 3){
                tmpString += "</div><div class='row'>";
                row_count = 0;
            }
    }
    tmpString += "</div>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

    $('#gifts').on('click', function() {
        tmpString = "";
        row_count=0;
    for (var i = 0; i < proj4_data.length; i++){
        if(i==0){
            tmpString += "<div class='row'>";
        }
            if(proj4_data[i][1] == "Gifts") {
                row_count++;
            tmpString += "<div class='col-md-4'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<b>" + proj4_data[i][2] + "</b><br />";//title
                tmpString += proj4_data[i][3] + "<br />";//category
                tmpString += proj4_data[i][4] + "<br />";//short desc
                // tmpString += proj4_data[i][4] + "<br />";//long desc
                tmpString += "<b>Price: $" + proj4_data[i][6] + "</b><br />";//sale price  
                

            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /></div>";                
                }
        if(row_count == 3){
                tmpString += "</div><div class='row'>";
                row_count = 0;
            }
    }
    tmpString += "</div>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });


    $('#assortments').on('click', function() {
        tmpString = "";
        row_count=0;
    for (var i = 0; i < proj4_data.length; i++){
        if(i==0){
            tmpString += "<div class='row'>";
        }
            if(proj4_data[i][1] == "Holiday assortments") {
                row_count++;
            tmpString += "<div class='col-md-4'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<b>" + proj4_data[i][2] + "</b><br />";//title
                tmpString += proj4_data[i][3] + "<br />";//category
                tmpString += proj4_data[i][4] + "<br />";//short desc
                // tmpString += proj4_data[i][4] + "<br />";//long desc
                tmpString += "<b>Price: $" + proj4_data[i][6] + "</b><br />";//sale price   

               

            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /></div>";                
                }
        if(row_count == 3){
                tmpString += "</div><div class='row'>";
                row_count = 0;
            }
    }
    tmpString += "</div>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
        
$('#content').on('click',$('input[type="button"]'), function(e) {
    if($(e.target).val() != 'Add to Cart') return;
    
    cart.add($(e.target).attr("name"),1);
    var cartArray = cart.getCartArray();
    $('#count').text(eval($('#count').text()) + 1);
    });
   
$('#fill_form').on('click', function() {
    FillBilling(this.form);
    });

$('#myModal').on('shown.bs.modal', function() {
    $(document).off('focusin.modal');
});
           
$(document).on('blur', '[id^="qty_"]', function() {
    var sku = this.id.slice(4);
    
    cart.setQuantity(sku, this.value);
    
    updateDisplay(cart.getCartArray(), cart.size());

}); 

$("#cart").on('click', "#dltproduct", function(e) {
    
    cart.delete($(e.target).attr("name"));
    updateDisplay(cart.getCartArray(),cart.size());
});


// $(document).on('click', '[id^="qty_"]', function() {
//     var sku = this.id.slice(4);
//     cart.setQuantity(sku, this.value);

//    // updateDisplay();
// }); 

// $("#cart").on('click', "#dltproduct", function(e) {
    
//     cart.delete($(e.target).attr("name"));
//     updateDisplay(cart.getCartArray(),cart.size());
// });

// function refreshPage(){

//     updateDisplay(cart.getCartArray(),cart.size());
//     window.location.reload();
// }

// $("#cart").on('click', "#updateproduct", function(e) {
//     // $(this).val();
//     cart.setQuantity(sku, this.value);
//     // cart.delete($(e.target).attr("name"));
//     updateDisplay(cart.getCartArray(),cart.size());
// });



// $(document).on('click', '[id^="qtnz"]', function() {
//     //alert($(e.target).attr("name"));
//     var sku = this.id.slice(4);
//     cart.delete(sku);
//     updateDisplay(cart.getCartArray(),cart.size());
// });

// $(document).on('click','[id^="qtnz"]',function() {
//     cart.delete(this.id);
//     updateDisplay(cart.getCartArray(), cart.size());
   
// });
      
    });    

    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    }
    
function display_chocolate() {

    tmpString = "";
        row_count=0;
        for (var i = 0; i < proj4_data.length; i++){
            if(i==0){
                tmpString += "<div class='row'>";
            }
            if(proj4_data[i][1] == "Milk chocolate") {
            row_count++;
            tmpString += "<div class='col-md-4'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";  

                tmpString += "<b>" + proj4_data[i][2] + "</b><br />";//title
                tmpString += proj4_data[i][3] + "<br />";//category
                tmpString += proj4_data[i][4] + "<br />";//short desc
                // tmpString += proj4_data[i][4] + "<br />";//long desc
                tmpString += "<b>Price: $" + proj4_data[i][6] + "</b><br />";//sale price  

                 

                    tmpString += "<input type='button' name="+proj4_data[i][0]+
                    " value='Add to Cart' /></div>";            
                }
            if(row_count == 3){
                tmpString += "</div><div class='row'>";
                row_count = 0;
            }
            }
            tmpString += "</div>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }


function updateDisplay(da,size) {
    var ctAry = da;
    var total = 0;
    var rash = "<div class='col-sm-7'>";
    rash += "<div class='panel panel-default'>"; 
    rash += "<div class='panel-heading'>Cart</div>";
    rash += "<div class='panel-body'>";
    rash += "<table class='table table-condensed table-summary table-borderless'><tbody>";
    rash += "<tr><th>Product</th><th>Name</th><th>Quantity</th><th>Update</th><th>Unit Price</th><th>Total</th><th>Delete Items</th></tr>";
    for(i=0; i < ctAry.length; i++) {
        rash += "<tr>";
        rash += "<td>"+"<img class='order_image' src=\"/~jadrn000/PROJ4_IMAGES/"+
                ctAry[i][0]+".jpg\" alt=\""+ctAry[i][0]+"\""+"</td>";
        for(var j=0; j < proj4_data.length; j++){
            if(ctAry[i][0] == proj4_data[j][0]) {
               
                rash += "<td>"+proj4_data[i][2]+"</td>"; 
            }
        }
        rash += "<td>"+"<input type='number' name='f' id='qty_"+ ctAry[i][0]+"' value='" + ctAry[i][1] + "'  min='1'></td>";
        rash += "<td><button type='button' onClick='window.location.reload();'>Update product</button></td>";
        for(var j=0; j < proj4_data.length; j++){
            if(ctAry[i][0] == proj4_data[j][0]) {
                
                rash += "<td>"+proj4_data[i][6]+"</td>"; 
                var item_total = (ctAry[i][1]*proj4_data[i][6]);
                total= total + item_total;
                rash += "<td>"+item_total.toFixed(2)+"</td>";
                rash += "<td><button  type='button' name='"+ctAry[i][0]+"' id='dltproduct'>Delete Product</button></td>";
            }
        }
        rash += "</tr>";
    }
    rash += "</tbody>";
    rash += "</table></div></div></div>";
    rash += "<div class='col-sm-4'>";
    rash += "<div class='panel panel-default'>"; 
    rash += "<div class='panel-heading'>Payment Details</div>";
    rash += "<div class='panel-body'>";
    rash += "<table class='table table-condensed table-summary table-borderless'><tbody>";
    rash += "<tr><td>TOTAL:</td><td>$"+total.toFixed(2)+"</td></tr>";
    tax = (total*0.08);
    grand_total= total+tax+2;
    rash += "<tr><td>TAX(8%):</td><td>$"+tax.toFixed(2)+"</td></tr>";
    rash += "<tr><td>SHIPPING CHARGES:</td><td>$2.00</td></tr>";
    rash += "<tr><td>GRAND TOTAL:</td><td>$"+grand_total.toFixed(2)+"</td></tr>";
    rash += "</tbody>";
    rash += "</table></div></div></div>";
    $('#cart').html(rash); 
    $('#count').text(size);     
}

function refreshPage(){

    // updateDisplay(cart.getCartArray(),cart.size());
    window.location.reload();
}

// function FillBilling(f) {
//   if(f.billingtoo.checked == true) {
//     f.shi_fname.value = f.fname.value;
//     f.shi_lname.value = f.lname.value;
//     f.shi_address1.value = f.address1.value;
//     f.shi_address2.value = f.address2.value;
//     f.shi_city.value = f.city.value;
//     f.shi_state.value = f.state.value;
//     f.shi_zip.value = f.zip.value;
//     f.shi_phone.value = f.phone.value;
//   }
// }
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}