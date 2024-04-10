import { useState } from "react";
import Header from "./Header";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import { prototype } from "postcss/lib/previous-map";

const InputField = ({
    label, labeltype,
    value, setvalue,
    error, seterror,
    type,
}) => {
    const handleChange = (e) => {
        setvalue(e.target.value)
        seterror(false)
    }

    return (
        <div className=" flex flex-col gap-[8px] w-full h-auto p-2 my-2">
            <label
                htmlFor={label}
                className="text-zinc-600 text-base"
            >
                {labeltype}
            </label>
            <input
                value={value}
                onChange={handleChange}
                type={type}
                id={label}
                className={`border-[1.5px] ${error ? "border-red-600" : "border-zinc-500"} rounded-[5px] p-1 px-3 py-2 outline-none`}
            />
            {
                error && <p className="text-red-600 text-sm font-medium font-roboto-regular">This field is required</p>
            }
        </div>
    )
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    labeltype: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setvalue: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    seterror: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};

function Signupform() {
    const navigate = useNavigate()

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [nameError, setnameError] = useState(false)
    const [emailError, setemailError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [confirmpasswordError, setconfirmpasswordError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "" || email === "" || password === "" || confirmpassword === "") {
            if (name === "") setnameError(true)
            if (email === "") setemailError(true)
            if (password === "") setpasswordError(true)
            if (confirmpassword === "") setconfirmpasswordError(true)
        } else {
            navigate('/User-Details')
        }
    }

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="w-full h-auto pt-10 flex flex-col items-center justify-center px-3">
                <div className="w-auto">
                    <h1 className=" w-full  text-center p-5 font-roboto-regular text-3xl">Get started with Teachable</h1>
                    <p className=" text-zinc-500 text-base ">Join more than 100,000 creators who&apos;ve sold over <b className="text-black">$1 Billion</b> in course and coaching</p>
                    <form onSubmit={handleSubmit}>
                        <div className="pt-7 pb-2">
                            <InputField
                                label={"fullname"}
                                labeltype={"Full Name"}
                                type={"text"}
                                value={name}
                                setvalue={setname}
                                error={nameError}
                                seterror={setnameError}
                            />
                            <InputField
                                label={"email"}
                                labeltype={"Email Address"}
                                type={"email"}
                                value={email}
                                setvalue={setemail}
                                error={emailError}
                                seterror={setemailError}
                            />
                            <InputField
                                label={"password"}
                                labeltype={"Password"}
                                type={"password"}
                                value={password}
                                setvalue={setpassword}
                                error={passwordError}
                                seterror={setpasswordError}
                            />
                            <InputField
                                label={"confirm-password"}
                                labeltype={"Confirm Password"}
                                type={"password"}
                                value={confirmpassword}
                                setvalue={setconfirmpassword}
                                error={confirmpasswordError}
                                seterror={setconfirmpasswordError}
                            />
                            <div className=" flex gap-4 p-3 mt-2 ">
                                <input
                                    className="checkboxtandc"
                                    type="checkbox"
                                    name="term-and-condition"
                                    id="term-and-condition"
                                />
                                <p className="text-zinc-700 font-normal text-base">I agree to the <span className="text-black font-normal underline decoration-[1.1px] cursor-pointer">Term of Use</span> and <span className="text-black font-normal underline decoration-[1.1px] cursor-pointer">Privacy Policy</span></p>
                            </div>
                            <div className="py-4 flex items-center justify-center">
                                <button type="submit" className=" rounded-[7px] px-5 py-[5px] text-white bg-black flex items-center justify-center text-base">Create Account</button>
                            </div>
                        </div>
                    </form>
                    <div className="p-2 text-center">
                        <span className="text-black font-roboto-regular">Already have an account? </span>
                        <span className="text-black font-roboto-regular underline decoration-[1.1px] cursor-pointer">Log In</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signupform
