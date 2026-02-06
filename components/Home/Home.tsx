import React from "react"
import ContactForm from "@/components/ContactForm/Contact"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </div>
  )
}

export default Home