import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// components import 
import WorkoutDetails from '../Components/WorkoutDetails'
import WorkoutForm from '../Components/WorkoutForm';

const Home = () => {
    const {workouts,dispatch} = useWorkoutsContext()
   

    useEffect(() => {

        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
            const json = await response.json();

            if (response.ok) {
               dispatch({type:'SET_WORKOUTS' ,payload:json})
            }
        }
        fetchWorkouts()
    }, [dispatch])

    return (
        <div className='home'>
            <div className='workouts'>
                {workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home