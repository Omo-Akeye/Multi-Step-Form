export const addOns = [
    {
      id: 1,
      name: 'Online service',
      description: 'Access to multiplayer games',
      MonthlyPrice: '$1/mo',
      YearlyPrice : '$10/yr'
    },
    {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      MonthlyPrice: '$2/mo',
      YearlyPrice : '$20/yr'
    },
    {
      id: 3,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      MonthlyPrice: '$2/mo',
      YearlyPrice : '$20/yr'
    },
  ];
  
  
  export const plans = [
    {
      id: 'arcade',
      name: 'Arcade',
      image: './assets/icon-arcade.svg',
      price: {
        monthly: '$9/mo',
        yearly: '$90/yr',
      },
      freeMonths: 2,
    },
    {
      id: 'advance',
      name: 'Advanced',
      image: './assets/icon-advanced.svg',
      price: {
        monthly: '$12/mo',
        yearly: '$120/yr',
      },
      freeMonths: 2,
    },
    {
      id: 'pro',
      name: 'Pro',
      image: './assets/icon-pro.svg',
      price: {
        monthly: '$15/mo',
        yearly: '$150/yr',
      },
      freeMonths: 2,
    },
  ];