import { useNavigate } from "react-router-dom"
import { useState } from "react";
import './../styles/survey.css'

export const Survey = () => {
    const[rating, setRating] = useState(null);
    const navigate = useNavigate();

    const handleRatingClick = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = () => {
        if (rating !== null) {
            navigate(`/thank-you/${rating}`)
            console.log(`El numero ${rating} ha sido elegido`)
        }
    }

    return (
        <div>
            <ul className='surveyNumber'>
                    {[1, 2, 3, 4, 5].map((opcion) => {
                        return <li key={opcion}>
                            <button 
                                type="button"
                                className={`btnOption ${rating === opcion ? 'active' : ''}`}
                                onClick={() => handleRatingClick(opcion)}
                                >
                                {opcion}
                            </button> 
                        </li>
                    })
                }
            </ul>
            <button type="button" className="btnSubmit" onClick={handleSubmit} disabled={rating === null}>
                Submit
            </button>
        </div>      
    )
}