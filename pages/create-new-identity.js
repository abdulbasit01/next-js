import React, { useState } from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
const CreateNewIdentity = () => {
    const [form, setForm] = useState({
        relaName: "",
        superhero: ""
    })
    const handleChange = ({ target: { value, name } }) => {
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            const res = axios('http://localhost:3000/api/hero', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(form)

            })
            // Router.push('/')
        } catch (error) {

        }
    }
    return (
        <div className='w-25 m-auto'>
            <h2>Add new heror</h2>
            <form onSubmit={handleSubmit}>
                <MDBInput
                    onChange={handleChange}

                    className='my-2' label="Super Hero"
                    type="text"
                    name="superhero"
                />
                <MDBInput
                    onChange={handleChange}

                    className='my-2' label="Real Name"
                    type="text"
                    name="relaName"
                />
                <MDBBtn type="submit">
                    Create Hero
                </MDBBtn>
            </form>
        </div>
    )
}

export default CreateNewIdentity
