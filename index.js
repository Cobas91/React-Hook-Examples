const { useState, useEffect, createContext, useContext, useRef } = require("react");

/**
 * useRef
 * Access a html element with the tag ref=NameofVariable
 */
const myBtn = useRef(null)
const clickButton = () => myBtn.current.click()

/**
 * useState Hook
 * Access to the State of a Component like this.setState()
 */
function App() {
    const [count, setCount] = useState(0)
}


/**
 * useEffekt Hook
 * On Load Event, Refresh Event and "disconnect" event
 */
useEffect(()=>{
    console.log("This Message will show on every Update on this Component!")
})

useEffect(()=>{
    console.log("This Message will show when the Component ist initialized")
}, [])

useEffect(()=>{
    console.log("This Message will show when State count has Changed")
}, [count])

useEffect(()=>{
    return () => console.log("This Message will show when the Component has been destroyed")
})


/**
 * createContext Hook
 * You can Access some kind of Data like the props. You dont have to pass all the Data down to the last Component to use it.
 * You can refer the Data in this Component you need them
 */
const randomData = {
    firstname: "John",
    lastname: "Doe",
    address: {
      street: "First Street",
      city: "Doe City"  
    },
    phonenumber: 0123456
}

const dataContext = createContext(randomData)
return(
    <>
    <button ref={myBtn} onClick={()=>setCount(count +1)}></button>
    <dataContext.Provider value={dataContext}>
        {accessData()}
    </dataContext.Provider>
    </>
)

function accessData(){
    const data = useContext(dataContext)
    return data
}
