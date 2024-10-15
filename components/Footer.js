// components/Footer.js
export default function Footer() {
    const currentYear = new Date().getFullYear(); // To dynamically show the current year
    return (
      <footer className="bg-gradient-to-r from-[#C8A2C8] via-[#D8BFD8] to-[#E6E6FA] shadow-inner py-6 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-semibold text-lg">
            &copy; {currentYear} Women in Tech Society. All rights reserved.
          </p>
          <div className="mt-4 space-x-6">
            <a href="/privacy-policy" className="text-white hover:text-[#F5F5F5] transition duration-300">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-white hover:text-[#F5F5F5] transition duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }
  