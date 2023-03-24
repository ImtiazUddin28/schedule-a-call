import TimezoneSelect from 'react-timezone-select'

const Timezone = ({ selectedTimezone, setSelectedTimezone }) => {
 

  return (
    <div className="select-wrapper">
      <h1 className="font-semibold pb-2 ml-12 text-blue-600">Time Zone</h1>

      <TimezoneSelect
        className="px-12 pb-6"
        value={selectedTimezone}
        onChange={setSelectedTimezone}
      />
    </div>
  )
}
export default Timezone;