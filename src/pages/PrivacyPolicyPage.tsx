import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="relative min-h-[32vh] bg-navy flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, #1C1C1E 0%, #0D1B2A 70%)' }}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">Legal</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h1 className="font-heading font-light text-4xl md:text-5xl text-cream tracking-tight">
            Privacy Policy
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-5 font-body text-text-muted text-base leading-relaxed">
          <p>
            Montreux is committed to safeguarding the use of personal information of our Clients (also referred
            to as &quot;you&quot; and &quot;your&quot;) that we obtain as your Investment Advisor.
          </p>
          <p>
            Montreux does not collect personal non-public information through this website; however, the
            Advisor may collect information from you on application forms, agreements, profile or investment
            policy statements, and other documents received or processed in relation to services we provide. We
            also may collect information from other sources.
          </p>
          <p>
            We do not respond to &quot;do not track&quot; requests because we do not track you over time or
            across third party websites to provide targeted advertising. We may track you across our website to
            help us improve our content.
          </p>
          <p>
            We may use &quot;cookies&quot; and similar online technologies to keep, and sometimes track,
            information about you regarding your usage of our website. Cookies are small data files that are
            sent to your browser or related software from a Web server and stored on your device. Cookies help
            us to collect information about your usage of our website, including date and time of visits, pages
            viewed, amount of time spent on our sites, or general information about the device used to access
            the site, such as the browser used. You can refuse to store or delete cookies by configuring your
            web browser settings. Most browsers and mobile devices have their own settings to manage cookies.
            If you refuse a cookie when on our website, or if you delete cookies, you may experience some
            inconvenience in your use of our website, such as having to re-configure preferences.
          </p>
          <p>
            When you are on this website you may have the opportunity to click-through to other websites,
            including websites operated by unaffiliated third parties. These sites may collect nonpublic
            personal Information about you. We do not control sites operated by these entities and are not
            responsible for the information practices of these sites. This Privacy Policy does not address the
            information practices of other websites. The privacy policies of websites operated by third parties
            are located on those sites.
          </p>
          <p className="pt-4">
            For additional regulatory disclosures, please review our{' '}
            <Link
              to="/disclosures"
              className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
            >
              Disclosures page
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
