import React, { useContext } from 'react';
import { generateJSON } from '../scripts/generateJSON';
import { ContextSpoilerLog } from '../contextSpoilerLog';


const FileInput = () => {
  const logContext = useContext(ContextSpoilerLog)


  const uploadFile = (event) => {
    let file = event.target.files[0];
    
    if (file) {
      readFileContent(file).then(content => {
        generateJSON(content, file.name.replace(".txt", ""));
        localStorage.setItem('spoiler-log-txt', content);
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
    <>
      <label className='py-3 px-2 rounded-md bg-green-700 text-white font-bold cursor-pointer h-fit w-fit'
        htmlFor="input-file">{logContext.getLog() ? "Restart: Upload Spoiler Log" : "Upload Spoiler Log"}</label>
      <input 
        className="text-sm"
        type="file" 
        id="input-file" 
        accept=".txt" 
        onChange={uploadFile}
        hidden
      />
    </>
  )
}

export default FileInput;