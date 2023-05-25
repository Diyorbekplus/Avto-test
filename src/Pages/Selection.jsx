import React from 'react'
import "../style/css/Selection.css"
import { useGlobalContext } from '../Components/context';

const Selection = () => {
    const { biletNumber,selectBilet, openQuestionsPanel} = useGlobalContext();
    const options = Array.from({ length: 30 }, (_, index) => ({
        value: index + 1,
        label: `${index + 1}`,
      }));
  return (
    <section className={`selection-panel col-10 col-sm-10 col-md-8 col-lg-6`}>
    <label className='text-center alert text-light'>Bilet Tanlang</label>
    <select  className='form-control' value={biletNumber} onChange={(e) =>selectBilet(e.target.value) }>
     {options.map(option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
     ))}
    </select>

    <div className='buttons'>
      <button className='btn' onClick={openQuestionsPanel}>Boshlash</button>
    </div>
    </section>
  )
}

export default Selection