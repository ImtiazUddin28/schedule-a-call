import React, { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Timezone from '../Timezone/Timezone';

export default function ScheduleCalendar() {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please select a day.</p>;
  if (selected) {
    footer = <p className='mt-6 text-lg font-semibold'>You selected {format(selected, 'PP')}.</p>;
  }
  return (
    <div className='border-2'>
      <h1 className="text-xl font-bold mx-16 mt-8">Select a Date & Time</h1>
      <DayPicker className="px-12 py-3"
        styles={{
          caption: { color: 'red' }
        }}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
      <Timezone></Timezone>

    </div>
  );
}
