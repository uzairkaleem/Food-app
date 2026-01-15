const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Made with ❤️ using Next.js and TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
