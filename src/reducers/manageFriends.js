export function manageFriends(state, action){
    switch(action.type){
        case "ADD_FRIEND":
            state.friends.push(action.friend)
            return {friends: state.friends}
        case "REMOVE_FRIEND":
            return {friends: state.friends.filter(friend => friend.id !== action.id)}
        default:
            return state
    }
}

let state = {friends: []}
