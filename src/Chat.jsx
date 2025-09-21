import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from './redux/chatSlice';

// This component uses Tailwind CSS for styling.

const getMessageStyle = (senderId, myId) => {
    const isSender = senderId === myId;
    return {
        textAlign: isSender ? 'right' : 'left',
        backgroundColor: isSender ? '#8b5cf6' : '#0ea5e9', // Violet for my messages, Sky for others
        color: 'white',
        borderRadius: isSender ? '12px 0px 12px 12px' : '0px 12px 12px 12px',
        padding: '8px 12px',
        marginBottom: '8px',
        maxWidth: '70%',
        marginLeft: isSender ? 'auto' : '10px',
        marginRight: isSender ? '10px' : 'auto',
    };
};

function Chat() {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);
    const status = useSelector((state) => state.chat.status);
    const myId = useSelector((state) => state.chat.myId);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = () => {
        if (inputMessage.trim() && myId) { 
           
            const payload = {
                message: inputMessage,
                senderId: myId, 
            };

            dispatch({ type: 'chat/sendMessage', payload: payload });
            setInputMessage('');
        }
    };

    const handleSend = () => {
        sendMessage();
    };

    return (
        <div className='w-full p-10 font-sans'>
            <div className='flex items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPx5Ngn3BqU_b1o4MO5-90QnJXVEdVLYmaA&s" alt="profile" className='w-12 h-12 rounded-full' />
                <div className='ms-5'>
                    <h1 className='font-bold text-xl'>Adithya</h1>
                    <p className='text-sm text-gray-500'>Status: {status}</p>
                </div>
            </div>
            <hr className='text-zinc-300 mt-4' />

            <div className="flex flex-col space-y-2 p-4 bg-gray-100 mt-5 h-96 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} style={getMessageStyle(msg.senderId, myId)} className="w-auto p-2">
                        <p>{msg.message}</p>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className='flex p-4 bg-gray-100'>
                <input
                    value={inputMessage}
                    onChange={(event) => setInputMessage(event.target.value)}

                    type="text"
                    placeholder="Enter your text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className='flex items-center ms-5'>
                    <button
                        onClick={handleSend}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2"
                    >
                        <i className="fa-brands fa-telegram text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;