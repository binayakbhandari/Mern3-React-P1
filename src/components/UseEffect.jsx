import { use, useEffect } from 'react';

const LearningUseEffect = ()=>{
    // useEffect(()=>{
    //     console.log("Yeta useEffect bata hai guys !")
    // },[])

    useEffect(()=>{
        console.log("Jahile trigger hunxu mah !")
    })

    return(
        <>
        <h1>UseEffect</h1>

        </>
    )
}

export default LearningUseEffect