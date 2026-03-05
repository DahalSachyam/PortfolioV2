import { useState } from "react";
import emailjs from "@emailjs/browser";
import { userEmail, userGithub, userLinkedin } from "../data";


const EMAILJS_SERVICE_ID = "service_pvqcisf";
const EMAILJS_TEMPLATE_ID = "template_jkvqa9b";
const EMAILJS_PUBLIC_KEY = "C51UKVKexL8Y9ELYD";

function SocialLink({ href, children, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("sending");

    try {
        await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
            name: form.name,
            email: form.email,
            message: form.message,
            time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
        );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
        </div>
        <p className="text-center text-gray-400 mt-4 mb-10">Have a project in mind or just want to say hello? Drop me a message!</p>

        {status === "success" && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
            Something went wrong. Please try again or email me directly.
          </div>
        )}

        <div className="bg-gray-950 rounded-2xl border border-gray-800 p-6 sm:p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1.5">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1.5">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1.5">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your project..."
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none" />
          </div>
          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className={`w-full py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-indigo-600/20 ${
              status === "sending"
                ? "bg-indigo-800 text-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-500 text-white"
            }`}
          >
            {status === "sending" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Sending...
              </span>
            ) : "Send Message"}
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <SocialLink href={userGithub} label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.21 3.438 9.63 8.205 11.188.6.112.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"/></svg>
          </SocialLink>
          <SocialLink href={userLinkedin} label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </SocialLink>
          <SocialLink href={`mailto:${userEmail}`} label="Email">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </SocialLink>
        </div>
      </div>
    </section>
  );
}