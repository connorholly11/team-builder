import React, {useState} from 'react'

const Form = props => {
    const [form, setForm] = useState({name: "", email:"", role:""});

    const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
    }

    const submitForm = event => {
        event.preventDefault();
        const newMember={
            ...form,
            id: Date.now()
        } 
        props.addNewMember(newMember);
        setForm({name: "", email:"", role:""})
    }

   


    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name"> Name: </label>
                <input
                name="name"
                type="text"
                value={form.name}
                onChange={changeHandler}
                />
                
                <label htmlFor="email"> Email: </label>
                <input
                name="email"
                type="text"
                value={form.email}
                onChange={changeHandler}
                />

                <label htmlFor="role"> Role: </label>
                <input
                name="role"
                type="text"
                value={form.role}
                onChange={changeHandler}
                />
                <button type="submit"> Submit </button>
        </form>
    )
}

export default Form;