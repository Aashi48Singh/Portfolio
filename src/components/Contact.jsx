function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-900 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-base text-blue-400 sm:text-lg">
            Get In Touch
          </p>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto max-w-2xl leading-relaxed text-gray-400">
            Interested in working together? Feel free to get in touch with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-700 bg-gray-950 p-5 sm:p-6 md:p-8">

            {/* Contact Options */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

              {/* Email */}
              <a
                href="mailto:ashisinghrajput4803@gmail.com"
                className="
                  rounded-xl
                  border
                  border-gray-700
                  bg-gray-900
                  p-5
                  transition
                  duration-300
                  hover:border-blue-500/50
                  hover:bg-gray-800
                "
              >
                <p className="mb-2 text-sm text-blue-400">
                  Email
                </p>

                <p className="break-all font-medium text-white">
                  ashisinghrajput4803@gmail.com
                </p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Aashi48Singh"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  border
                  border-gray-700
                  bg-gray-900
                  p-5
                  transition
                  duration-300
                  hover:border-blue-500/50
                  hover:bg-gray-800
                "
              >
                <p className="mb-2 text-sm text-blue-400">
                  GitHub
                </p>

                <p className="break-all font-medium text-white">
                  github.com/Aashi48Singh
                </p>
              </a>

            </div>

            {/* Message */}
            <div className="text-center">

              <p className="mb-6 leading-relaxed text-gray-400">
                You can contact me through email or connect with me on GitHub
                to discuss projects, opportunities, or collaborations.
              </p>

              {/* Send Email Button */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashisinghrajput4803@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-600
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  duration-300
                  hover:bg-blue-700
                  sm:w-auto
                "
              >
                Send Me an Email
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;