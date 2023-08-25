

export function Login() {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-2"


        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"

        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"

        >
          Log in
        </button>
      </div>
    </div>
  );
}
