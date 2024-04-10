import PropTypes from "prop-types";
import { useState } from "react";
import Scrollprogress from "./Scrollprogress";

const SelectField = ({ label, labelfor, options, setvalue }) => {
    const handlechange = (e) => setvalue(e.target.value)

    return (
        <div className="flex flex-col justify-center items-start gap-1">
            <label htmlFor={labelfor} className="text-black text-base font-semibold">{label}</label>
            <select
                id={labelfor}
                onChange={handlechange}
                className="border border-black w-full px-2 py-2 rounded-[5px]"
            >
                {
                    options.map((item, index) => <option key={index} value={item}>{item}</option>)
                }
            </select>
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    labelfor: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    setvalue: PropTypes.func.isRequired,
};


const CheckboxField = ({ label, options, values, setValue }) => {
    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            if (values.length < 3) {
                setValue(prevValues => [...prevValues, value]);
            } else {
                e.target.checked = false
            }
        } else {
            setValue(prevValues => prevValues.filter(answer => answer !== value));
        }
    };

    return (
        <div >
            <label className="text-black text-base font-semibold">{label}</label>
            {
                options.map((option, index) => (
                    <div key={index} className=" my-3">
                        <label htmlFor={option} className="text-black text-base ">
                            <input
                                className="border mx-2"
                                type="checkbox"
                                id={option}
                                onChange={handleChange}
                                value={option}
                            />
                            {option}
                        </label>
                    </div>
                ))
            }
        </div>
    );
};

CheckboxField.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    values: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired
};


function Userdetails() {
    const [forbusiness, setforbusiness] = useState("")
    const [workidentity, setworkidentity] = useState("")
    const [workdo, setworkdo] = useState("")
    const [audience, setaudience] = useState("")
    const [yourwork, setyourwork] = useState("")
    const [currentIncome, setcurrentIncome] = useState("")
    const [howMuchContent, sethowMuchContent] = useState("")
    const [hoping, sethoping] = useState([])

    return (
        <>
            <Scrollprogress />
            <div className="w-full h-auto  pt-10 flex flex-col items-center justify-center">
                <div className=" max-w-[600px] px-3">
                    <h1 className="text-3xl font-roboto-regular py-4">Tell us a little more about yourself</h1>
                    <p className=" py-4 font-roboto-regular font-normal">Your answer will help us build an experience to match your needs.</p>
                    <form className="flex flex-col gap-4">
                        <SelectField
                            label={"Do you currently run an online business?"}
                            labelfor={"forbusiness"}
                            setvalue={setforbusiness}
                            options={[
                                "Choose one",
                                "yes",
                                "no"
                            ]}
                        />
                        <SelectField
                            label={"I primarily identify as a:"}
                            labelfor={"workidentity"}
                            setvalue={setworkidentity}
                            options={[
                                "Choose one",
                                "Student",
                                "Entrepreneur",
                                "Artist",
                                "Writer",
                                "Developer/Programmer",
                                "Other"
                            ]}
                        />
                        <SelectField
                            label={"Are you already teaching or offering content online"}
                            labelfor={"workdo"}
                            setvalue={setworkdo}
                            options={[
                                "Choose one",
                                "yes",
                                "no"
                            ]}
                        />
                        <SelectField
                            label={"How big is your current audience (email list, social media followers, subscribers, etc.)?"}
                            labelfor={"audience"}
                            setvalue={setaudience}
                            options={[
                                "Choose one",
                                "0 - 100 people",
                                "101 - 500 people",
                                "501 - 1,000 people",
                                "1,001 - 5,000 people",
                                "5,001 - 10,000 people",
                                "10,001 - 50,000 people",
                                "50,001 - 100,000 people",
                                "100,001 - 500,000 people",
                                "500,001 - 1,000,000 people",
                                "Over 1,000,000 people"
                            ]}
                        />
                        <SelectField
                            label={"Which topic is most relevant to your business or content?"}
                            labelfor={"yourwork"}
                            setvalue={setyourwork}
                            options={[
                                "Choose one",
                                "Photos and Videos",
                                "Photography",
                                "Videography",
                                "Visual Content Creation",
                                "Digital Media Production",
                                "Content Creation",
                                "Media Marketing",
                                "Visual Storytelling",
                                "Graphic Design",
                                "Cinematography"
                            ]}
                        />
                        <SelectField
                            label={"Approximately how much money do you make charging for your knowledge today (in courses, consulting, books, speaking, etc.)? We ask this so that we can provide you with relevant resources for the size and stage of your business."}
                            labelfor={"currentIncome"}
                            setvalue={setcurrentIncome}
                            options={[
                                "Choose one",
                                "I prefer not to answer",
                                "None",
                                "₹0 - ₹50,000",
                                "₹50,001 - ₹2,50,000",
                                "₹2,50,001 - ₹5,00,000",
                                "₹5,00,001 - ₹25,00,000",
                                "₹25,00,001 - ₹50,00,000",
                                "₹50,00,001 - ₹1,00,00,000",
                                "₹1,00,00,001 - ₹5,00,00,000",
                                "Over ₹5,00,00,000"
                            ]}
                        />
                        <CheckboxField
                            label={"What are you hoping to do first on Teachable? (Select up to 3 to get started as quickly as possible)"}
                            values={hoping}
                            setValue={sethoping}
                            options={[
                                "Create an online course",
                                "Create a coaching program",
                                "Create a digital download (ebook, article, template, worksheet, etc.)",
                                "Create a community or forum",
                                "Create a pre-sell",
                                "I'm not sure yet",
                                "Something else (please tell us more)"
                            ]}
                        />
                        <SelectField
                            label={"How much content or training material (videos, worksheets, downloads, etc.) have you already prepared?"}
                            labelfor={"howMuchContent"}
                            setvalue={sethowMuchContent}
                            options={[
                                "Choose one",
                                "None - I'm just getting started",
                                "A few basic resources",
                                "Several resources for beginners",
                                "A moderate amount for intermediate learners",
                                "Extensive content for advanced learners",
                                "A comprehensive library covering various topics",
                                "A vast repository with continuous updates and expansions"
                            ]}
                        />
                        <div className=" my-5 py-5 w-full flex items-center justify-end" >
                            <button className="px-8 py-1 border-[1.8px] border-black rounded-[5px] font-semibold text-base cursor-pointer" type="submit">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Userdetails;
