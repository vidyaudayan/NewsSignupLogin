import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className='formDivlog'>
            <form className='signup' onSubmit={handleSubmit(onSubmit)}>

                <div className='fieldDiv'>
                    <h2>LogIn</h2>

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

                    <input className='submit' value="Login" type="submit" />
                    <div className='checkBox'>
                        <input type="checkbox" />
                        <h6>Keep me logged in</h6>
                    </div>
                    <p className='forget'>Forget your Password?</p>


                </div>
            </form>
        </div>
    )
}

export default LoginForm