import { WorkoutsContext } from "../context/WorkoutsContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
    // this context is the variable that we get from here >>> value={{ ...state, dispatch }}
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }

    return context
}