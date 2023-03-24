import { useState } from "react";
import ScheduleCalendar from "./ScheduleCalendar/ScheduleCalendar";
import ScheduleDetails from "./ScheduleDetails/ScheduleDetails";
import { format } from 'date-fns'

const Schedule = () => {
  
  const [selected, setSelected] = useState('')
  const [takenSchedule, setTakenSchedule] = useState('')
  const [selectedTimezone, setSelectedTimezone] = useState(
     Intl.DateTimeFormat().resolvedOptions().timeZone
   )

let footer = (
  <p className="mt-6 text-lg font-semibold text-blue-600">Pick a date</p>
)
if (selected) {
  footer = (
    <p className="text-center lg:text-left mt-6 text-lg font-semibold">
      {' '}
      {format(selected, 'PP')}
    </p>
  )
}

    return (
      <div>
        <h1 className="font-bold text-3xl lg:text-5xl text-center text-blue-600 m-10">
          Schedule Call
        </h1>
        <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 mx-auto border-[1px] rounded">
          <div>
            <ScheduleDetails
            
              footer={footer}
              selected={selected}
              takenSchedule={takenSchedule}
              selectedTimezone={selectedTimezone}
            />
          </div>
          <div>
            <ScheduleCalendar
              footer={footer}
              selected={selected}
              setSelected={setSelected}
              takenSchedule={takenSchedule}
              setTakenSchedule={setTakenSchedule}
              selectedTimezone={selectedTimezone}
              setSelectedTimezone={setSelectedTimezone}
            />
          </div>
        </div>
      </div>
    )
};

export default Schedule;