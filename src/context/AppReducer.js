export default function appReducer(state,action){
   
    switch (action.type) {
        case 'ADD':
            return{
                tasks:[...state.tasks,action.payload]
            } 
            
        case 'GET':
            return {
                tasks: [...action.payload]
            }

        default:
            break;
    }
    
}