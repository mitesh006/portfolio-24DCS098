import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showHelp, setShowHelp] = useState(false)

  const maxChars = 500

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks ${name}! Your message has been received.`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className='contact-section'>
      <div className='contact-container'>
        <h2 className='section-title'>Contact</h2>
        <p className='contact-subtitle'>
          Have a question or want to work together? Send me a message.
        </p>

        {/* Help Tooltip Toggle — useState for UI visibility */}
        <button
          className='help-toggle'
          onClick={() => setShowHelp(!showHelp)}
          aria-expanded={showHelp}
        >
          {showHelp ? 'Hide tips' : 'Show form tips'}
        </button>

        {showHelp && (
          <div className='help-tooltip'>
            <p><strong>Name</strong> — so I know who is reaching out.</p>
            <p><strong>Email</strong> — I will use this to reply.</p>
            <p><strong>Message</strong> — what you want to discuss. Max {maxChars} characters.</p>
          </div>
        )}

        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label className='form-label' htmlFor='contact-name'>Name</label>
            <input
              id='contact-name'
              className='form-input'
              type='text'
              placeholder='Your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <label className='form-label' htmlFor='contact-email'>Email</label>
            <input
              id='contact-email'
              className='form-input'
              type='email'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <label className='form-label' htmlFor='contact-message'>Message</label>
            <textarea
              id='contact-message'
              className='form-textarea'
              placeholder='Write your message here...'
              rows='5'
              maxLength={maxChars}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {/* Live character count — driven by message useState */}
            <span className={`char-count ${message.length >= maxChars ? 'char-count--limit' : ''}`}>
              {message.length} / {maxChars}
            </span>
          </div>

          <button className='form-submit' type='submit'>
            Send Message
          </button>
        </form>

        {/* Real-time preview of the message as the user types */}
        {message.length > 0 && (
          <div className='message-preview'>
            <p className='preview-label'>Preview</p>
            <p className='preview-text'>{message}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
