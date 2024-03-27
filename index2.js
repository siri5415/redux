const {createStore} = require("redux");
const initialState = {
    numofMobiles: 100,
    numofLaptop:1000,
    numofCars:200,
};
const BUY_Laptop = ()=> {
   return{
    type: "BUY",
   };
};    
const sell_Laptop = ()=> {
    return{
     type: "sell",
    };
 };    
 
 const BUY_Cars = ()=> {
    return{
     type: "BUY",
    };
 };    
 const sell_Cars = ()=> {
     return{
      type: "sell",
     };
  };
const Reducer = (state = initialState,action)=>{
    switch(action.type) {
         case "BUY":
        return{
            numofLaptop: state.numofLaptop - 1,
            numofCars:state.numofCars -1,
        };
        case "sell":
            return{
                numofLaptop: state.numofLaptop + 1,
                numofCars:state.numofCars +1,
            };
    
        default:
            return state;
    };
}
const store = createStore(Reducer);
console.log("initialState", store.getState());
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(BUY_Laptop());
store.dispatch(sell_Laptop());
store.dispatch(BUY_Cars_Cars());
store.dispatch(sell_Cars());
