import { useEffect } from "react"
// this is replacement to useState Hook
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
// components
import WorkoutDetails from '../Components/WorkoutDetails'
import WorkoutForm from '../Components/WorkoutForm'

const Home = () => {
    // we now use global context instead of local state
    const { workouts, dispatch } = useWorkoutsContext()
    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                // this res variable fetch data from backend server
                const response = await fetch('/api/workouts/')
                const json = await response.json()

                if (response.ok) {
                    // this from get all workouts from workoutController file
                    // dispatch make what useState make so its update the data
                    dispatch({ type: 'SET_WORKOUTS', payload: json })
                }
            } catch (error) {
                console.error("Failed to fetch workouts:", error);
            }
        }
        fetchWorkouts()
    }, [dispatch])


    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}
export default Home