// // range slider
// function rangeSlide(value) {
//     document.getElementById('rangeValue').innerHTML = value;
// }

// radio button secmeli

function radioCheck(radio) {
    data = radio.getAttribute("data")
    
    // Hide all divs
    
    for (var i = 0; i < 3; i++) { // assuming your data attr 1,2,3,..,N
        var el = 'ifRadio' + (i + 1); // ifRadio1, ifRadio2, etc
        document.getElementById(el).style.display = "none";
    }
    
    // Show the current div
    
    var el = 'ifRadio' + (data); // ifRadio1, ifRadio2, etc
    document.getElementById(el).style.display = "block";
}


//carpan range
function run(){
    var one = document.getElementById("range1").value;
    document.getElementById('out1').value=one; 
    // var two = document.getElementById("range2").value;
    // document.getElementById('out2').value=two; 
    }
  function plus(){
    document.getElementById("range1").value++;
    // document.getElementById("range2").value++;
    run();
  }
  function minus(){
    document.getElementById("range1").value--;
    // document.getElementById("range2").value--;
    run();
  }