import { useState } from "react"
import "./app.css"
import FormInput from "./components/FormInput"

const App = () => {
    const [username,setUsername] = useState("")

    console.log(username)
    return <div className="app">
        <form>
            <FormInput placeholder="Username" setUsername={setUsername}/>
            <FormInput placeholder="Email"/>
            <FormInput placeholder="Full name"/>
            <FormInput placeholder="Phone Number"/>
        </form>
    </div>
}

export default App;