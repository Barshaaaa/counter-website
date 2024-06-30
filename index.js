const countVal=document.querySelector('#counter');

const increment=() =>{
    // get the value from UI
      let value=parseInt(countVal.innerText);
      //set the value 
      value=value+1;
      //Update the value in UI
      countVal.innerText=value;
};

const decrement=()=>{
    let value=parseInt(countVal.innerText);
    value=value-1;
    countVal.innerText=value;
};