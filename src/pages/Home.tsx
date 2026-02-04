import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {}, []);

  // Mock blog posts data
  const blogPosts = [
    { id: 1, title: "Introduction to React", excerpt: "Learn the basics of React and how to build modern web applications.", date: "2023-10-01" },
    { id: 2, title: "Understanding TypeScript", excerpt: "A comprehensive guide to TypeScript for JavaScript developers.", date: "2023-10-02" },
    { id: 3, title: "TailwindCSS Best Practices", excerpt: "Tips and tricks for using TailwindCSS effectively in your projects.", date: "2023-10-03" },
    { id: 4, title: "Building APIs with Node.js", excerpt: "Step-by-step guide to creating RESTful APIs using Node.js.", date: "2023-10-04" },
    { id: 5, title: "Database Design Principles", excerpt: "Essential principles for designing efficient and scalable databases.", date: "2023-10-05" },
    { id: 6, title: "Frontend Performance Optimization", excerpt: "Techniques to improve the performance of your frontend applications.", date: "2023-10-06" },
    { id: 7, title: "Version Control with Git", excerpt: "Master Git and GitHub for better collaboration and code management.", date: "2023-10-07" },
    { id: 8, title: "Testing in JavaScript", excerpt: "Introduction to unit testing and integration testing in JavaScript.", date: "2023-10-08" },
    { id: 9, title: "Deploying to the Cloud", excerpt: "Guide to deploying your applications to cloud platforms like AWS and Heroku.", date: "2023-10-09" },
    { id: 10, title: "Security Best Practices", excerpt: "Important security practices to protect your web applications.", date: "2023-10-10" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Tech Blog 🚀</h1>
            <p className="text-xl mb-8">Discover the latest in technology, programming, and web development.</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <a href="#" className="text-blue-600 hover:underline">Read more</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
