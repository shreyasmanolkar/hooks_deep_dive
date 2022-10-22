export const INITIAL_STATE = {
    loading: false,
    posts:{},
    error: false
};

// const postReducer = (state, action) => {
//     if(action.type === "FETCH_START"){
//         return{
//             loading: true,
//             error: false,
//             posts:{}
//         }
//     } else if(action.type === "FETCH_SUCCESS"){
//         return{
//             loading: false,
//             error: false,
//             posts: action.payload
//         }
//     } else if(action.type === "FETCH_ERROR"){
//         return{
//             loading: false,
//             error: true,
//             posts: {}
//         }
//     }
// }

export const postReducer = (state, action) => {
    switch(action.type){
        case "FETCH_START":
            return{
                loading: true,
                error: false,
                posts: {},
            };

        case "FETCH_SUCCESS":
            return{
                loading: false,
                error: false,
                posts: action.payload,
            };

        case "FETCH_ERROR":
            return{
                loading: false,
                error: true,
                posts: {},
            };
        
        default:
            return state;
    }
}