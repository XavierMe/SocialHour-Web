export default function OrganizerHome() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome back 👋</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-lg font-semibold">Total Posts</h2>
            <p className="text-3xl mt-2">3</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-lg font-semibold">Check-ins This Week</h2>
            <p className="text-3xl mt-2">46</p>
          </div>
        </div>
      </div>
    );
  }