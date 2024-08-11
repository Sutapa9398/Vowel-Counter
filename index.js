const textarea = document.querySelector("#textarea")
const button = document.querySelector("#count")
const output = document.querySelector(".output")

button.addEventListener("click", () => {
    if(textarea.value === ''){
        output.innerHTML = "Please Enter some text1!";
    }
    
    else{
       const val = textarea.value;
       let count = 0;
       for(let i=0; i<val.length; i++){
         if(val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u"){
            count++;
         }
         
        }
        // when there is no vowel means count will be 0
        if(count === 0){
            output.innerHTML = "There are no vowels in the text.";
        } else {
            output.innerHTML = `The number of vowels are ${count}`;
        }       
    }
})