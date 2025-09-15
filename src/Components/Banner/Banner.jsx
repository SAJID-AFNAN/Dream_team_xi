
const Banner = () => {
  return (
    <div className="absolute w-full top-816 max-w-6xl">
      <div className=" border border-gray-400 rounded-xl md:max-w-4xl mx-auto px-5 py-4">
        <div className="md:max-w-4xl m h-72 mx-auto rounded-2xl p-8 text-center  md:flex md:flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-white to-yellow-100">
          <h2 className="text-2xl font-bold mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates and news right in your inbox!
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 w-2/3 mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 shadow-md hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
