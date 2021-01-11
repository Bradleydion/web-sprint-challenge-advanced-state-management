import React, {useState} from 'react';
import {connect} from "react-redux"
import {addSmurf} from "../actions/index"


const form = ({addSmurf}) => {
    const [formState, setFormState] = useState({
        name:"",
        age:"",
        height:""
    })
}
const handleChange = (e) =>{
    setFormState({...formState, [e.taget.name]:e.target.value})
}
const handleSubmit = e => {
    e.preventDefault(),
    addSmurf(formState);
    setFormState({
        name:"",
        age:"",
        height:"",
    })
}
class AddForm extends React.Component {
    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit  = {handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={handleChange} name="name" id="name" value={formState.name} /><br/>

                    <label htmlFor="age">Age:</label><br/>
                    <input onChange={handleChange} name="age" id="age" value={formState.age} /><br/>

                    <label htmlFor="height">Height:</label><br/>
                    <input onChange={handleChange} name="height" id="height" value={formState.height} />
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}
const mapStateToProps = (state) => {
    return {
        adding:state.adding,
        error:state.error
    }
}
const mapDispatchToProps = {addSmurf};

export default connect (mapStateToProps,mapDispatchToProps) (AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.