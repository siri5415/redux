const {createStore} = require("redux");
const initialState = {
    numofMobiles: 100,
};
const buy_Mobile = ()=> {
   return{
    type: "BUY",
   };
};    
const Reducer = (state = initialState,action)=>{
    if(action.type === "BUY") {
        return{
            numofMobiles: state.numofMobiles - 1,
        };
        }else{
            return state;
    }
};

const store = createStore(Reducer);
console.log("initialState", store.getState());
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(buy_Mobile());
store.dispatch(buy_Mobile());
store.dispatch(buy_Mobile());
store.dispatch(buy_Mobile());
store.dispatch(buy_Mobile());






