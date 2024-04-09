function vertaal(){ 

    this.innerHTML = "Hallo wereld!";    
    } 
    function maakEvents() 
    { 
    } 

    document.getElementById("translate_me1").onclick = vertaal; 
    document.getElementById("translate_me2").onclick = vertaal; 
    document.getElementById("translate_me3").onclick = vertaal; 
    document.getElementById("translate_me4").onclick = vertaal; 
    document.getElementById("translate_me5").onclick = vertaal; 
    window.onload = maakEvents; 