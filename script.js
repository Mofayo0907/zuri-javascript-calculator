function calc() {
    const firstNum = parseInt(prompt("Enter the First number"));
    const operator = (prompt('Enter the operator: +, -, /, *'));
    const secondNum = parseInt(prompt("Enter the second number"));

    if (operator==='+'){
            alert(firstNum+secondNum);
        }else if(operator === '-'){
            alert(firstNum-secondNum);
        }else if(operator === '/'){
            alert(firstNum/secondNum);
        }else if (operator === '*'){
            alert(firstNum*secondNum)
        }else{
            alert("That is an invalid operator. Enter +,-,* or /")
        }
}

calc()
const question = (prompt('Would you like to perform another task? yes/no'));
if (question === "yes"){
    calc()
}else if (question === "no"){
    alert('thanks for using calculator')
}else{
    alert('Invalid Input')
}
