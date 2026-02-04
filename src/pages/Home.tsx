import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Search } from "lucide-react";

interface Blogs {
  id: string;
  title: string;
  photo_url: string;
  description: string;
  excerpt: string;
  created_at: string;
  category: string;
  image: string;
  content_text: string;
}

const Home = () => {
  const [searchPost, setSearchPost] = useState("");
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const categoryFiltered = activeCategory === "All" ? blogs : blogs.filter((blog) => blog.category === activeCategory);


  const filteredBlogs = searchPost
    ? categoryFiltered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchPost.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchPost.toLowerCase()) ||
          blog.content_text.toLowerCase().includes(searchPost.toLowerCase())
      )
    : categoryFiltered;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    const getBlogsData = async () => {
      setLoading(true);

      try {
        const result = await fetch(
          "https://sample-api-black.vercel.app/api/v1/blogs",
        );
        const res = await result.json();
        const blogsData = res.blogs as Blogs[];
        setBlogs(blogsData);
        const uniqueCategories = Array.from(new Set(blogsData.map(blog => blog.category)))

        setCategories(["All", ...uniqueCategories]);

        console.log("blogs", res);
      } catch (error) {
        console.log("Fetch error:", error);
        setErrorMsg("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
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

            <div className="search-wrapper mx-auto bg-white rounded-lg max-w-[90%]  sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] w-full">
              <div className="search-container relative border border-gray-300 rounded-lg">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <input
                  type="text"
                  placeholder="Search articles by title, description, or content"
                  value={searchPost}
                  onChange={(e) => setSearchPost(e.target.value)}
                  className="search-input py-4 text-black w-full pl-12 pr-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/*  */}
        {errorMsg && (
          <div className="bg-red-500 text-white p-4 text-center">
            {errorMsg}
          </div>
        )}

        {/*  */}
        <section className="pb-16 pt-10">
          <div className="container mx-auto px-4">
            <div className="flex gap-3 mb-9 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full border transition-colors duration-200
                    ${
                      activeCategory === category
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Latest Articles
            </h2>
            <p className="text-center mb-4">
              {filteredBlogs.length} results found
            </p>
            {loading ? (
              <div className="flex justify-center items-center h-32">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <p className="text-center">No results found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((post) => (
                  <article className="blog-card" key={post.id}>
                    <div className="blog-card-image">
                      <img src={post.photo_url} alt={post.title} />

                      <span className="category-badge">{post.category}</span>
                    </div>

                    <div className="blog-card-body">
                      <h3 className="blog-card-title">{post.title}</h3>

                      <p className="blog-card-excerpt">{post.description}</p>

                      <div className="blog-card-footer">
                        <span className="blog-date">
                          {formatDate(post.created_at)}
                        </span>
                        <a href="#" className="read-more">
                          Read more
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
