import Header from "./Header"
import LogIn from "./LogIn"


function App() {
  
  

  return (
    <div className="font-custom  ">
    <Header/>
    <LogIn/>
      <div className="mt-4 relative">
        <button className="bg-marine-blue text-white p-4 font-bold absolute right-6">Next Step</button>
      </div>
      
    </div>
  )
}

export default App
