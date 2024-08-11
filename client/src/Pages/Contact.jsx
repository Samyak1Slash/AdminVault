import { useState } from "react";

export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="We are always ready to help" width="500" height="500" />
                    </div>
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleChange}
                                    required
                                    cols="30"
                                    rows="6"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>
    );
};
