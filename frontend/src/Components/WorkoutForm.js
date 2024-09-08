import { useState } from "react"



const WorkoutForm =()=>{
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('');
    const [reps,setReps] = useState('');
    const [error,setError] = useState(null)
    // function to handle submit
    const handleSubmit=async (e)=>{
        e.preventDefault();

        const workout = {title,load,reps}
        
        const response = await fetch ('http://localhost:4000/api/workouts',{
            method:'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-type':'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null);
            console.log('New exercise added',json)
        }
    }
    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <label>Exercise Title: </label>
            <input
            type='text'
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />

            <label>Exercise load: </label>
            <input
            type='text'
            onChange={(e)=>setLoad(e.target.value)}
            value={load}

            />

            <label>Exercise Reps: </label>
            <input
                type='text'
                onChange={(e)=>setReps(e.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default WorkoutForm;