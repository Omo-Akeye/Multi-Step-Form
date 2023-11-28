import React from 'react'

export default function MonthlyPlan() {
  return (
      <div>
        <h1 className='text-4xl text-marine-blue font-bold'>Select your plan</h1>
        <p>You have the option of choosing monthly or yearly billing.</p>
        <span>
          <img src="/public/assets/icon-arcade.svg" alt="" />
          <div>
            <h2>Arcade</h2>
            <h4>$9/mo</h4>
          </div>
        </span>
        <span>
          <img src="/public/assets/icon-advanced.svg" alt="" />
          <div>
            <h2>Advanced</h2>
            <h4>$12/mo</h4>
          </div>
        </span>
        <span>
          <img src="/public/assets/icon-pro.svg" alt="" />
          <div>
            <h2>Pro</h2>
            <h4>$15/mo</h4>
          </div>
        </span>

        <footer>
          <h2>Monthly</h2> <input type="checkbox" name="" id="" /> <h2>Yearly</h2>
        </footer>
    </div>
  )
}
