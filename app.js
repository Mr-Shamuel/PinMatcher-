const generateInput = document.getElementById('generate-btn');
generateInput.addEventListener('click', function () {

    const randoms = Math.random() * 10000;
    const result = parseInt(randoms);

    const finalInput = document.getElementById('generate-input');
    finalInput.value = result;
 

    // console.log(result);

})




let calBtn = document.getElementsByClassName('button');
for (let i = 0; i < calBtn.length; i++) {
    calBtn[i].addEventListener('click', function () {
        const result2 = calBtn[i].innerHTML;
        const calInput = document.getElementById("cal-input");
        calInput.value= calInput.value + result2 ;
       
     
        
    });
    
  

}  

function match() {
  const calMatch =  document.getElementById('cal-input').value;
  const generateMatch =  document.getElementById('generate-input').value;

  if(calMatch == generateMatch){
     document.getElementById("correct").style.display='block';
     document.getElementById("incorrect").style.display='none';
     swal("Good job!", "Pin Matched..Secret door is opening for you!", "success");
  }
  else{
    document.getElementById("incorrect").style.display='block';
    document.getElementById("correct").style.display='none';
    swal("Sorry!", "Your Pin Didn't Match, Please try again!", "error");
  }
    

    
}

