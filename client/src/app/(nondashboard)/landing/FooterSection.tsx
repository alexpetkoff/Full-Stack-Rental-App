import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4">
            <Link
              href="/"
              className="text-xl font-[900] transition-all duration-300 hover:text-secondary-600"
              scroll={false}
            >
              RENTIFUL
            </Link>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-6 flex-col md:flex-row">
              <li>
                <Link
                  className="text-sm font-bold hover:text-secondary-600 transition-all duration-300"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-bold hover:text-secondary-600 transition-all duration-300"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-bold hover:text-secondary-600 transition-all duration-300"
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-bold hover:text-secondary-600 transition-all duration-300"
                  href="/privacy"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-bold hover:text-secondary-600 transition-all duration-300"
                  href="/terms"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-bold hover:text-secondary-600 transition-all duration-300"
                  href="/cookies-policy"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="text-center pt-4">All rights reserved!</p>
      </div>
    </footer>
  );
};

export default FooterSection;
