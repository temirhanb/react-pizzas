import React from 'react'
import {Route} from 'react-router-dom'
import {Header} from "./components"
import {Card, Home} from "./pages"


function App() {

    return (
        <div className='wrapper'>
            <Header/>
            <div className='content'>
                <Route exact path='/' render={() => <Home/>}/>
                <Route exact path='/card' render={() => <Card/>}/>
            </div>
        </div>
    )
}

export default App