import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Backpage from '../Backpage';
import { FaUser, FaEnvelope, FaTag, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const FormContact = () => {
  const [form, setForm] = useState({ name: '', email: '', title: '', message: '' });
  const [status, setStatus] = useState(''); // 'success' | 'error' | 'loading' | ''
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.title || !form.message) {
      setStatus('error-fields');
      return;
    }
    setStatus('loading');

    emailjs.send(
      'service_r125spp',
      'template_qpvpw2j',
      { from_name: form.name, from_email: form.email, subject: form.title, message: form.message },
      'bnUyzrFs3ckfOL59_'
    ).then(() => {
      setStatus('success');
      setForm({ name: '', email: '', title: '', message: '' });
    }).catch(() => {
      setStatus('error');
    });
  };

  const inputStyle = (field) => ({
    backgroundColor: 'transparent',
    border: `1.5px solid ${focused === field ? '#8e00ff' : 'rgba(255,255,255,0.12)'}`,
    borderRadius: '10px',
    color: 'white',
    padding: '12px 16px 12px 42px',
    width: '100%',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    boxShadow: focused === field ? '0 0 0 3px rgba(142,0,255,0.15)' : 'none',
  });

  const iconStyle = {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#8e00ff',
    fontSize: '14px',
    pointerEvents: 'none',
  };

  return (
    <>
      <style>{`
        .fc-input::placeholder { color: rgba(255,255,255,0.3); }
        .fc-input:focus { outline: none; }
        .fc-textarea::placeholder { color: rgba(255,255,255,0.3); }
        .fc-textarea:focus { outline: none; }
        .fc-label { font-size: 12px; font-family: 'Fira Code', monospace; color: #9aa3b0; margin-bottom: 6px; display: block; letter-spacing: 0.5px; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .fc-card { animation: fadeInUp 0.5s ease; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .fc-spin { animation: spin 0.8s linear infinite; display: inline-block; }
      `}</style>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 16px 60px',
        position: 'relative',
      }}>

        {/* Background glow */}
        <div style={{
          position: 'fixed', top: '20%', right: '10%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(142,0,255,0.08) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div className="fc-card" style={{
          width: '100%',
          maxWidth: '620px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(142,0,255,0.25)',
          borderRadius: '20px',
          padding: 'clamp(24px, 5vw, 48px)',
          position: 'relative',
          zIndex: 1,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
        }}>

          {/* Top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px',
            background: 'linear-gradient(90deg, transparent, #8e00ff, #c778dd, transparent)',
            borderRadius: '2px',
          }} />

          {/* Header */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontFamily: "'Fira Code', monospace", fontSize: '13px', color: '#8e00ff', marginBottom: '8px' }}>
              // Let's talk
            </p>
            <h2 style={{ color: 'white', fontWeight: '800', fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: 0 }}>
              Get In <span style={{ background: 'linear-gradient(135deg,#8e00ff,#c778dd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
            </h2>
            <p style={{ color: '#9aa3b0', fontSize: '14px', marginTop: '8px', marginBottom: 0 }}>
              I'll get back to you within 24 hours ⚡
            </p>
          </div>

          {/* Form */}
          <form onSubmit={sendEmail}>

            {/* Name + Email */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="fc-label">Your Name</label>
                <div style={{ position: 'relative' }}>
                  <FaUser style={iconStyle} />
                  <input
                    className="fc-input"
                    style={inputStyle('name')}
                    type="text"
                    name="name"
                    placeholder="Mohamed Ibrahim"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="fc-label">Email Address</label>
                <div style={{ position: 'relative' }}>
                  <FaEnvelope style={iconStyle} />
                  <input
                    className="fc-input"
                    style={inputStyle('email')}
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="mb-3">
              <label className="fc-label">Subject</label>
              <div style={{ position: 'relative' }}>
                <FaTag style={iconStyle} />
                <input
                  className="fc-input"
                  style={inputStyle('title')}
                  type="text"
                  name="title"
                  placeholder="Project inquiry / Freelance / etc."
                  value={form.title}
                  onChange={handleChange}
                  onFocus={() => setFocused('title')}
                  onBlur={() => setFocused('')}
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="fc-label">Message</label>
              <textarea
                className="fc-textarea"
                style={{
                  ...inputStyle('message'),
                  padding: '12px 16px',
                  resize: 'vertical',
                  minHeight: '140px',
                  lineHeight: '1.7',
                }}
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
              />
              <div style={{ textAlign: 'right', fontSize: '11px', color: '#555', marginTop: '4px', fontFamily: "'Fira Code', monospace" }}>
                {form.message.length} chars
              </div>
            </div>

            {/* Status messages */}
            {status === 'error-fields' && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(244,67,54,0.1)', border: '1px solid rgba(244,67,54,0.3)',
                borderRadius: '10px', padding: '12px 16px', marginBottom: '16px',
                color: '#ff6b6b', fontSize: '14px',
              }}>
                <FaTimesCircle /> Please fill in all fields.
              </div>
            )}
            {status === 'error' && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(244,67,54,0.1)', border: '1px solid rgba(244,67,54,0.3)',
                borderRadius: '10px', padding: '12px 16px', marginBottom: '16px',
                color: '#ff6b6b', fontSize: '14px',
              }}>
                <FaTimesCircle /> Failed to send. Please try again later.
              </div>
            )}
            {status === 'success' && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.3)',
                borderRadius: '10px', padding: '12px 16px', marginBottom: '16px',
                color: '#00d084', fontSize: '14px',
              }}>
                <FaCheckCircle /> Message sent successfully! I'll reply soon 🎉
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: status === 'loading' ? 'rgba(142,0,255,0.5)' : 'linear-gradient(135deg, #8e00ff, #a020f0)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '13px 32px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 20px rgba(142,0,255,0.35)',
                width: '100%',
                justifyContent: 'center',
              }}
              onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(142,0,255,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(142,0,255,0.35)'; }}
            >
              {status === 'loading' ? (
                <><span className="fc-spin">⏳</span> Sending...</>
              ) : (
                <><FaPaperPlane /> Send Message</>
              )}
            </button>

          </form>
        </div>
      </div>
      <Backpage />
    </>
  );
};

export default FormContact;