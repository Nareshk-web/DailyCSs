   
        // function getHistory(){
        //     return document.getElementById('history-value').innerText;
        // }
        // function printHistory(num){
        //     document.getElementById("history-value").innerText=num;
        // }
        // function getOutput(){
        //     return document.getElementById("output-value").innerText;
        // }
        // function printOutput(num){
        //     if(num==""){
        //         document.getElementById("output-value").innerText=num;
        //     }else{
        //         document.getElementById("output-value").innerText=getFormattedNumber(num);
        //     } 
        // }                                                                                                                  /*middle-section {height: auto;position: relative;display: flex;justify-content: space-between;flex-direction: column;align-items: center;padding: 0.25remborder-radius: 1.875rem;margin-top: 0.125rem;margin-left: 0.20rem;}.middle-section button {margin: 0.1875rem 0.3125rem;color: var(--color-text);font-weight: 600;}*/
        
        // function getFormattedNumber(num){
        //     if(num=="-"){
        //         return "";
        //     }
        //     var n = Number(num);
        //     var value = n.toLocaleString("en");
        //     return value;
        // }
        // function reverseNumberFormat(num){
        //     return Number(num.replace(/,/g,''));
        // }
        
        // var operator = document.getElementsByClassName("operator");
        // for(var i=0;i<operator.length;i++){
        //     operator[i].addEventListener('click',function(){
        //         if(this.id=="clear"){
        //             printHistory("");
        //             printOutput("");
        //         }                                                                                                                  /*middle-section {height: auto;position: relative;display: flex;justify-content: space-between;flex-direction: column;align-items: center;padding: 0.25remborder-radius: 1.875rem;margin-top: 0.125rem;margin-left: 0.20rem;}.middle-section button {margin: 0.1875rem 0.3125rem;color: var(--color-text);font-weight: 600;}*/
        
        //         else if(this.id=="backspace"){
        //             var output = reverseNumberFormat(getOutput()).toString();
        //             if(output){
        //                 output = output.substr(0,output.length-1);
        //                 printOutput(output);
        //             }
        //         }
        //         else{
        //             var output = getOutput();
        //             var history = getHistory();
        //             if(output=="" && history!=""){
        
        //                 if(isNaN(history[history.length-1])){
        //                     history = history.substr(0,history.length-1);
        //                 }
        //             }                                                                                                                  /*middle-section {height: auto;position: relative;display: flex;justify-content: space-between;flex-direction: column;align-items: center;padding: 0.25remborder-radius: 1.875rem;margin-top: 0.125rem;margin-left: 0.20rem;}.middle-section button {margin: 0.1875rem 0.3125rem;color: var(--color-text);font-weight: 600;}*/
        
        //             if(output!="" || history!=""){
        //                 output = output=="" ? output : reverseNumberFormat(output);
        //                 history = history+output;
        //                 if(this.id=="="){
        //                     var result=eval(history);
        //                     printOutput(result);
        //                     printHistory("");
        //                 }
        
        //                 else if(this.id=="%"){
        //                     var n = reverseNumberFormat(getOutput());
        //                     var percent = n / 100;
        //                     printOutput(percent.toFixed(4));
        //                 }
        //                 else{
        //                     history=history+this.id;
        //                     printHistory(history);
        //                     printOutput("");
        //                 }
        //             }
        //         }
        //     });
        // }
        
        // var number = document.getElementsByClassName("number");
        // for(var i=0;i<number.length;i++){
        //     number[i].addEventListener('click',function(){
        //         var output=reverseNumberFormat(getOutput());
        //         //if output is a number
        //         if(output!=NaN){
        //             output=output+this.id;
        //             printOutput(output);
                    
        //         }
        //     });
        // }
        
        // let checkbox = document.querySelector('input[name=theme]');
        // checkbox.addEventListener('change',function(){
        //     if(this.checked){
        //         document.documentElement.setAttribute('data-theme','dark');
        //     }else{
        //         document.documentElement.setAttribute('data-theme','light');
        //     }
        // })
             