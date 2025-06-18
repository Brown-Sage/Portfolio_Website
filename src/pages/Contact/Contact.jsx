import { Linkedin } from "lucide-react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Let’s connect! Find me here:
                </p>
              </div>

              {/* Social Icons Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center mt-12">
                {/* LinkedIn Card */}
                <div className="bg-[#0a1437] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-blue-400/20">
                  <div className="bg-pink-500/10 p-6 rounded-full mb-4">
                    <Linkedin className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
                  <p className="text-gray-300 mb-4 text-center break-all"></p>
                  <a href="https://linkedin.com/in/aryan-tak-508642298" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition font-semibold">Visit</a>
                </div>
                {/* Instagram Card */}
                <div className="bg-[#0a1437] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-pink-400/20">
                  <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 p-6 rounded-full mb-4">
                    <FaInstagram className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Instagram</h3>
                  <p className="text-gray-300 mb-4 text-center break-all"></p>
                  <a href="https://instagram.com/aaryan_hehe23" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition font-semibold">Visit</a>
                </div>
                {/* Twitter Card */}
                <div className="bg-[#0a1437] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-blue-400/20">
                  <div className="bg-blue-400/10 p-6 rounded-full mb-4">
                    <FaTwitter className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Twitter</h3>
                  <p className="text-gray-300 mb-4 text-center break-all"></p>
                  <a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition font-semibold">Visit</a>
                </div>
                {/* Email Card */}
                <div className="bg-[#0a1437] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-red-400/20">
                  <div className="bg-red-500/10 p-6 rounded-full mb-4">
                    <MdEmail className="w-12 h-12 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Email</h3>
                  <p className="text-gray-300 mb-4 text-center break-all">luckytak60@gmail.com</p>
                  <a href="mailto:luckytak60@gmail.com" className="px-4 py-2 rounded-lg border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition font-semibold">Send Email</a>
                </div>
                {/* Telegram Card */}
                <div className="bg-[#0a1437] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-cyan-400/20">
                  <div className="bg-cyan-400/10 p-6 rounded-full mb-4">
                    <FaTelegramPlane className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Telegram</h3>
                  <p className="text-gray-300 mb-4 text-center break-all"></p>
                  <a href="https://t.me/Itzaaryan23" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition font-semibold">Visit</a>
                </div>
              </div>
            </div>

            {/* Remove the contact form/mail service */}
            {/* <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl"> ... </div> */}
          
        </div>
      </section>
    </main>
  );
}
