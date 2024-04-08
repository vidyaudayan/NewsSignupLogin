import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function SignUpForm() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    return (

        <div className='formDiv'>
            <form className='signup' onSubmit={handleSubmit(onSubmit)}>

                <div className='fieldDiv'>
                    <h2>SignUp</h2>
                    <div className='inputField'>
                        <label>User Name</label>
                        <input  {...register("userName", { required: true, maxLength: 20 })} aria-invalid={errors.userName ? "true" : "false"} />
                        {errors.userName?.type === "required" && <span className='errorSpan'> Name is required</span>}
                        {errors.userName?.type === "maxLength" && <span className='errorSpan' > Name cannot exceed 40 characters</span>}

                    </div>
                    <div className='inputField'>
                        <label>Email Address</label>
                        <input  {...register("emailAddress", { required: true, maxLength: 20 })} />
                        {errors.emailAddress?.type === "required" && <span className='errorSpan' > Email is required</span>}
                        {errors.emailAddress?.type === "maxLength" && <span className='errorSpan' > Email cannot exceed 40 characters</span>}
                    </div>
                    <div className='inputField' >
                        <label>Password</label>
                        <input type='password' {...register("password", { required: true, maxLength: 20 })} />
                        {errors.password?.type === "required" && <span className='errorSpan' > Password is required</span>}
                    </div>

                    <input className='submit' value="Signup" type="submit" />
                    <h4 className=''>You already have an account !!</h4>

                    <Link c to='/login' className="loginBtn">Login</Link>

                </div>
            </form>
        </div>
    )
}

export default SignUpForm