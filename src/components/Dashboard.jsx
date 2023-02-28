import React from 'react';
import FileInput from './FileInput';
import useSWR from 'swr';
import Location from './Location';

const Dashboard = () => {
  const {data, error, isLoading } = useSWR('spoiler-log');

  return (
    <div className="p-10">
      <FileInput />
      {data && <><div className='text-xs'>Seed: {data['Seed'].secret}</div>
      <div className='text-xs font-light'>Version: {data['Version'].secret}</div>
      <div><div className='font-semibold text-lg my-5'>Locations</div> {Object.values(data['Location List']).filter(value => value.value != null).map((value, i) => 
        <div key={i}><Location data={value}/></div>
      )}</div></>}
    </div>
  )
}

export default Dashboard;