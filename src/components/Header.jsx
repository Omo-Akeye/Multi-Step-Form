

export default function Header ({currentStep}) {
 return (
    <div className="bg-[url('assets/bg-sidebar-mobile.svg')] bg-cover bg-center w-[100%] h-40 text-white relative">
    <nav className="flex justify-between w-[50%] m-[auto] pt-10">
   
    <div className={`rounded-full p-1 pr-3 pl-3 font-bold border-2 ${currentStep === 1 ? 'bg-light-blue text-marine-blue' : 'border-white'}`}>
          1
        </div>
        <div className={`rounded-full p-1 pr-3 pl-3 font-bold border-2 ${currentStep === 2 ? 'bg-light-blue text-marine-blue' : 'border-white'}`}>
          2
        </div>
    <div className={`rounded-full p-1 pr-3 pl-3 font-bold border-2 ${currentStep === 3 ? 'bg-light-blue text-marine-blue' : 'border-white'}`}>
          3
        </div>
    <div className={`rounded-full p-1 pr-3 pl-3 font-bold border-2 ${currentStep === 4 ? 'bg-light-blue text-marine-blue' : 'border-white'}`}>
          4
        </div>
    </nav>
  </div>
  )
}
