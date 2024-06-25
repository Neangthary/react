
//propTypes = a mechanism that ensures that the passed value
// is of the correct datatype.
// age: PropTypes.number

// defaultProps = default values for props in case they are not
// passed from the parent component
// name: "Guest"


import PropTyes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes": "No"}</p>
        </div>
    );
}
Student.propTyes = {
    name: PropTyes.string,
    age: PropTyes.number,
    isStudent: PropTyes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 9,
    isStudent: false,
}

export default Student