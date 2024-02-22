import { useFormContext } from '../App';

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
    <div className="bg-mobile-sidebar bg-cover bg-center w-full  h-40 text-white relative md:bg-desktop-view md:h-full">
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
            <span className="pl-5 hidden md:block">
              <h5 className="text-light-gray">{step.description}</h5>
              <h2 className="font-bold">{step.title}</h2>
            </span>
          </main>
        ))}
      </nav>
    </div>
  );
}
