// Importing the Hook =>
import { createContext, useReducer } from 'react'

// This function create the redux functionality
export const WorkoutsContext = createContext();

// this function get the state value and take action on it (dispatch it)
// the action can be (add, update, delete or edit the state)
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
                // [first add new workout , second sprit the state that has the all previous workouts(...state.workouts)]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter(w => w._id !== action.payload._id)
                /* This line is creating a new state where the workouts array is updated. 
                It uses the filter function to create a new array that includes all workouts 
                except the one with the ID specified in action.payload._id. */
            }
        default:
            return state
    }
}

// This function work inside all application because we put it into index.js file
export const WorkoutsContextProvider = ({ children }) => {
    // dispatch its a function to update the state like setState function
    const [state, dispatch] = useReducer(workoutsReducer, {
        // this is the init value of state
        workouts: null
    })

    return (
        // So We return it to use them inside other component
        // Pay Attention that (...state) its workout object 
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    )
}