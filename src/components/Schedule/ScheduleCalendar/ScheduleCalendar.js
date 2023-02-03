import React, { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function ScheduleCalendar() {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p className='my-6 text-lg font-semibold'>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <div className='border-2'>
      <h1 className="text-xl font-bold mx-16 mt-8">Select a Date & Time</h1>
      <DayPicker className="px-12 py-6"
        styles={{
          caption: { color: 'red' }
        }}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />

    </div>
  );
}
