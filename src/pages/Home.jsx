function Home(){
    var count = 0
    const increaseCount = ()=>{
        count++
        console.log(count)
    }
    const decreaseCount = ()=>{
        count--
        console.log(count)
    }
    return(
        <>
        <h1>Hello World</h1>

        <h1> {count} </h1> 
        <button onClick={increaseCount}> + </button>
        <button onClick={decreaseCount}> - </button>

        </>
    )
}

export default Home