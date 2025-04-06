import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Backpage from '../Backpage';

const FormContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !title || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: title,
      message: message,
    };

    emailjs
      .send(
        'service_r125spp', // Service ID
        'template_qpvpw2j', // Template ID
        templateParams,
        'bnUyzrFs3ckfOL59_' // Public Key
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setStatus('Your message has been sent successfully!');
        },
        (err) => {
          console.log('Error sending email:', err);
          setStatus('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div
      className="FormContact px-4"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <form
        className="container card p-lg-5 py-4 px-3"
        style={{
          backgroundColor: 'transparent',
          border: '2px solid #8e00ff',
          borderRadius: '15px',
        }}
        onSubmit={sendEmail}
      >
        <h2 className="text-start  text-light mb-4">Contact Us</h2>

        {/* صف يحتوي على أول اتنين input جنب بعض على الشاشات الكبيرة */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
                         style={{backgroundColor:"transparent",border:"2px solid #8e00ff",color:"white"}}

              type="text"
              className="form-control custom-placeholder"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
                           style={{backgroundColor:"transparent",border:"2px solid #8e00ff",color:"white"}}

              type="email"
              className="form-control custom-placeholder"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* بعد كده العنوان والرسالة تحت بعض */}
        <div className="mb-3">
          <input
                     style={{backgroundColor:"transparent",border:"2px solid #8e00ff",color:"white"}}

            type="text"
            className="form-control custom-placeholder"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
             style={{backgroundColor:"transparent",border:"2px solid #8e00ff",color:"white"}}
            className="form-control custom-placeholder"
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* زرار الإرسال */}
        <div className="text-start">
          <button type="submit" className="btn  px-4 mt-4" style={{backgroundColor:"#8e00ff",color:"white"}}>
            Send
          </button>
        </div>

        {/* رسالة الحالة */}
        {status && (
          <p className="text-center mt-3 text-light">{status}</p>
        )}
      </form>

      {/* هنا نضيف ستايل خاص بالـ placeholder */}
      <style>{`
        .custom-placeholder::placeholder {
          color: white;
          opacity: 1; /* ضروري عشان يظهر اللون */
        }
      `}</style>
      <Backpage />
    </div>
  );
};

export default FormContact;
