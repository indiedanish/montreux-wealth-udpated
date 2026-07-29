import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ovnlvdg';
const TEMPLATE_ID = 'template_212nyof';
const PUBLIC_KEY = 'z2deXBdilW9hIDrIE';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = 'Required';
    if (!lastName.trim()) newErrors.lastName = 'Required';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email required';
    if (!message.trim()) newErrors.message = 'Required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const btn = document.getElementById('submit-btn');
      btn?.classList.add('shake');
      setTimeout(() => btn?.classList.remove('shake'), 400);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone || 'Not provided',
      message: message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      setIsSubmitting(false);
      alert('Something went wrong. Please try again or contact us directly.');
      console.error('EmailJS error:', error);
    }
  };

  const inputBase =
    'w-full border-b bg-transparent py-3 text-text-dark font-body text-sm focus:outline-none transition-colors duration-200';

  const labelClass = 'font-body text-xs tracking-widest uppercase text-text-muted mb-2 block';

  const fieldBorder = (field: string) =>
    errors[field] ? 'border-b-red-400 focus:border-b-red-400' : 'border-b-gray-200 focus:border-b-gold';

  return (
    <section id="contact" className="bg-cream py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="w-12 h-px bg-gold" />
          <span className="font-body text-xs tracking-widest uppercase text-gold">Get in Touch</span>
          <div className="w-12 h-px bg-gold" />
        </div>

        {/* H2 */}
        <h2 className="font-heading font-light text-3xl md:text-4xl tracking-wide uppercase text-navy text-center leading-snug">
          Every Meaningful Partnership Begins
          <br />
          with a Single Conversation.
        </h2>

        {/* Intro */}
        <p className="font-body font-light text-text-muted text-base leading-relaxed max-w-xl mx-auto text-center mt-6">
          Share your details below and one of our principals will reach out personally. We handle every
          initial inquiry with the same care and discretion we bring to client relationships.
        </p>

        {/* Form */}
        <div className="max-w-2xl mx-auto mt-16 bg-white p-12 shadow-sm">
          {isSuccess ? (
            <div
              className="text-center py-12"
              style={{ animation: 'fadeUp 0.6s ease forwards' }}
            >
              <div className="w-12 h-px bg-gold mx-auto mb-8" />
              <h3 className="font-heading font-semibold text-2xl text-navy text-center">
                Thank you.
              </h3>
              <p className="font-body text-text-muted text-sm leading-relaxed mt-4 max-w-sm mx-auto text-center">
                We have received your message and one of our principals will be in touch with you
                shortly. We look forward to the conversation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className={labelClass}>First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (errors.firstName) setErrors((prev) => { const n = { ...prev }; delete n.firstName; return n; });
                    }}
                    className={`${inputBase} ${fieldBorder('firstName')}`}
                  />
                  {errors.firstName && (
                    <p className="font-body text-xs text-red-400 mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      if (errors.lastName) setErrors((prev) => { const n = { ...prev }; delete n.lastName; return n; });
                    }}
                    className={`${inputBase} ${fieldBorder('lastName')}`}
                  />
                  {errors.lastName && (
                    <p className="font-body text-xs text-red-400 mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mt-8">
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => { const n = { ...prev }; delete n.email; return n; });
                  }}
                  className={`${inputBase} ${fieldBorder('email')}`}
                />
                {errors.email && (
                  <p className="font-body text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="mt-8">
                <label htmlFor="phone" className={labelClass}>
                  Phone <span className="normal-case text-text-muted/50">(Optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`${inputBase} border-b-gray-200 focus:border-b-gold`}
                />
              </div>

              {/* Message */}
              <div className="mt-8">
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => { const n = { ...prev }; delete n.message; return n; });
                  }}
                  placeholder="How can we help you?"
                  className={`${inputBase} ${fieldBorder('message')} resize-none placeholder:text-gray-300`}
                />
                {errors.message && (
                  <p className="font-body text-xs text-red-400 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                id="submit-btn"
                type="submit"
                disabled={isSubmitting}
                className={`mt-10 w-full bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300 font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  isSubmitting ? 'opacity-70 cursor-wait' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send My Message'}
              </button>

              <p className="text-center mt-6 font-body text-xs text-text-muted">
                Your information is handled with complete confidentiality.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
