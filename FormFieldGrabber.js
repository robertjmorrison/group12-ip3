$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


// SET THE OBJECT AS A HIDDEN STRING
// THEN GRAB VALUE USING .NET AND PARSE BACK TO JSON OBJ
$(function() {
    $('#formID').submit(function() {
        $('#JSONSTRING').text(JSON.stringify($('#formID').serializeObject()));
        return false;
    });
});



// C# CODE TO GET STRING FROM HIDDEN FORM WHICH HOLDS JSON STRING
// DURING CONFIRMATION DIALOGUE --- THIS WILL NEED WORK IM SURE.

//@{


//var jsonstring = "";
//JObject jsonobj;
//if(isPost)
//{
//    if (Request["submit"] == "OK")
//    {
//        jsonstring = Request.Form["jsonstring"];
//        jsonobj = jsonstring.Parse(jsonstring);
//    }
//}

//}


