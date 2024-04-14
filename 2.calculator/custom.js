
function calculate(){
   
      let operator = document.getElementById('operator').value;
      let reselt = document.getElementById('result')

      if(operator === '+'){
        let n1 = parseFloat(document.getElementById('n1').value);
        let n2 = parseFloat(document.getElementById('n2').value);
        document.getElementById('result').value = n1 + n2;
      }


      if(operator === '-'){
        let n1 = parseFloat(document.getElementById('n1').value);
        let n2 = parseFloat(document.getElementById('n2').value);
        document.getElementById('result').value = n1 - n2;
      }


      if(operator === '*'){
        let n1 = parseFloat(document.getElementById('n1').value);
        let n2 = parseFloat(document.getElementById('n2').value);
        document.getElementById('result').value = n1 * n2;
      }

      if(operator === '/'){
        let n1 = parseFloat(document.getElementById('n1').value);
        let n2 = parseFloat(document.getElementById('n2').value);
        document.getElementById('result').value = n1 / n2;
      }
   
      const reset = document.getElementById('reset');
      
      reset.addEventListener('click', ()=>{
        n1.value = '';
        n2.value = '';
        reselt.value = '';
      })
}

/*function cal(){

    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');
    let cal = document.getElementById('cal');
    cal.addEventListener('click' , function(){
      n1.value = '';
      n2.value = '';
    })
  
}

*/

