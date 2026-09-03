//Modules
const earnMoney =()=>{
    return "Earn money by learning high demand skills";
};
const growMoney =()=>{
    return "Grow money by Investing";
};
const giveMoney =()=>{
    return "Give money back to the world";
};

class Greeting{
    constructor(name){
        this._name = name;//_name is used to mention private var, but unless # is used still this var can be used outside directly
    }

    hello(){
        return `Hello ${this._name}, Welcome to my page.`
    }
}

export default earnMoney;//Function can be set as default
export {growMoney,giveMoney,Greeting};//Export remaining functions and classes

