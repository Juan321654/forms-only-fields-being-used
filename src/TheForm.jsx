import React, {useState} from 'react'

function TheForm() {
  const [data, setData] = useState({})
  const handleChange = (e, key) => {
    return setData(prevState => {return {...prevState, [key]: e.target.value}})
  }
  let _obj = {}
  for(let [key, value] of Object.entries(data)){
    if(value.length > 1) _obj[key] = value;
  }
  console.log(_obj);
  return (
    <div>
      <input placeholder="sku" onChange={(e) => handleChange(e, 'sku')}/>
      <input placeholder="title" onChange={(e) => handleChange(e, 'title')}/>
      <input placeholder="location" onChange={(e) => handleChange(e, 'location')}/>
    </div>
  )
}

export default TheForm
