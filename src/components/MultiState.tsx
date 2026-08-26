import React, { useState } from "react";

function Form() {
    const [formData , setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        password: ""

    })
// Validate if the form contains all necessary data
   function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
) {
    event.preventDefault()

    if (!formData.firstName) {
        alert("Name is required")
        return
    }

    if (!formData.email) {
        alert("Email is required")
        return
    }

    if (!formData.password) {
        alert("Password is required")
        return
    }

    console.log(formData)
}

    return (
        <form onSubmit={handleSubmit} action="">
             <label>
                FirstName {formData.firstName}
                <input value={formData.firstName} onChange={(event) => setFormData({
                    ...formData,
                    firstName: event.target.value
                })} type="text" />
            </label>
             <label>
                LastName {formData.lastName}
                <input value={formData.lastName} onChange={(event) => setFormData({
                    ...formData,
                    lastName: event.target.value
                })} type="text" />
            </label>
             <label>
                Email {formData.email}
                <input value={formData.email} onChange={(event) => setFormData({
                    ...formData,
                    email: event.target.value
                })} type="text" />
            </label>
             <label>
                Phone {formData.phone}
                <input value={formData.phone} onChange={(event) => setFormData({
                    ...formData,
                    phone: event.target.value
                })} type="text" />
            </label>
             <label>
                Address {formData.address}
                <input value={formData.address} onChange={(event) => setFormData({
                    ...formData,
                    address: event.target.value
                })} type="text" />
            </label>
             <label>
                City {formData.city}
                <input value={formData.city} onChange={(event) => setFormData({
                    ...formData,
                    city: event.target.value
                })} type="text" />
            </label>
             <label>
                Country {formData.country}
                <input value={formData.country} onChange={(event) => setFormData({
                    ...formData,
                    country: event.target.value
                })} type="text" />
            </label>
             <label>
                Password {formData.password}
                <input value={formData.password} onChange={(event) => setFormData({
                    ...formData,
                    password: event.target.value
                })} type="text" />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form