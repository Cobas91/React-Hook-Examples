const { useState, useEffect, createContext, useContext, useRef } = require("react");

/**
 * useRef
 */
const myBtn = useRef(null)
const clickButton = () => myBtn.current.click()

/**
 * useState Hook
 */
function App() {
    const [count, setCount] = useState(0)
}


/**
 * useEffekt Hook
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
