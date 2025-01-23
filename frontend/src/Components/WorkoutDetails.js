import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {

    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: workout })
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            {/* <p><strong>Time: </strong>{workout.createdAt}</p> */}
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className='material-symbols-outlined' onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails