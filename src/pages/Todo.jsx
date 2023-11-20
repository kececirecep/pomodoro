import React, { useState } from 'react'
import { BsFillTrash3Fill } from "react-icons/bs";


const Todo = () => {
  const [tumVeriler, setTumVeriler] = useState([]);
  const [girilenVeri, setGirilenVeri] = useState("");

  const handleChange = (e) => {
    setGirilenVeri(e.target.value)
  }

  const handleAddTask = () => {
    if(girilenVeri===""){
      alert("Önce Veri Giriniz.")
    }else{
      const newData = {
        id: Math.floor(Math.random() * 10000000),
        text: girilenVeri,
        completed:false
      }
      setTumVeriler([...tumVeriler, newData]) 
      setGirilenVeri("")
    } 
  }

  const handleDelete=(itemId)=>{
    const silinecek = tumVeriler.filter(item => item.id !==itemId)
    setTumVeriler(silinecek)
  }
  
  const handleAllDelete =()=>{
    setTumVeriler([])
  }

  const handleAllCompleteDelete=(itemId)=>{
    const tamamlananlariSil = tumVeriler.filter(item => !item.completed);
    setTumVeriler(tamamlananlariSil);
  }


  const handleCompleted = (itemId) => {
    const yeniVeriler = tumVeriler.map((item) => {
      if (item.id === itemId) { 
        return { ...item, completed: !item.completed };
      }
      return item;
    });
  
    setTumVeriler(yeniVeriler);
  };

 

  return (
    <div className='w-1/4 h-screen border-l border-gray-300 p-4 overflow-y-scroll'>
      <div className='flex items-center justify-between border-b border-gray-300 pb-4'>
        <h1 className='text-2xl font-semibold'>Tasks <span className='text-gray-500 text-lg'>{tumVeriler.length}</span></h1>
        <div className='flex gap-4'>
        <button className='text-sm bg-gray-500 p-2 text-white rounded-sm flex items-center gap-4' onClick={handleAllCompleteDelete}>Completed <BsFillTrash3Fill/></button>
        <button className='text-sm bg-red-500 p-2 text-white rounded-sm flex items-center gap-4' onClick={handleAllDelete}>All <BsFillTrash3Fill/></button>
        </div>
      </div>
      <div className='flex justify-between gap-4 mt-4'>
        <input type="text" className='w-3/4 px-4 border focus:outline-blue-500 rounded' placeholder='Add a new task...' onChange={handleChange} value={girilenVeri} />
        <button className='text-sm bg-blue-500 p-2 text-white rounded-sm' onClick={handleAddTask}>Add Task</button>
      </div>
      {
  tumVeriler.map(item => {
    return (
      <div key={item.id} className={`mt-5 w-full flex items-center justify-between card ${item.completed ? 'line-through text-gray-400' : ''}`}>
        <div
          className='p-4 border border-gray-300 rounded-xl flex items-center gap-2 w-3/4'
          onClick={() => handleCompleted(item.id)}
        >
          <input id={`checkboxButton${item.id}`} type="checkbox" className='border-gray-400 bg-gray-400 h-4 w-4' hidden />
          <h3>{item.text}</h3>
        </div>
        <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-3 rounded' onClick={() => handleDelete(item.id)}><BsFillTrash3Fill/></button>
      </div>
    )
  })
}

    </div>
  )
}

export default Todo