function BookingForm() {
    return (
      <div className="flex justify-center items-center">
        <form className="bg-white p-6 rounded-lg shadow-md w-3/4">
          <div className="mb-4">
            <label htmlFor="origin" className="block text-gray-500 mb-2">
              Origin
            </label>
            <input
              type="text"
              id="origin"
              placeholder="Enter Origin"
              className="w-full bg-gray-200 p-3 rounded-md text-black font-bold"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-gray-500 mb-2">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Enter Destination"
              className="w-full bg-gray-200 p-3 rounded-md text-black font-bold"
            />
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-2">
              <label htmlFor="fromDate" className="block text-gray-500 mb-2">
                From
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="fromDate"
                  className="w-full bg-gray-200 p-3 rounded-md text-black font-bold"
                />
                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="toDate" className="block text-gray-500 mb-2">
                To
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="toDate"
                  className="w-full bg-gray-200 p-3 rounded-md text-black font-bold"
                />
                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md font-bold"
          >
            Start Booking
          </button>
        </form>
      </div>
    );
  }
  
  export default BookingForm;
  