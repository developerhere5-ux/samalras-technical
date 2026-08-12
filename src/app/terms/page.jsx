import { buildMetadata, getPageMeta } from '../../data/pageMeta'
import { BUSINESS_NAME, PHONE_DISPLAY } from '../../data/site'
import JsonLd from '../../components/JsonLd'
import LegalLayout from '../../components/LegalLayout'

const PATH = '/terms'

export const metadata = buildMetadata(PATH)

export default function TermsPage() {
  return (
    <>
      <JsonLd blocks={getPageMeta(PATH).jsonLd} />
      <LegalLayout title="Terms and conditions" updated="17 July 2026" path={PATH}>
        <p>
          These terms apply to quotations issued and services provided by{' '}
          {BUSINESS_NAME} ("we", "us") in Dubai, United Arab Emirates. By accepting a
          quotation or booking a service, you agree to them.
        </p>

        <h2>Quotations</h2>
        <ul>
          <li>Quotations are free, written and fixed for the scope they describe.</li>
          <li>A quotation is valid for 30 days from the date it is issued.</li>
          <li>
            Work outside the quoted scope (extra rooms, repairs discovered after
            opening up a surface, customer-requested changes) is quoted separately
            before we proceed. We never add charges without your written approval.
          </li>
        </ul>

        <h2>Scheduling and access</h2>
        <ul>
          <li>Agreed start dates and durations are stated on the quotation.</li>
          <li>
            You agree to provide access to the property and, where required by your
            building or community, arrange the necessary permits. We assist with
            permit paperwork on request.
          </li>
          <li>
            If we need to reschedule for reasons within our control, we tell you as
            early as possible and your quote does not change.
          </li>
        </ul>

        <h2>Payment</h2>
        <ul>
          <li>Payment terms (deposit and balance) are stated on each quotation.</li>
          <li>The balance is due on completion, after your walkthrough inspection.</li>
          <li>We accept bank transfer, cash and major cards.</li>
        </ul>

        <h2>Workmanship warranty</h2>
        <ul>
          <li>
            Interior painting is covered by a written workmanship warranty against
            peeling, flaking and blistering caused by application defects.
          </li>
          <li>
            Exterior painting and waterproofing carry a warranty of up to 5 years, as
            stated on your quotation.
          </li>
          <li>
            The warranty does not cover damage caused by structural movement, water
            ingress from unrepaired sources, impact, or alterations made by others.
          </li>
        </ul>

        <h2>Our responsibility</h2>
        <p>
          We carry liability insurance and take full care of your property: furniture
          covered, floors masked and a clean handover. If our team damages something,
          tell us within 48 hours of handover and we will repair or compensate it.
          Our total liability for any claim is limited to the value of the affected work.
        </p>

        <h2>Cancellations</h2>
        <p>
          You may cancel or reschedule free of charge up to 48 hours before the agreed
          start. Deposits for cancellations within 48 hours cover materials already
          purchased for your project; anything unused is refunded.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the United Arab Emirates and the
          Emirate of Dubai. Disputes are subject to the exclusive jurisdiction of the
          Dubai courts.
        </p>

        <h2>Contact</h2>
        <p>
          {BUSINESS_NAME}, Dubai, United Arab Emirates, phone {PHONE_DISPLAY}.
        </p>
      </LegalLayout>
    </>
  )
}
