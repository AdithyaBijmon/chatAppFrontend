import React from 'react'
import { useState } from 'react'

function Chat() {

    const [message, setMessage] = useState('')
    const [displayMsg, setDisplayMsg] = useState([])

    const handleSend = () => {
        setDisplayMsg(prevMessages => [...prevMessages, message]);
        setMessage('');

    }
  return (
   <div className='w-full p-10'>
            <div className='flex '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPx5Ngn3BqU_b1o4MO5-90QnJXVEdVLYmaA&s" alt="profile-image" width={'50px'} height={'50px'} />
                <div className='flex items-center justify-center ms-5'>
                    <h1 className='font-bold text-xl'>Adithya</h1>
                </div>
            </div>
            <hr className='text-zinc-300 mt-4' />


            <div className="flex flex-col space-y-4 p-4 bg-gray-100 mt-5 ">

                <div className="flex justify-start">
                    <div className="rounded-r-lg rounded-bl-lg bg-sky-500 text-white w-auto p-2">
                        <p>hello</p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="rounded-l-lg rounded-br-lg bg-violet-500 text-white w-auto p-2">
                        <p>haii</p>
                    </div>
                </div>

                <div className="flex justify-start">
                    <div className="rounded-r-lg rounded-bl-lg bg-sky-500 text-white w-auto p-2">
                        <p>how are you?</p>
                    </div>
                </div>
                {
                    displayMsg.length > 0 ?
                        displayMsg?.map(msg => (
                            <div key={msg} className="flex justify-end">
                                <div className="rounded-l-lg rounded-br-lg bg-violet-500 text-white w-auto p-2">
                                    <p>{[...msg]}</p>
                                </div>
                            </div>
                        )) :
                        ''

                } 

            </div>


            <div className='flex p-4 bg-gray-100'>
                <input value={message} onChange={(event) => setMessage(event.target.value)} type="text" placeholder="Enter your text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <div className='flex items-center justify-center ms-5'>

                    <button onClick={handleSend} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><i className="fa-brands fa-telegram text-xl"></i></button>
                </div>
            </div>

        </div>
  )
}

export default Chat