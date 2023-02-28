import React from 'react';
import { generateJSON } from '../scripts/generateJSON';
import { useSWRConfig } from "swr"

const FileInput = () => {
    
  const { mutate } = useSWRConfig();

  const uploadFile = (event) => {
    let file = event.target.files[0];
    
    if (file) {
      readFileContent(file).then(content => {
        generateJSON(content);
        mutate('spoiler-log');
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
  )
}

export default FileInput;