function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-900 px-4 sm:px-6 py-20 sm:py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-blue-400 text-base sm:text-lg mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Interested in working together? Feel free to get in touch with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-950 border border-gray-700 rounded-2xl p-5 sm:p-6 md:p-8">

            {/* Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">

              {/* Email */}
              <a
                href="mailto:your-email@gmail.com"
                className="bg-gray-900 border border-gray-700 rounded-xl p-5 hover:border-blue-500/50 transition duration-300"
              >
                <p className="text-blue-400 text-sm mb-2">
                  Email
                </p>

                <p className="text-white font-medium break-all">
                  ashisinghrajput4803@gmail.com
                </p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Aashi48Singh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 border border-gray-700 rounded-xl p-5 hover:border-blue-500/50 transition duration-300"
              >
                <p className="text-blue-400 text-sm mb-2">
                  GitHub
                </p>

                <p className="text-white font-medium break-all">
                  github.com/Aashi48Singh
                </p>
              </a>

            </div>

            {/* Message */}
            <div className="text-center">
              <p className="text-gray-400 leading-relaxed mb-6">
                You can contact me through email or connect with me on
                GitHub to discuss projects, opportunities, or collaborations.
              </p>

              {/* Send Email Button */}
              <a
                href="mailto:ashisinghrajput4803@gmail.com"
                className="inline-block w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 font-medium"
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