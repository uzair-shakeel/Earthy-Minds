import Link from "next/link";
import { OptimizedImage } from "../components/OptimizedImage";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog | Earthy Minds - Rise of the Wild",
  description:
    "Explore our latest articles on sustainability, eco habits, and the world of Biolysium.",
};

const PLACEHOLDER_POSTS = [
  {
    id: "future-post-1",
    title: "The Science Behind Habit Formation and Eco-Actions",
    excerpt:
      "Discover how the latest behavioral science research informs our approach to eco habit building.",
    date: "Coming Soon",
    author: "The Earthy Minds Team",
    category: "Science",
    thumbnailUrl: "/assets/logo.png",
  },
  {
    id: "future-post-2",
    title: "Meet the Guardians of Biolysium",
    excerpt:
      "A deeper look at the mystical animal guardians that protect the natural balance in our fantasy world.",
    date: "Coming Soon",
    author: "The Earthy Minds Team",
    category: "Game Lore",
    thumbnailUrl: "/assets/logo.png",
  },
  {
    id: "future-post-3",
    title: "Small Actions, Big Impact: Ecological Butterfly Effects",
    excerpt:
      "How your daily choices create ripple effects that can transform our relationship with the natural world.",
    date: "Coming Soon",
    author: "The Earthy Minds Team",
    category: "Ecology",
    thumbnailUrl: "/assets/logo.png",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <div className="max-w-[1232px] mx-auto w-full">
        <Header />
        <div className="bg-[#EDE8D0] w-full mx-auto rounded-[10px] py-14 px-6 md:px-14">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-cinzel mb-4">
              The Earthy Minds Blog
            </h1>
            <p className="text-xl font-lora max-w-2xl mx-auto">
              Inspiration and insights for your ecological journey and
              adventures in Biolysium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {PLACEHOLDER_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-48 bg-orange/20 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="font-cinzel text-lg font-bold">Coming Soon</p>
                    <p className="text-sm">Our blog is under construction</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <span className="bg-orange/20 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-cinzel font-bold text-xl mb-2">
                    {post.title}
                  </h3>
                  <p className="font-lora text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{post.author}</span>
                    <button className="text-orange font-bold hover:underline">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-lora mb-6">
              Our blog is coming soon. Check back later for articles on
              sustainability, game updates, and ecological insights.
            </p>
            <Link
              href="/"
              className="font-cinzel text-black border-2 border-black bg-orange px-6 py-2 rounded-lg text-lg font-bold inline-block"
            >
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
