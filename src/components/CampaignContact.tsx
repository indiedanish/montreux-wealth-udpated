import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ovnlvdg';
const TEMPLATE_ID = 'template_212nyof';
const PUBLIC_KEY = 'z2deXBdilW9hIDrIE';

type CampaignContactProps = {
  campaign?: string;
  defaultMessage?: string;
};

export default function CampaignContact({
  campaign = 'Cash Balance Plans',
  defaultMessage = 'I am interested in learning whether a Cash Balance Plan may be appropriate for my situation.',
}: CampaignContactProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [incomeRange, setIncomeRange] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');
  const [message, setMessage] = useState(defaultMessage);
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const btn = document.getElementById('campaign-submit-btn');
      btn?.classList.add('shake');
      setTimeout(() => btn?.classList.remove('shake'), 400);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const profileDetails = [
      businessType && `Business type: ${businessType}`,
      incomeRange && `Approximate income: ${incomeRange}`,
      employeeCount && `Employees: ${employeeCount}`,
    ]
      .filter(Boolean)
      .join('\n');

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone || 'Not provided',
      message: `[${campaign} Inquiry]${profileDetails ? `\n\n${profileDetails}` : ''}\n\n${message}`,
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
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="w-12 h-px bg-gold" />
          <span className="font-body text-xs tracking-widest uppercase text-gold">Request a Consultation</span>
          <div className="w-12 h-px bg-gold" />
        </div>

        <h2 className="font-heading font-light text-3xl md:text-4xl text-navy text-center leading-snug">
          Discover What May Be Possible
          <br />
          for Your Business
        </h2>

        <p className="font-body text-text-muted text-base leading-relaxed max-w-xl mx-auto text-center mt-6">
          Receive a personalized Cash Balance illustration and a review with a Montreux advisor — typically
          within 2 business days. No obligation.
        </p>

        <div className="max-w-2xl mx-auto mt-12 bg-white p-8 md:p-12 shadow-sm">
          {isSuccess ? (
            <div className="text-center py-12" style={{ animation: 'fadeUp 0.6s ease forwards' }}>
              <div className="w-12 h-px bg-gold mx-auto mb-8" />
              <h3 className="font-heading font-semibold text-2xl text-navy">Thank you.</h3>
              <p className="font-body text-text-muted text-sm leading-relaxed mt-4 max-w-sm mx-auto">
                We have received your inquiry and one of our principals will reach out shortly to discuss
                your Cash Balance Plan options.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="campaign-firstName" className={labelClass}>
                    First Name
                  </label>
                  <input
                    id="campaign-firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (errors.firstName)
                        setErrors((prev) => {
                          const n = { ...prev };
                          delete n.firstName;
                          return n;
                        });
                    }}
                    className={`${inputBase} ${fieldBorder('firstName')}`}
                  />
                  {errors.firstName && (
                    <p className="font-body text-xs text-red-400 mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="campaign-lastName" className={labelClass}>
                    Last Name
                  </label>
                  <input
                    id="campaign-lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      if (errors.lastName)
                        setErrors((prev) => {
                          const n = { ...prev };
                          delete n.lastName;
                          return n;
                        });
                    }}
                    className={`${inputBase} ${fieldBorder('lastName')}`}
                  />
                  {errors.lastName && (
                    <p className="font-body text-xs text-red-400 mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="campaign-email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="campaign-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email)
                      setErrors((prev) => {
                        const n = { ...prev };
                        delete n.email;
                        return n;
                      });
                  }}
                  className={`${inputBase} ${fieldBorder('email')}`}
                />
                {errors.email && <p className="font-body text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div className="mt-8">
                <label htmlFor="campaign-phone" className={labelClass}>
                  Phone <span className="normal-case text-text-muted/50">(Optional)</span>
                </label>
                <input
                  id="campaign-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`${inputBase} border-b-gray-200 focus:border-b-gold`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <label htmlFor="campaign-businessType" className={labelClass}>
                    Business Type
                  </label>
                  <select
                    id="campaign-businessType"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full border-b border-gray-200 bg-transparent py-3 text-sm font-body text-text-dark focus:outline-none focus:border-b-gold transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="Medical / Dental">Medical / Dental</option>
                    <option value="Legal">Legal</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="campaign-incomeRange" className={labelClass}>
                    Approximate Annual Income
                  </label>
                  <select
                    id="campaign-incomeRange"
                    value={incomeRange}
                    onChange={(e) => setIncomeRange(e.target.value)}
                    className="w-full border-b border-gray-200 bg-transparent py-3 text-sm font-body text-text-dark focus:outline-none focus:border-b-gold transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="$300K – $500K">$300K – $500K</option>
                    <option value="$500K – $1M">$500K – $1M</option>
                    <option value="$1M – $2M">$1M – $2M</option>
                    <option value="$2M+">$2M+</option>
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="campaign-employeeCount" className={labelClass}>
                  Number of Employees
                </label>
                <select
                  id="campaign-employeeCount"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(e.target.value)}
                  className="w-full border-b border-gray-200 bg-transparent py-3 text-sm font-body text-text-dark focus:outline-none focus:border-b-gold transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="Just me (or me + spouse)">Just me (or me + spouse)</option>
                  <option value="1–3 employees">1–3 employees</option>
                  <option value="4–10 employees">4–10 employees</option>
                  <option value="10+ employees">10+ employees</option>
                </select>
              </div>

              <div className="mt-8">
                <label htmlFor="campaign-message" className={labelClass}>
                  Tell Us About Your Situation <span className="normal-case text-text-muted/50">(Optional)</span>
                </label>
                <textarea
                  id="campaign-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputBase} border-b-gray-200 focus:border-b-gold resize-none`}
                />
              </div>

              <button
                id="campaign-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className={`mt-10 w-full bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300 font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  isSubmitting ? 'opacity-70 cursor-wait' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Get My Custom Plan Illustration'}
              </button>

              <p className="text-center mt-6 font-body text-xs text-text-muted">
                No obligation. Your information is handled with complete confidentiality.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
