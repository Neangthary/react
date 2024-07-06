

function Button(){

    //events
    const handeClick = (e) => e.target.textContent = "OUCH";

    return(<button onClick={(e) => handeClick(e)}>Click me😍</button>)


    //onClikc conditio
    // let count = 0;
    // const handleClick = (name) =>{
    //     if(count < 3){
    //         count ++;
    //         console.log(`${name} you clcked me ${count} time/s`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // };

    // const handleClick = () => console.log("OUCH"); //arrow function
    // function handleClick() {
    //     console.log("ishdroi")
    // }

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    // return(<button onClick={() =>handleClick("Bro")}>Click me ❤️❤️❤️😊💞❤️ </button>);
}

export default Button 