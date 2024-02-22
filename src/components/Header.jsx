import { useFormContext } from "../context/useFormContext";


export default function Header() {
  const { state } = useFormContext();
  const currentStep = state.step
  const steps = [
    { number: 1, title: 'YOUR INFO', description: 'Step 1' },
    { number: 2, title: 'SELECT PLAN', description: 'Step 2' },
    { number: 3, title: 'ADD-ONS', description: 'Step 3' },
    { number: 4, title: 'SUMMARY', description: 'Step 4' },
  ];

  return (
    <div className="relative w-full h-40 text-white bg-center bg-cover bg-mobile-sidebar md:bg-desktop-view md:h-full">
      <nav className="flex justify-between w-[50%] m-[auto] pt-10 md:block md:w-[80%]">
        {steps.map((step) => (
          <main className="flex" key={step.number}>
            <div
              className={`rounded-full p-1 pr-3 pl-3 font-bold border-2 md:px-4 md:py-2 md:mt-3 ${
                (currentStep === 4 || currentStep === 5) && step.number === 4
                  ? 'bg-light-blue text-marine-blue' 
                  : currentStep === step.number
                  ? 'bg-light-blue text-marine-blue' 
                  : 'border-white'
              }`}
            >
              {step.number}
            </div>
            <span className="hidden pl-5 md:block">
              <h5 className="text-light-gray">{step.description}</h5>
              <h2 className="font-bold">{step.title}</h2>
            </span>
          </main>
        ))}
      </nav>
    </div>
  );
}
