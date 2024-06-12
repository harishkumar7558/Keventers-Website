
import { useEffect, useRef } from 'react';
import Whatsnew from "./Whatsnew";
import Ourlegacy from "./Ourlegacy";
import Ourproducts from "./Ourproducts";
import Orders from "./Orders";
import Yellowpart from "./Yellowpart";
export default function Home() {

    const vidRef = useRef();

    
    useEffect(() => { vidRef.current.play(); }, []);
    return (
        <>
            <div className='bg-secondary'>
                <video
                    className='vid'
                    src="./Images/vid.webm"
                    ref={vidRef}
                    muted
                    autoPlay
                    loop
                />
            </div>
            <Whatsnew />
            <Ourlegacy />
            <Ourproducts />
            <Orders />
            <Yellowpart />
        </>
    )
}