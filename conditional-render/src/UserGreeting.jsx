
import ProTypes from 'prop-types';

function UserGreeting(props){

    const welcomeMeassage =  <h2 className="welcome-message">Welcome {props.username}</h2> 
    const loginMessage =  <h2 className="login-message">Please log in to continue</h2>

    return(props.isLoggedIn ? welcomeMeassage : loginMessage);
    
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }
}
UserGreeting.prototypes = {
    isLoggedIn: ProTypes.bool,
    username: ProTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreeting