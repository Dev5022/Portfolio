import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import './Contact.css';

const Contact = () => {
    const formRef = useRef<any>();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: any) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("");

        emailjs
            .send(
                'service_hjkdhy1', // Paste your Service ID here
                'template_8gg3na9', // Paste your Template ID here
                {
                    from_name: form.name,
                    to_name: "Dev Patel",
                    from_email: form.email,
                    to_email: "devpatel@example.com",
                    message: form.message,
                },
                'BYpTb2pomr31KNgfJ' // Paste your Public Key here
            )
            .then(
                () => {
                    setLoading(false);
                    setStatusMessage("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    setStatusMessage("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="contact-form-wrapper"
                >
                    <p className="section-sub-text">Get in touch</p>
                    <h3 className="section-head-text">Contact.</h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="contact-form"
                    >
                        <label className="form-label">
                            <span className="label-text">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                className="form-input"
                                required
                            />
                        </label>
                        <label className="form-label">
                            <span className="label-text">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your web address?"
                                className="form-input"
                                required
                            />
                        </label>
                        <label className="form-label">
                            <span className="label-text">Your Message</span>
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What you want to say?"
                                className="form-input"
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>

                        {statusMessage && (
                            <p className="status-message" style={{ marginTop: '1rem', color: 'white' }}>
                                {statusMessage}
                            </p>
                        )}
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="contact-earth-wrapper"
                >
                    {/* Could add another 3D element here, for now just a placeholder visual or map */}
                    <div className="earth-placeholder">
                        🌐
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
