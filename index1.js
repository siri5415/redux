const {createStore} = require("redux");
const initialState = {
    numofMobiles: 100,
};
const sell_Mobile = ()=> {
   return{
    type: "sell",
   };
};    
const Reducer = (state = initialState,action)=>{
    if(action.type === "sell") {
        return{
            numofMobiles: state.numofMobiles + 1,
        };
        }
        else{
            return state;
    }
};

const store = createStore(Reducer);
console.log("initialState", store.getState());
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(sell_Mobile());
store.dispatch(sell_Mobile());
store.dispatch(sell_Mobile());
store.dispatch(sell_Mobile());
store.dispatch(sell_Mobile());






