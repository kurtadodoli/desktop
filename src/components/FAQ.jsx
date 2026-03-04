import './FAQ.css'
import { useState } from 'react'

function FAQ({ onBack }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What technologies do you work with?',
      answer: 'I primarily work with React, JavaScript, HTML, and CSS for front-end development. I also use tools like Vite for build tooling and Git for version control. I\'m always learning new technologies to expand my skill set.'
    },
    {
      question: 'Are you available for freelance work?',
      answer: 'Yes! I\'m open to freelance projects and collaborations. Feel free to reach out through the contact page or email me directly at kurtadodoli@gmail.com to discuss your project.'
    },
    {
      question: 'What kind of projects interest you?',
      answer: 'I\'m passionate about creative web applications, interactive experiences, music-related tools, and anything that combines design with technology. I love projects that challenge me to think outside the box.'
    },
    {
      question: 'How can I get in touch with you?',
      answer: 'You can reach me through the contact form on this site, via email at kurtadodoli@gmail.com, or connect with me on any of my social media platforms listed in the links section.'
    },
    {
      question: 'Do you have experience with music production?',
      answer: 'Yes! Music production is one of my passions alongside coding. I create beats and produce tracks, and I\'m always exploring the intersection of music and technology.'
    },
    {
      question: 'What is your development process like?',
      answer: 'I follow a structured approach: understanding requirements, wireframing and design, component-based development, testing, and deployment. I believe in clean code, responsive design, and smooth user experiences.'
    }
  ]

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="faq-container">
      <div className="faq-card">
        <button className="back-btn" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          back
        </button>

        <div className="faq-header">
          <h2 className="page-title">faq</h2>
          <p className="page-subtitle">Frequently asked questions</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${openIndex === idx ? 'active' : ''}`}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                <span className="faq-q-text">{faq.question}</span>
                <span className="faq-toggle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {openIndex === idx ? (
                      <path d="M5 12h14"></path>
                    ) : (
                      <>
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                      </>
                    )}
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
