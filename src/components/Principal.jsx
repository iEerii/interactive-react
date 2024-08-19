import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThanksPage } from './ThanksPage'
import './../styles/principal.css'
import { Launch } from './Launch'

export const Principal = () => {
    return(
        <BrowserRouter>
            <main className="mainContainer">
                <Routes>
                    <Route path='' element={ <Launch /> } />
                    <Route path='/thank-you/:rating' element={ <ThanksPage /> } />
                </Routes>
            </main>
        </BrowserRouter>
    )
}