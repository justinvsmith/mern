import React, {useState} from 'react';
let hasBeenSubmitted = false;

const UserForm = props => {
    const { inputs, setInputs} = props;


    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    //try destructure it in the function below
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            ...inputs,
        }
        inputs.firstName = "";
        console.log("Welcome", newUser.firstName);
        console.log(e.target);
        hasBeenSubmitted = true;
    }
    

//try something like inputs.firstName to access the information.

    return (
        <div>
            
            <form onSubmit={createUser}>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form</h3>
            }
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" onChange={onChange} name="firstName"/>
                    {
                        inputs.firstName.length <2 && inputs.firstName.length !== 0 ?
                        <p style={{color:'red'}}>"First Name must be more than 2 characters"</p> :
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" onChange={onChange} name="lastName" />
                    {
                        inputs.lastName.length <2 && inputs.lastName.length !== 0 ?
                        <p style={{color:'red'}}>"Last Name must be more than 2 characters"</p> :
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input type="email" onChange={onChange} name="email" />
                    {
                        inputs.email.length <5 && inputs.email.length !==0 ?
                        <p style={{color:'red'}}>"Email must be more than 5 characters"</p> :
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" onChange={onChange} name="password"/>
                    {
                        inputs.password.length < 8  && inputs.password.length > 0 ?
                        <p style={{color:'red'}}>"Password must be at least 8 characters long"</p> :
                        ''
                    }
                    
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" onChange={onChange} name="confirmPassword"/>
                    {
                        inputs.password !== inputs.confirmPassword  ?
                        <p style={{color: 'red'}}>Passwords must match</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create user" />
            </form>
        </div>
    );
};

export default UserForm;