
import style from './Button.module.css'
function Button(){

    //inline css style. create js variable
    // const styles = {
    //         background-color: "hsl(200, 100%, 50%)",
    //         color: "white",
    //         cursor: "pointer",
    //         padding: "10px",
    //         borderRadius: "10px",
    //         border: "none",
    // }
    return(
        <button className={style.button}>Click me </button>
        // <button style= {styles}>Click me </button>

    );
}

export default Button