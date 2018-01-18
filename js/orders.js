
var proj4_data;
var cart;
$(document).ready(function() {
    
    proj4_data = new Array();
    cart = new shopping_cart("jadrn032");
    $.get('/perl/jadrn032/proj4/get_products.cgi', storeData);

var handle = new Array();
    handle[0] = $('[name="firstname"]');
    handle[1] = $('[name="lastname"]');
    handle[2] = $('[name="address1"]');
    handle[3] = $('[name="address2"]');
    handle[4] = $('[name="city"]');
    handle[5] = $('[name="state"]');
    handle[6] = $('[name="zip"]');
    handle[7] = $('[name="bfirstname"]');
    handle[8] = $('[name="blastname"]');
    handle[9] = $('[name="baddress1"]');
    handle[10] = $('[name="baddress2"]');
    handle[11] = $('[name="bcity"]');
    handle[12] = $('[name="bstate"]');
    handle[13] = $('[name="bzip"]');
    handle[14] = $('[name="phone"]');
    handle[15] = $('[name="bphone"]');
    handle[16] = $('[name="cardno"]');





$('[name="shipadd"]').click(function () {
        if ($('[name="shipadd"]').is(":checked")) {
            var value = handle[0].val();
            handle[7].val(value);

            value = handle[1].val();
            handle[8].val(value);

            value = handle[2].val();
            handle[9].val(value);

            value = handle[3].val();
            handle[10].val(value);

            value = handle[4].val();
            handle[11].val(value);

            value = handle[5].val();
            handle[12].val(value);

            value = handle[6].val();
            handle[13].val(value);

            value = handle[14].val();
            handle[15].val(value);
        }
        else {
            handle[7].val("");
            handle[8].val("");
            handle[9].val("");
            handle[10].val("");
            handle[15].val("");
            handle[11].val("");
            handle[12].val("");
            handle[13].val("");
        }
    });
});

function formValidation()  {  

    console.log("Hey");
   var res = String(document.getElementById('cardno').value);
   var result = res.substring(11,15);
   document.getElementById('cardno').value = '"XXXX XXXX XXXX"' + "result"; 
    console.log("Hey1");
};        
