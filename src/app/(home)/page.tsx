import { Form } from './Form'
import { InfoSection } from '../../components/InfoSection'

export default function Home() {
  return (
    <div className="h-full">
      <InfoSection title="Use uma grana que já é sua e saia do aperto." />
      <section className="bg-white w-full rounded-xl px-6 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10">
        <Form />
      </section>
    </div>
  )
}
