import React from 'react';
import ScheduleCalendar from './ScheduleCalendar/ScheduleCalendar';

import ScheduleDetails from './ScheduleDetails/ScheduleDetails';

const Schedule = () => {
    return (
        <div>
            <h1 className='font-bold text-5xl text-center m-20'>Schedule Call</h1>
            <div className='grid grid-cols-2 mx-60'>
                <ScheduleDetails ></ScheduleDetails>
                <ScheduleCalendar></ScheduleCalendar>
            </div>
            
        </div>
    );
};

export default Schedule;