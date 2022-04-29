import React, { useState, useRef } from 'react'

export default function Geolocation() {

    // For Counting No.
    const [counter, setCounter] = useState(0);

    // For Quest 1

    const refQuest1 = useRef(null);
    const [messageQuest1, setMessageQuest1] = useState("");
    const [validQuest1, setValidQuest1] = useState(false);

    const getInputValueQuest1 = (e) => {
        e.preventDefault();
        const userValueQuest1 = refQuest1.current.value;
        if (userValueQuest1 === "Answer1") {
            setValidQuest1(true);
            setMessageQuest1("You got the right answer!");
            setCounter(counter + 10);
        }
        else {
            setValidQuest1(false);
            setMessageQuest1("Wrong answer! Try again!");
        }
    }

        // For Quest 2

        const refQuest2 = useRef(null);
        const [messageQuest2, setMessageQuest2] = useState("");
        const [validQuest2, setValidQuest2] = useState(false);
    
        const getInputValueQuest2 = (e) => {
            e.preventDefault();
            const userValueQuest2 = refQuest2.current.value;
            if (userValueQuest2 === "Answer2") {
                setValidQuest2(true);
                setMessageQuest2("You got the right answer!");
                setCounter(counter + 10);
            }
            else {
                setValidQuest2(false);
                setMessageQuest2("Wrong answer! Try again!");
            }
        }

        // For Quest 

        const refQuest3 = useRef(null);
        const [messageQuest3, setMessageQuest3] = useState("");
        const [validQuest3, setValidQuest3] = useState(false);
    
        const getInputValueQuest3 = (e) => {
            e.preventDefault();
            const userValueQuest3 = refQuest3.current.value;
            if (userValueQuest3 === "Answer3") {
                setValidQuest3(true);
                setMessageQuest3("You got the right answer!");
                setCounter(counter + 10);
            }
            else {
                setValidQuest3(false);
                setMessageQuest3("Wrong answer! Try again!");
            }
        }

        // For Quest 4

        const refQuest4 = useRef(null);
        const [messageQuest4, setMessageQuest4] = useState("");
        const [validQuest4, setValidQuest4] = useState(false);
    
        const getInputValueQuest4 = (e) => {
            e.preventDefault();
            const userValueQuest4 = refQuest4.current.value;
            if (userValueQuest4 === "Answer4") {
                setValidQuest4(true);
                setMessageQuest4("You got the right answer!");
                setCounter(counter + 10);
            }
            else {
                setValidQuest4(false);
                setMessageQuest4("Wrong answer! Try again!");
            }
        }

    // For Displaying Achievement
    const [dropdown, setDropDown] = React.useState(false);

    const handleCLick = async () => {
        setDropDown(!dropdown);
    };

    return (
        <div className='tracking-wider'>

            <div className='grid place-items-center py-8'>
                <h1 className='text-fontColor text-6xl'>Answer these questions</h1>
                <div className='mt-2 h-1.5 w-[26rem] bg-primary'></div>
            </div>

            <div className='md:grid md:grid-cols-2 items-center pt-4'>

                <div className='grid grid-cols-1 place-items-center space-y-4 py-4'>
                    <p className="text-3xl text-center">Question1 comes here....</p>
                    <a href='Link goes here' target="_blank" className="text-2xl text-center">Link goes here</a>
                    <input ref={refQuest1} onChange={getInputValueQuest1} placeholder="Type the code here" type="text" className="block w-56 pb-1 text-xl placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                    {messageQuest1 && <div>
                        <p className={validQuest1 ? "text-green-500 text-xl" : "text-red-400 text-xl"} >{messageQuest1}</p>
                    </div>}
                </div>

                <div className='grid grid-cols-1 place-items-center space-y-4 py-4'>
                    <p className="text-3xl text-center">Question2 comes here....</p>
                    <a href='Link goes here' target="_blank" className="text-2xl text-center">Link goes here</a>
                    <input ref={refQuest2} onChange={getInputValueQuest2} placeholder="Type the code here" type="text" className="block w-56 pb-1 text-xl placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                    {messageQuest2 && <div>
                        <p className={validQuest2 ? "text-green-500 text-xl" : "text-red-400 text-xl"} >{messageQuest2}</p>
                    </div>}
                </div>

                <div className='grid grid-cols-1 place-items-center space-y-4 py-4'>
                    <p className="text-3xl text-center">Question3 comes here....</p>
                    <a href='Link goes here' target="_blank" className="text-2xl text-center">Link goes here</a>
                    <input ref={refQuest3} onChange={getInputValueQuest3} placeholder="Type the code here" type="text" className="block w-56 pb-1 text-xl placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                    {messageQuest3 && <div>
                        <p className={validQuest3 ? "text-green-500 text-xl" : "text-red-400 text-xl"} >{messageQuest3}</p>
                    </div>}
                </div>

                <div className='grid grid-cols-1 place-items-center space-y-4 py-4'>
                    <p className="text-3xl text-center">Question4 comes here....</p>
                    <a href='Link goes here' target="_blank" className="text-2xl text-center">Link goes here</a>
                    <input ref={refQuest4} onChange={getInputValueQuest4} placeholder="Type the code here" type="text" className="block w-56 pb-1 text-xl placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                    {messageQuest4 && <div>
                        <p className={validQuest4 ? "text-green-500 text-xl" : "text-red-400 text-xl"} >{messageQuest4}</p>
                    </div>}
                </div>

            </div>

            <div className="grid place-items-center text-4xl my-6">Your Score: {counter}</div>

            <div className='grid place-items-center pb-12'>
                <button className='bg-blue-600 text-white py-2 px-8 rounded-md text-xl md:text-2xl' onClick={handleCLick}>Achievement</button>
                {dropdown && (
                    <div className="py-2 text-lg">Congratulations!! you traveled 560 meters.</div>
                )}
            </div>

        </div>
    )
}
