const {createStore} = require("redux") //creating store
const initialState={
    numoflaptops:1000,
    numofcameras:50,
}
const buy_laptop = ()=>{
    return{
        type:"BUY"
    }
}
const sell_laptop = ()=>{
    return{
        type:"SELL"
    }
}
const buy_cam = ()=>{
    return{
        type:"BUY_CAM"
    }
}
const sell_cam = ()=>{
    return{
        type:"SELL_CAM"
    }
}
const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "BUY":
            return{
                ...state,
                numoflaptops: state.numoflaptops-1,
            }
        case "SELL":
            return{
                ...state,
                numoflaptops: state.numoflaptops+1,
            }
        case "BUY_CAM":
                return{
                    ...state,
                    numofcameras: state.numofcameras-1,
                }
        case "SELL_CAM":
                return{
                    ...state,
                    numofcameras: state.numofcameras+1,
                }
        default:
            return state;
    }
};
//store
const store= createStore(Reducer);
console.log("Initial state", store.getState());
store.subscribe(()=>{
     console.log(store.getState());
});
store.dispatch(buy_laptop());
store.dispatch(sell_laptop());
store.dispatch(buy_cam());
store.dispatch(sell_cam());