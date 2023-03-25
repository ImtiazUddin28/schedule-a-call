import logo from '../../../assets/logo.svg';
import clock from "../../../assets/clock2.png";
import { useContext } from 'react';
import { ScheduleContext } from '../../context/ScheduleContext';
const ScheduleDetails = () => {
  const { selectedTimezone, footer, takenSchedule }=useContext(ScheduleContext)
  let Details = (
    <div className="mx-6">
      <p className="py-2">Agenda:</p>
      <a
        className="block py-1"
        href="/"
      >
        1. Introduction of Softex Solution
      </a>
      <a
        className="block py-1"
        href="/"
      >
        2. Requirement understanding
      </a>
      <a
        className="block py-1"
        href="/"
      >
        3. Similar work showcase
      </a>
      <a
        className="block py-1"
        href="/"
      >
        4. Next actions
      </a>
    </div>
  )
  if (takenSchedule !== '') {
    Details = (
      <div className="mx-6">
        <p className="py-2  text-center lg:text-left mt-6 text-lg font-semibold">
          Agenda:
        </p>
        <a
          className=" text-left mt-6 text-lg font-semibold"
          href="/"
        >
          {footer}
        </a>
        <a
          className="block text-center lg:text-left mt-6  font-semibold"
          href="/"
        >
          Time: {takenSchedule}
        </a>
        <a
          className="block text-center lg:text-left mt-6 font-semibold"
          href="/"
        >
          Time Zone: {selectedTimezone}
        </a>
      </div>
    )
  }
  return (
    <div className="border-[1px] border-b-0 rounded">
      <div className="border-b-[2px]">
        <img
          className="w-4/6 mx-auto py-12"
          src={logo}
          alt="Main Logo"
        />
      </div>
      <div className="mx-6">
        <p className="text-gray-400 my-2 font-semibold">Softex Solution</p>
        <h1 className="font-bold text-2xl mr-16">
          Introduction Call With Softex Solution
        </h1>
      </div>
      <div className="flex my-3">
        <img
          className="w-9 h-9 ml-3"
          src={clock}
          alt="clock"
        />
        <p className="my-2 font-semibold">30 min</p>
      </div>

      {Details}
      <div className="my-6">
        <a
          className="hidden lg:block ml-6 text-sm text-blue-600 hover:underline"
          href="/"
        >
          Cookie settings
        </a>
      </div>
    </div>
  )
}

export default ScheduleDetails;