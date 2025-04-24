import { Link } from "react-router-dom";
import heroImg from '../assets/swasthyaImg.png';


export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md animate-fade-in-up">
              Empowering Healthcare <br className="hidden md:block" /> with
              Swasthya Sathi
            </h1>
            <p className="text-lg md:text-xl mb-8">
              A single platform for Patients, Families, and Hospitals to stay
              connected, informed, and stress-free.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/login"
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition shadow-lg"
              >
                Get Started
              </Link>
              <a
                href="#features"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src={heroImg}
              alt="Healthcare illustration"
              className="w-full max-w-md mx-auto animate-fade-in-up"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          About Swasthya Sathi
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Swasthya Sathi is designed to bridge the communication gap in
          healthcare. Whether you're a patient needing quick access to your
          medical records, a family member wanting real-time updates, or a
          doctor coordinating care — Swasthya Sathi brings everyone together on
          a single, secure platform.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Patient Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              For Patients
            </h3>
            <p className="text-gray-700">
              Access medical records, receive live updates, and get mental
              health support — all in one place.
            </p>
          </div>

          {/* Family Member Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">
              For Family Members
            </h3>
            <p className="text-gray-700">
              Stay informed about your loved one’s treatment, progress, and
              interact with healthcare providers.
            </p>
          </div>

          {/* Doctor/Hospital Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              For Doctors & Hospitals
            </h3>
            <p className="text-gray-700">
              Manage patient data, share updates securely, and streamline
              communication with families.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
          What People Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
            <p className="text-gray-800 italic mb-4">
              "Swasthya Sathi helped me stay connected with my mom’s doctors
              while she was hospitalized. The updates were instant and clear."
            </p>
            <h4 className="font-semibold text-blue-700">
              — Aditi Sharma, Daughter
            </h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
            <p className="text-gray-800 italic mb-4">
              "As a doctor, this platform made it so much easier to update
              families and reduce miscommunication during emergencies."
            </p>
            <h4 className="font-semibold text-green-700">
              — Dr. Rajeev Mehra, Cardiologist
            </h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
            <p className="text-gray-800 italic mb-4">
              "Mental health support and live status updates gave me peace of
              mind when I couldn’t be with my brother in the hospital."
            </p>
            <h4 className="font-semibold text-indigo-700">
              — Rohan Verma, Brother
            </h4>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Experience Better Healthcare?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join Swasthya Sathi today and stay connected, informed, and secure.
        </p>
        <Link
          to="/login"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg"
        >
          Get Started
        </Link>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-gray-100 text-gray-700 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* App Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Swasthya Sathi
            </h3>
            <p>Connecting families, patients, and healthcare providers.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Email: support@guardiansuite.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Swasthya Sathi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
