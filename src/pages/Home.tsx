import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Blogs {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  console.log("dataaaaa", blogs, blogs.length);

  // fetch blog post
  useEffect(() => {
    const getBlogsData = async () => {
      try {
        const result = await fetch(
          "https://sample-api-black.vercel.app/api/v1/blogs",
        );
        const res = await result.json();

        setBlogs(res.blogs);
        console.log("blogs", res);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    getBlogsData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Tech Blog 🚀</h1>
            <p className="text-xl mb-8">
              Discover the latest in technology, programming, and web
              development.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>

            <div className="mt-8">
              <input
                type="text"
                placeholder="Search articles y title, description"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 search-input"
              />
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Latest Articles
            </h2>
         
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogs.map((post) => (
                    <article className="blog-card" key={post.id}>
                      <div className="blog-card-image">
                        <img src={post.image} alt={post.title} />

                        <span className="category-badge">{post.category}</span>
                      </div>

                      <div className="blog-card-body">
                        <h3 className="blog-card-title">{post.title}</h3>

                        <p className="blog-card-excerpt">{post.excerpt}</p>

                        <div className="blog-card-footer">
                          <span className="blog-date">{post.date}</span>
                          <a href="#" className="read-more">
                            Read more
                          </a>
                        </div>
                      </div>
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
