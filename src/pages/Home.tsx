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
}

// category
// :
// "technology"
// content_html
// :
// "<p>TypeScript has become the de facto standard for large-scale JavaScript applications. In this article, we explore the latest features and how to leverage them effectively in your projects. The language has evolved significantly since its inception, introducing powerful type inference, conditional types, and template literal types that enable developers to write safer and more maintainable code.</p><p>One of the most compelling reasons to adopt TypeScript is its ability to catch errors at compile time rather than runtime. This shift-left approach to error detection saves countless hours of debugging and reduces production issues. Modern TypeScript also offers excellent IDE support with intelligent autocomplete, refactoring tools, and inline documentation.</p><p>The community has grown exponentially, with major frameworks like Angular, Vue, and React offering first-class TypeScript support. Setting up a new TypeScript project has never been easier thanks to tools like Vite, which provides lightning-fast development experience with hot module replacement. As we move forward, TypeScript continues to innovate with features like satisfies operator, const type parameters, and improved type narrowing that make the developer experience even better.</p>"
// content_text
// :
// "TypeScript has become the de facto standard for large-scale JavaScript applications. In this article, we explore the latest features and how to leverage them effectively in your projects. The language has evolved significantly since its inception, introducing powerful type inference, conditional types, and template literal types that enable developers to write safer and more maintainable code. One of the most compelling reasons to adopt TypeScript is its ability to catch errors at compile time rather than runtime. This shift-left approach to error detection saves countless hours of debugging and reduces production issues. Modern TypeScript also offers excellent IDE support with intelligent autocomplete, refactoring tools, and inline documentation. The community has grown exponentially, with major frameworks like Angular, Vue, and React offering first-class TypeScript support. Setting up a new TypeScript project has never been easier thanks to tools like Vite, which provides lightning-fast development experience with hot module replacement. As we move forward, TypeScript continues to innovate with features like satisfies operator, const type parameters, and improved type narrowing that make the developer experience even better."
// created_at
// :
// "2025-01-15T10:30:00Z"
// description
// :
// "A comprehensive guide to modern TypeScript development practices and best patterns"
// id
// :
// 1
// photo_url
// :
// "https://images.unsplash.com/photo-1516116216624-53e697fedbea"
// title
// :
// "Getting Started with TypeScript in 2025"
// updated_at
// :
// "2025-01-15T10:30:00Z"
// user_id
// :
// 101

const Home = () => {
  const [searchPost, setSearchPost] = useState("");
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = activeCategory === "All" ? blogs : blogs.filter(blog => blog.category === activeCategory);

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
      try {
        const result = await fetch(
          "https://sample-api-black.vercel.app/api/v1/blogs",
        );
        const res = await result.json();
        const blogsData = res.blogs as Blogs[];
        setBlogs(blogsData);
        const uniqueCategories = blogsData.map((blog) => blog.category)
        setCategories(["All", ...uniqueCategories]);

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

            <div className="search-wrapper mx-auto bg-white rounded-lg max-w-[90%]  sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] w-full">
              <div className="search-container relative border border-gray-300 rounded-lg">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <input
                  type="text"
                  placeholder="Search articles by title, description"
                  value={searchPost}
                  onChange={(e) => setSearchPost(e.target.value)}
                  className="search-input py-4 text-black w-full pl-12 pr-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex gap-3">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
