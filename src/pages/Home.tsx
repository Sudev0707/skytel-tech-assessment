import { useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div className="min-h-screen flex flex-col border bg-gray-100">
      <main className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Tech Blog 🚀
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Your TailwindCSS setup is working!
        </p>
      </main>
    </div>
  );
};

export default Home;
