import { Form } from './components/Form'
import { InfoSection } from './components/InfoSection'

export default function Home() {
  return (
    <div className="h-full">
      <InfoSection title="Use uma grana que já é sua e saia do aperto." />
      <section className="bg-white w-full rounded-xl px-12 py-10">
        <Form />
      </section>
    </div>
  )
}
