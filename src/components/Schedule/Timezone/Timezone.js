import React, { useState } from 'react'
import TimezoneSelect from 'react-timezone-select'

const Timezone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    
      
      <div className="select-wrapper">
        <h1 className='font-semibold pb-2  ml-12 '>Time Zone</h1>
        <TimezoneSelect className='px-12 pb-6'
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
      
   
  )
}
export default Timezone;