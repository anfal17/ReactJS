import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App with MyApp func!</h1>
        </div>
    )
}

const anotheruser = 'chai aur react'

const anotherElement = (
    <a href='https://google.com'>Visit</a>
)


const reactElement = React.createElement(
    'a',
    {href:'https://google.com' , target:'_blank'},
    'click me to visit google',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // MyApp()
    // <MyApp/>
    // anotherElement
    // reactElement
    <App/>

)
