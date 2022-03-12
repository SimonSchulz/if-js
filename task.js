function checkBrackets(string) {
    const stack = [];
    for (let char of string){
        if (char==="{"){
            stack.push(char);
        }
        if(char==="}" && stack.length===0){
            return false;
        }
        if(char==="}"){
            stack.pop();
        }
    }
    return stack.length === 0
}