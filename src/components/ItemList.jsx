import React, { useContext } from 'react';
import ItemCheck from './ItemCheck';
import { ContextSpoilerLog } from '../contextSpoilerLog';

const ItemsList = () => {
  const logContext = useContext(ContextSpoilerLog)


  return (
    <div>
      <div className='font-semibold text-lg my-5'>
        Items
      </div> 

      {logContext.getItemList() && logContext.getItemList().map((value, i) => 
        <div key={i}>
          <ItemCheck data={value}/>
        </div>
      )}
    </div>
  )
}

export default ItemsList;