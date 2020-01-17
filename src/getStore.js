import guid from 'guid'
import { createStore} from "redux";

const todos = [{
    id: guid.raw(),
    text: "Collect Wood",
    done: false
},{
    id: guid.raw(),
    text: "Invent the pickaxe",
    done: true
},{
    id: guid.raw(),
    text: "Explore cave",
    done: false
}]

const defaultState = {
    todos,
    showDone: false
}

const reducer = (state = defaultState, action) => {
    console.log(action);
    const { type, todo } = action;
    if( type === "SUBMIT_TODO") {
        state = {
            ...state,
            todos: [...state.todos, todo]
        }
    }
    return state;
}

export default () => createStore(reducer)