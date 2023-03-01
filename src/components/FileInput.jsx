import React, { useContext, useState } from 'react';
import { generateJSON } from '../scripts/generateJSON';
import { ContextSpoilerLog } from '../contextSpoilerLog';


const FileInput = () => {
  const logContext = useContext(ContextSpoilerLog)
  const [uploadNew, setUploadNew] = useState(false)


  const uploadFile = (event) => {
    let file = event.target.files[0];
    
    if (file) {
      readFileContent(file).then(content => {
        generateJSON(content);
        localStorage.setItem('spoiler-log-txt', content);
        setUploadNew(false);
        logContext.mutate();
        logContext.mutateFullLog();
      }).catch(error => console.log(error))
    }
  }

  const readFileContent = (file) => {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onload = event => resolve(event.target.result)
      reader.onerror = error => reject(error)
      reader.readAsText(file)
    })
  }

  return (
    <div>
      {logContext.getLog() && !uploadNew ? 
      <>
      <div 
        className='p-2 my-2 border-2 rounded-lg text-white bg-slate-700 font-semibold w-fit cursor-pointer'
        onClick={() => setUploadNew(true)}
        >Restart and upload a new file</div>
      </>
      :
      <div className='p-4 bg-slate-200 border-2'>
      <span className='font-medium'>Upload Spoiler Log: </span>
      <input 
        type="file" 
        id="input-file" 
        accept=".txt" 
        onChange={uploadFile}
        className="text-sm"
      />
      </div>
      }
    </div>
  )
}

export default FileInput;