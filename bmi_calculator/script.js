const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const judgement = document.querySelector('#bmi');

  if (height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `enter valid height`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `enter valid weight`;
  }
  else {
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    result.innerHTML = `${bmi}`;
  if(bmi < 18.6){
    judgement.innerHTML = `And you are Underweight`;
  }
  if(bmi > 24.9){
    judgement.innerHTML = `And you are Overweight`;
  }
  else{
    judgement.innerHTML = `And you are Normal Weight`;
  }

    
  }
});
