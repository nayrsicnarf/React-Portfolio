import React, { useState } from "react";
import { validateEmail } from "../../utils/helper";

export default function ContactForm() {

    const [email, setEmail] = useState("");
    const [inputName, setInputName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "inputName") {
            setInputName(inputValue);
        } else if (inputType === "message") {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage("Enter a valid email");
            return;
        }
        if (!inputName) {
            setErrorMessage("Enter a name");
            return;
        }
        if (!message) {
            setErrorMessage("Enter a message");
            return;
        }
        setErrorMessage("");
        setEmail("");
        setInputName("");
        setMessage("");
    };

    return (
        <div>
            <h1>Contact</h1>
            <form className="form">

                {/* Email */}
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />

                {/* Name */}
                <input
                    value={inputName}
                    name="inputName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />

                {/* Message */}
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your message here"
                />

                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>

            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}