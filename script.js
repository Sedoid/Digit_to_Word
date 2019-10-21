const unit = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve ','Thirteen'];
const amount = ['hundred',' Thousand ',' Million ',' Billion ',' Trillion ','quintillion'];

class Convert{
 
    constructor(number){
        this.constant = 1;
         let number_word = number.toString();
         let number_of_figures = number_word.length-1,
             digits = [...number_word];
             this.digit = [];
             digits.forEach(element => this.digit.push(parseInt(element)));        
        this.word =[];
     
        this.degree = Math.floor(number_of_figures/3);
       
        this.Tenth();
    }

    Tenth(){
        const append = ['teen','ty'],
        value = [];
        if(this.digit.length)
            value.push(this.digit.pop()); 
        if(this.digit.length)
            value.push(this.digit.pop());

             value.reverse();
        let number =parseInt( value.join(''));
        if(number < 10)
           {          
               this.word.push(unit[number]);           
               if(number == 0)
                 this.word.push('');
           }
        else{

        if(value[0]==9||value[0]==8||value[0]==7||value[0]==6||value[0]==5||value[0]==4)
            this.word.push(unit[value[0]]+append[1]+" "+ unit[value[1]]);
        else if(value[0]<1)
            this.word.push(unit[value[1]]);
        else if(value[0]==1)
            if(unit[number])
                this.word.push(unit[number]);
            else
            this.word.push(unit[value[1]]+ append[0]);
        else if(value[0] == 2)
            this.word.push('Twenty '+ unit[value[1]]);
        else 
            this.word.push('Thirty '+ unit[value[1]]);
        }      

        if(this.digit.length)
               this.hunderd();
    
 }
    hunderd(){
        let value = this.digit.pop();
        if(value==0){
            let c = this.degree - (this.degree-this.constant);
            this.word.push(amount[c]);
            ++this.constant;
             --this.degree;
            this.Tenth();
        }
                  
        else{
             if (this.word[0] == " ")
                this.word.push(unit[value]+ ' Hundred ');
                else
                this.word.push(unit[value]+ ' Hundred and'); 
        }
                
        if(this.digit.length )
       {
                let c = this.degree - (this.degree-this.constant);
                this.word.push(amount[c]);
                ++this.constant;
                --this.degree;
                this.Tenth();
       }
        
    }    

}

let btn = document.querySelector('#btn');

btn.addEventListener('click',work);

function work(){
  const number = parseInt(prompt('Enter the number: '));
console.log(number);
if(!number && number!=0)
   alert('No Input');
else if(number==0)
   alert(number+' : Zero');
else{
let figure = new Convert(number);
let word =figure.word.reverse();
console.log(word.join(''));
alert(number +' : '+ word.join(''));
  }
}

