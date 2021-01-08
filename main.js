var inputs = [];
var inputs2 = [];

function getParagraph1()
{
  for (var i = 1; i <=6 ; i++)
    {
        if(document.getElementById("para1_input_box_" + i).value=="")
        {
            console.log(inputs[i]);
            continue;
        }
        else{
            console.log("else "+inputs[i]);
            inputs.push(document.getElementById("para1_input_box_" + i).value);
        }
      
    }
    console.log(inputs);
    if(inputs.length ==0)
    {
        alert("Please insert atleast one sentence");
    }
  
  inputs.join(".");
  
  document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}



function getParagraph2()
{
  for (var i = 1; i <=6 ; i++)
    {
        if(document.getElementById("para2_input_box_" + i).value=="")        {
           
            continue;
        }
        else{
          
            inputs2.push(document.getElementById("para2_input_box_" + i).value);
        }
      
    }
   
    if(inputs2.length ==0)
    {
        alert("Please insert atleast one sentence");
    }
  
    inputs2.join(".");
  
  document.getElementById("showParagraph2").innerHTML = inputs2.join(". ");
}