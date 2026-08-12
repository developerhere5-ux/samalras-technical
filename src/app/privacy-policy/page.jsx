import { buildMetadata, getPageMeta } from '../../data/pageMeta'
import { BUSINESS_NAME, PHONE_DISPLAY } from '../../data/site'
import JsonLd from '../../components/JsonLd'
import LegalLayout from '../../components/LegalLayout'

const PATH = '/privacy-policy'

export const metadata = buildMetadata(PATH)

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd blocks={getPageMeta(PATH).jsonLd} />
      <LegalLayout title="Privacy policy" updated="17 July 2026" path={PATH}>
        <p>
          This policy explains what personal information {BUSINESS_NAME} ("we", "us")
          collects when you use this website or contact us, why we collect it, and the
          choices you have. We keep it short and in plain English, because that is how
          we would want to read it too.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Quote requests:</strong> when you send the quote form, call us or
            message us on WhatsApp, we receive the details you share, typically your
            name, phone number, the service you need and your property details.
          </li>
          <li>
            <strong>Technical data:</strong> like most websites, our hosting provider
            records basic technical logs such as IP address, browser type and pages
            visited, used only to keep the site secure and working.
          </li>
        </ul>

        <h2>How we use your information</h2>
        <ul>
          <li>To reply to your enquiry and prepare your painting quote.</li>
          <li>To schedule site visits and carry out the work you booked.</li>
          <li>To issue invoices, warranties and service records.</li>
        </ul>
        <p>
          We do not sell your personal information, send marketing you did not ask for,
          or share your details with third parties except the service providers that
          make this website work (form delivery and hosting) and where the law requires it.
        </p>

        <h2>Form submissions</h2>
        <p>
          Our quote form is delivered by Web3Forms, which transmits your submission to
          our email inbox and does not store your data for its own purposes. Messages
          sent via WhatsApp are governed by WhatsApp's own terms and privacy policy.
        </p>

        <h2>How long we keep it</h2>
        <p>
          Enquiry details are kept while we handle your request. Records tied to
          completed work (quotes, invoices, warranties) are kept for the warranty
          period and as required by UAE law, then deleted.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us at any time to show you the personal information we hold about
          you, correct it, or delete it where we have no legal obligation to keep it.
          Just call or WhatsApp us at {PHONE_DISPLAY}.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy: {BUSINESS_NAME}, Dubai, United Arab Emirates,
          phone {PHONE_DISPLAY}.
        </p>
      </LegalLayout>
    </>
  )
}
