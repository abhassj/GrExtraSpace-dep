import { Helmet } from 'react-helmet-async'
import { UKFlag, SAFlag } from '../components/ui/Flags'

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-mist">
      <Helmet>
        <title>Privacy Policy | GR Extra Space</title>
        <meta name="description" content="Privacy Policy for GR Extra Space." />
        <link rel="canonical" href="https://grextraspace.com/privacy-policy" />
      </Helmet>

      <div className="section-wrap">
        <div className="section-inner max-w-3xl mx-auto">
          <h1 className="display-md mb-4 text-brand-navy">Privacy Policy</h1>
          <p className="text-sm uppercase tracking-[0.18em] text-brand-navy/60 font-semibold mb-16">
            Last updated: {currentDate}
          </p>

          <div className="space-y-12 text-base leading-relaxed text-brand-navy/75 md:text-lg">
            
            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">1. Introduction</h2>
              <div className="space-y-4">
                <p>
                  GR Extra Space (“we”, “our”, or “us”) respects your privacy and is committed to protecting any information collected through this website.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <p>
                  We may collect <strong className="font-semibold text-brand-navy">non-personal information</strong> automatically when you interact with our website, including:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 marker:text-brand-navy/40">
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Approximate geographic location (city-level)</li>
                </ul>
                <p>
                  This information does not identify you personally and is used solely for analytics and performance purposes.
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">3. Use of Google Analytics</h2>
              <div className="space-y-4">
                <p>
                  We use <strong className="font-semibold text-brand-navy">Google Analytics</strong>, a web analytics service provided by Google, to understand how visitors interact with our website.
                </p>
                <p>Google Analytics may collect:</p>
                <ul className="list-disc pl-6 space-y-1.5 marker:text-brand-navy/40">
                  <li>IP address</li>
                  <li>Device and browser information</li>
                  <li>Pages visited and user interactions</li>
                </ul>
                <p>
                  This data is processed in accordance with Google’s Privacy Policy and is used strictly to:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 marker:text-brand-navy/40">
                  <li>Improve website performance</li>
                  <li>Enhance user experience</li>
                  <li>Analyze traffic trends</li>
                </ul>
                <p>
                  You can learn more about how Google uses data here:<br/>
                  <a href="https://policies.google.com/privacy" className="text-brand-red hover:underline transition-all" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">4. No Active Personal Data Collection</h2>
              <div className="space-y-4">
                <p>
                  We do <strong className="font-semibold text-brand-navy">not actively collect personal data</strong> such as names, emails, or phone numbers unless you voluntarily provide it by contacting us through:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 marker:text-brand-navy/40">
                  <li>Email</li>
                  <li>Phone</li>
                  <li>External communication channels</li>
                </ul>
                <p>
                  Any information you provide voluntarily will only be used to respond to your inquiry.
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">5. Third-Party Services</h2>
              <div className="space-y-4">
                <p>
                  We may use third-party services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 marker:text-brand-navy/40">
                  <li>Google Analytics</li>
                </ul>
                <p>
                  These services may collect and process data according to their own privacy policies. We do not control how third parties use your data.
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">6. Cookies</h2>
              <div className="space-y-4">
                <p>
                  Our website may use cookies or similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 marker:text-brand-navy/40">
                  <li>Improve functionality</li>
                  <li>Analyze traffic</li>
                  <li>Enhance user experience</li>
                </ul>
                <p>
                  You can choose to disable cookies through your browser settings. However, some parts of the website may not function properly.
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">7. Data Security</h2>
              <div className="space-y-4">
                <p>
                  We implement reasonable technical and organizational measures to protect the information collected through our website.
                </p>
                <p>
                  However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">8. International Users</h2>
              <div className="space-y-4">
                <p>
                  GR Extra Space operates across multiple regions, including the <strong className="font-semibold text-brand-navy">United Kingdom and South Africa</strong>.
                </p>
                <p>
                  By using this website, you acknowledge that your information may be processed in these jurisdictions.
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">9. Your Rights</h2>
              <div className="space-y-4">
                <p>
                  Depending on your location, you may have rights under applicable data protection laws, including:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 marker:text-brand-navy/40">
                  <li>The right to access your data</li>
                  <li>The right to request correction or deletion</li>
                  <li>The right to restrict or object to processing</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the details below.
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">10. Contact Information</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or how your data is handled, you can contact us at:
              </p>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-xl bg-white/40 p-6 border border-brand-navy/5">
                  <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-brand-navy mb-4">
                    <UKFlag className="h-3.5 w-auto rounded-[1px]" /> United Kingdom
                  </h3>
                  <div className="space-y-2 text-brand-navy/75 text-sm md:text-base">
                    <p><strong className="text-brand-navy font-medium">Email:</strong> <a href="mailto:grextraspaceuk@outlook.com" className="hover:text-brand-red transition-colors">grextraspaceuk@outlook.com</a></p>
                    <p><strong className="text-brand-navy font-medium">WhatsApp:</strong> <a href="https://wa.me/447825282654" className="hover:text-brand-red transition-colors" target="_blank" rel="noopener noreferrer">+44 7825282654</a></p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/40 p-6 border border-brand-navy/5">
                  <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-brand-navy mb-4">
                    <SAFlag className="h-3.5 w-auto rounded-[1px]" /> South Africa
                  </h3>
                  <div className="space-y-2 text-brand-navy/75 text-sm md:text-base">
                    <p><strong className="text-brand-navy font-medium">Email:</strong> <a href="mailto:grextraspacersa@outlook.com" className="hover:text-brand-red transition-colors">grextraspacersa@outlook.com</a></p>
                    <p><strong className="text-brand-navy font-medium">WhatsApp:</strong> <a href="https://wa.me/27744613719" className="hover:text-brand-red transition-colors" target="_blank" rel="noopener noreferrer">+27 744613719</a></p>
                  </div>
                </div>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">11. Updates to This Policy</h2>
              <div className="space-y-4">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in legal requirements or our practices.
                </p>
                <p>
                  Any updates will be posted on this page with a revised “Last updated” date.
                </p>
              </div>
            </section>

            <div className="hairline border-b border-brand-navy/10"></div>

            <section>
              <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">12. Consent</h2>
              <p>
                By using this website, you agree to the terms outlined in this Privacy Policy.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
