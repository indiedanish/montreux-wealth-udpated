'use client';

import TrackedExternalLink from '@/components/analytics/TrackedExternalLink';
import TrackedLink from '@/components/analytics/TrackedLink';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-28">
      <h2 className="font-heading font-light text-2xl md:text-3xl text-navy">{title}</h2>
      <div className="mt-6 space-y-5 font-body text-text-muted text-base leading-relaxed">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export default function DisclosuresPage() {
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
            Disclosures
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          <Section title="Important Disclaimers">
            <P>
              Montreux Group LLC (&quot;Montreux&quot;) is a Registered Investment Advisor (&quot;RIA&quot;),
              located in the State of New York. Montreux provides investment advisory and related services for
              clients nationally. Montreux will maintain all applicable registration and licenses as required
              by the various states in which Montreux conducts business, as applicable. Montreux renders
              individualized responses to persons in a particular state only after complying with all
              regulatory requirements, or pursuant to an applicable state exemption or exclusion.
            </P>
          </Section>

          <Section title="Terms of Use">
            <P>
              Please read these terms and conditions of use (&quot;Terms&quot;) carefully before using the
              website located at montreuxwealth.com (&quot;Website&quot;) or any of the information or services
              provided by Montreux Group LLC (collectively &quot;Montreux&quot;, &quot;we&quot;, &quot;our&quot;,
              &quot;us&quot;) in connection with the Website. By using the Website, you acknowledge that you
              have read and understood these Terms and accept to be legally bound by them. If you do not accept
              and agree to these Terms, you are not an authorized user of the Website or any of the information
              or services provided by Montreux in connection with the Website and should promptly terminate all
              use thereof. The terms &quot;you&quot; and &quot;your&quot; mean you and any entity you may
              represent in connection with the use of the Website. You may use your browser to download or print
              a copy of these Terms for your records.
            </P>
            <P>
              Montreux reserves the right to change, modify, add or remove portions of these Terms at any time
              for any reason. We suggest that you review these Terms periodically for changes. Such changes
              shall be effective immediately upon posting. You acknowledge that by accessing our Website after we
              have posted changes to these Terms, you are agreeing to these Terms as modified.
            </P>
            <P>These Terms were last updated on July 24, 2026.</P>
          </Section>

          <Section title="Risk Disclosure">
            <P>
              Different types of investments involve varying degrees of risk. Therefore, it should not be
              assumed that future performance of any specific investment or investment strategy will be
              profitable.
            </P>
            <P>
              Asset allocation may be used in an effort to manage risk and enhance returns. It does not,
              however, guarantee a profit or protect against loss. Performance of the asset allocation
              strategies depends on the underlying investments.
            </P>
            <P>
              This website is intended to provide general information about Montreux and its services. It is
              not intended to offer or deliver investment advice in any way. Information regarding investment
              services are provided solely to gain an understanding of our investment philosophy, our strategies
              and to be able to contact us for further information.
            </P>
            <P>
              Market data, articles and other content on this website are based on generally available
              information and are believed to be reliable. Montreux does not guarantee the accuracy of the
              information contained in this website. The information is of a general nature and should not be
              construed as investment advice.
            </P>
            <P>
              Please remember that it remains your responsibility to advise Montreux, in writing, if there are
              any changes in your personal/financial situation or investment objectives for the purpose of
              reviewing/evaluating/revising our previous recommendations and/or services, if you would like to
              impose, add, or to modify any reasonable restrictions to our investment advisory services.
            </P>
            <P>
              Montreux will provide all prospective clients with a copy of our current Form ADV, Part 2A
              (&quot;Disclosure Brochure&quot;), Form ADV Part 2B, which is the Brochure Supplement for each
              advisory person supporting a particular client. You may obtain a copy of these disclosures on the
              SEC website at{' '}
              <TrackedExternalLink
                href="https://adviserinfo.sec.gov"
                label="SEC adviserinfo.sec.gov"
                linkLocation="disclosures_page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
              >
                adviserinfo.sec.gov
              </TrackedExternalLink>{' '}
              or you may contact us at{' '}
              <TrackedExternalLink
                href="mailto:f.hasan@montreuxwealth.com"
                label="f.hasan@montreuxwealth.com"
                linkLocation="disclosures_page"
                linkType="email"
                className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
              >
                f.hasan@montreuxwealth.com
              </TrackedExternalLink>{' '}
              to request a free copy via .pdf or hardcopy.
            </P>
          </Section>

          <Section title="Privacy Disclosures">
            <P>
              Montreux is committed to safeguarding the use of personal information of our Clients (also
              referred to as &quot;you&quot; and &quot;your&quot;) that we obtain as your Investment Advisor,
              as described in our Privacy Policy.
            </P>
            <P>
              Montreux does not collect personal non-public information through this website; however, the
              Advisor may collect information from you on application forms, agreements, profile or investment
              policy statements, and other documents received or processed in relation to services we provide.
              We also may collect information from other sources.
            </P>
            <P>
              We do not respond to &quot;do not track&quot; requests because we do not track you over time or
              across third party websites to provide targeted advertising. We may track you across our website
              to help us improve our content.
            </P>
            <P>
              We may use &quot;cookies&quot; and similar online technologies to keep, and sometimes track,
              information about you regarding your usage of our website. Cookies are small data files that are
              sent to your browser or related software from a Web server and stored on your device. Cookies help
              us to collect information about your usage of our website, including date and time of visits,
              pages viewed, amount of time spent on our sites, or general information about the device used to
              access the site, such as the browser used. You can refuse to store or delete cookies by
              configuring your web browser settings. Most browsers and mobile devices have their own settings to
              manage cookies. If you refuse a cookie when on our website, or if you delete cookies, you may
              experience some inconvenience in your use of our website, such as having to re-configure
              preferences.
            </P>
            <P>
              When you are on this website you may have the opportunity to click-through to other websites,
              including websites operated by unaffiliated third parties. These sites may collect nonpublic
              personal Information about you. We do not control sites operated by these entities and are not
              responsible for the information practices of these sites. This Privacy Policy does not address the
              information practices of other websites. The privacy policies of websites operated by third
              parties are located on those sites.
            </P>
            <P>
              For a copy of the Montreux Privacy Policy, please{' '}
              <TrackedLink
                href="/privacy-policy"
                tracking={{ type: 'nav', item: 'Privacy Policy', location: 'disclosures_page' }}
                className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
              >
                click here
              </TrackedLink>
              .
            </P>
          </Section>
        </div>
      </section>
    </main>
  );
}
