import { useNavigate } from "react-router-dom"
import './../styles/survey.css'

export const Survey = () => {
    const navigate = useNavigate();

    const handleSubmit = (opcion) => {
        if (opcion !== null) {
            navigate(`/thank-you/${opcion}`)
        }
    }

    return (
        <div>
            <ul className='surveyNumber'>
                    {[1, 2, 3, 4, 5].map((opcion) => {
                        return <li key={opcion}>
                            <button className="btnOption">{opcion}</button> 
                        </li>
                    })
                }
            </ul>
            <button className="btnSubmit" onClick={() => handleSubmit(opcion)}>
                Submit
            </button>
        </div>      
    )
}