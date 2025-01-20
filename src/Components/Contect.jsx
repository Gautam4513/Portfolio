import { EmailJSResponseStatus } from '@emailjs/browser'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';

const Contect = () => {
    const notify = () => toast('Wow so easy !');
    const [loading, setLoading] = useState(false)
    const isMobile = useMediaQuery({
        maxWidth: 1140
    })
    // service_mkgh60k
    const handleSubmit = async (e) => {
        e.preventDefault();
        // notify()
        // setLoading(true)
        try {
            await toast.promise(
                emailjs.send(
                    "service_mkgh60k",
                    "template_wxsi1si",
                    {
                        from_name: name,
                        to_name: "gautam mandaviya",
                        from_email: email,
                        to_email: "gautammandaviya21@gmail.com",
                        message: message
                    },
                    "0Czfq7q5FU1THVdEu"),
                {
                    pending: 'Sending message...',
                    success: 'Successfully sent 👌',
                    error: 'Something went wrong 🤯'
                },
                {
                    position: "top-center",
                }
            );


            setLoading(false)
            setName("")
            setEmail("")
            setMessage("")
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    return (
        <section className='c-space my-20' id='contact'>
            <ToastContainer />
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                {!isMobile && (<img src="./assets/terminal.png" alt="terminal" className='absolute insert-0 min-h-screen' />)}
                <div className='contact-container'>
                    <h3 className='head-text'>Let's Talk</h3>
                    <p className='text-lg text-white-600'>Whether you're looking to build a new website, improve your existing platform, orbring a unique project to life, I'm here to help.</p>
                    <form className='mt-12 flex flex-col space-y-7'
                        onSubmit={(e) => {
                            handleSubmit(e)
                        }} >
                        <label htmlFor="name" className='space-y-3'>
                            <span className='field-label'>
                                Full name
                            </span>
                            <input type="text"
                                required
                                className='field-input'
                                placeholder='Gautam Mandaviya'
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </label>
                        <label htmlFor="email" className='space-y-3'>
                            <span className='field-label'>
                                Email
                            </span>
                            <input type="email"
                                required
                                className='field-input'
                                placeholder='abc@gmail.com'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </label><label htmlFor="message" className='space-y-3'>
                            <span className='field-label'>
                                Your message
                            </span>
                            <textarea
                                name='message'
                                style={{
                                    resize: "none"
                                }}
                                row={5}
                                required
                                className='field-input'
                                placeholder='Hi, I wanna give you a work...'
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                            />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? "sending..." : "Send Message"}
                            <img src="./assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contect