import { useState } from 'react'

const SendMessageForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
    setFormData((prevState) => ({
      ...prevState,
      email: '',
      firstname: '',
      lastname: '',
      message: ''
    }))
  }

  const handleFormData = (e) => {
    console.log(e.target.name)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="border-rounded w-full bg-tertiary p-12 shadow-box">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-5 text-center"
      >
        <div className="flex w-full flex-col items-center justify-between gap-6 ss:flex-row">
          <label className="w-full">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleFormData}
              className="w-full rounded-[7px] border-[0.6px] border-black bg-white px-5 py-[14px] font-DMSans text-[15px] outline-none "
            />
          </label>

          <label className="w-full">
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleFormData}
              className="w-full rounded-[7px] border-[0.6px] border-black bg-white px-5 py-[14px] font-DMSans text-[15px] outline-none "
            />
          </label>
        </div>

        <label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleFormData}
            className="w-full rounded-[7px] border-[0.6px] border-black bg-white px-5 py-[14px] font-DMSans text-[15px] outline-none "
          />
        </label>

        <label>
          <textarea
            value={formData.message}
            onChange={handleFormData}
            name="message"
            placeholder="Message"
            className="h-[140px] w-full rounded-[7px] border-[0.6px] border-black bg-white px-5 py-[14px] font-DMSans text-[15px] outline-none "
          />
        </label>

        <div>
          <button
            type="submit"
            className="ease cursor-pointer rounded-[7px] border-[0.6px] border-black bg-black px-12 py-[14px] text-center text-[15px] font-semibold text-white duration-200 hover:bg-primary hover:text-black"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default SendMessageForm
