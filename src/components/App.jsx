

function App() {

  return (
    <div className="font-custom bg-custom-bg ">
      <div className="bg-[url('assets/bg-sidebar-mobile.svg')] bg-cover bg-center w-[100%] h-40 text-white ">
        <nav className="flex justify-between w-[50%] m-[auto] pt-10">
        <div className="rounded-full p-1 pr-3 pl-3 font-bold border-2 border-white">1</div>
        <div className="rounded-full p-1 pr-3 pl-3 font-bold border-2 border-white">2</div>
        <div className="rounded-full p-1 pr-3 pl-3 font-bold border-2 border-white">3</div>
        <div className="rounded-full p-1 pr-3 pl-3 font-bold border-2 border-white">4</div>
        </nav>
      </div>
      

      <div className="w-[90%] m-[auto] bg-white" >
        <h1 className="text-4xl font-bold">Personal info</h1>
        <p>Please provide your name,email,address, and phone number</p>
        <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="e.g stephen king"/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="e.g stephenking@gmail.com" />
        <label htmlFor="number">Phone Number</label>
        <input type="number" name="number" id="number" placeholder="+234 8143353" />
        </form>
      </div>

      <div>
        <button>Next Step</button>
        <img src="" alt="" />
      </div>
      
    </div>
  )
}

export default App
