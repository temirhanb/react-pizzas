import React from 'react'
import {Route} from 'react-router-dom'
import {Header} from "./components"
import {Cart, Home} from "./pages"


function App() {

    return (
        <div className='wrapper'>
            <Header/>
            <div className='content'>
                <Route exact path='/' render={() => <Home/>}/>
                <Route exact path='/cart' render={() => <Cart/>}/>
            </div>
        </div>
    )
}

export default App