const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center text-gray-700">
        <p className="text-sm">&copy; {new Date().getFullYear()} Code-Buddy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
