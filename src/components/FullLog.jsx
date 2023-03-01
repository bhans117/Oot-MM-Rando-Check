import React, { useContext } from 'react';
import TabHeader from './TabHeader';
import { ContextSpoilerLog } from '../contextSpoilerLog';

const FullLog = () => {
  const logContext = useContext(ContextSpoilerLog)

  const getRows = (fullLog) => {
    let rowCount = 0;
    for (let i = 0; i < fullLog.length; i++) {
      let char = fullLog[i];
      if (char === '\n') {
        rowCount++
      }
    }
    return rowCount + 2;
  }

  return (
    <div>
      <TabHeader>Full Log</TabHeader>
      {logContext.fullLog && <textarea value={logContext.fullLog} readOnly rows={getRows(logContext.fullLog)} className='w-full focus:outline-none p-2 resize-none'></textarea>}
    </div>
  )
}

export default FullLog;