const hi = "dil"

const changeNum = (state = hi , action ) => {
    switch(action.type){
        case "INCREMENT": return action.value;
        default: return "Tumbbad";
    }
}

export default changeNum;