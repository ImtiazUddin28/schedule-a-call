import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const ScheduleEventForm = () => {
  const [value, setValue] = useState()
//   const { setSelected } = props

  const handlerOnScheduleEventSubmit = (e) => {
    e.preventDefault()

    // const form = e.target
    // const name = form.name.value
    // const email = form.email.value
    // const phoneNumber = value
    // const contactMode = form.contactMode.value

  
  }


  return (
    <>
      {/* Schedule Event Form */}
      <div className="schedule-event-form p-8">
        <h1 className="text-xl md:text-2x font-semibold mb-5 text-blue-600">Enter Details</h1>

        <form onSubmit={(e) => handlerOnScheduleEventSubmit(e)}>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Name *
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number *
            </label>

            <PhoneInput
              defaultCountry="BD"
              international
              value={value}
              onChange={setValue}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Preferred Contact Mode *
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="contactMode"
            >
              <option value="zoom">Zoom Conference Call</option>
              <option value="meet">Google Meet Conference Call</option>
              <option value="phone">Phone Call</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#0057FF] rounded-[35px] py-[13px] px-[31px] text-[16px] font-semibold text-white"
          >
            Schedule Event
          </button>
        </form>
      </div>
    </>
  )
}

export default ScheduleEventForm
