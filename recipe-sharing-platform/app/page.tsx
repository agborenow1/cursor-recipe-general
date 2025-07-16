import Image from "next/image";

const categories = [
  "All",
  "Appetizers",
  "Main Courses",
  "Desserts",
  "Drinks",
  "Snacks",
];

const placeholderRecipes = [
  {
    id: 1,
    title: "Classic Chocolate Cake",
    category: "Desserts",
    ingredients: ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Butter"],
    image: null,
  },
  {
    id: 2,
    title: "Caesar Salad",
    category: "Appetizers",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    image: null,
  },
  {
    id: 3,
    title: "Spaghetti Bolognese",
    category: "Main Courses",
    ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic"],
    image: null,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center px-4 py-6 sm:px-8">
      {/* Header */}
      <header className="w-full max-w-2xl flex flex-col items-center gap-2 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">Recipe Sharing Platform</h1>
        <p className="text-center text-base text-gray-600 dark:text-gray-400">Share and discover delicious recipes from around the world.</p>
        <button className="mt-4 px-6 py-2 bg-foreground text-background rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-black transition">Upload Recipe</button>
      </header>

      {/* Search & Filter */}
      <section className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search recipes..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground bg-white dark:bg-[#18181b]"
        />
        <select className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#18181b] focus:outline-none">
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </section>

      {/* Recipe Grid */}
      <main className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {placeholderRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white dark:bg-[#18181b] rounded-xl shadow p-5 flex flex-col gap-3 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition"
          >
            <div className="h-36 w-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-2">
              {/* Placeholder for image */}
              <span className="text-gray-400">No Image</span>
            </div>
            <h2 className="text-lg font-semibold mb-1">{recipe.title}</h2>
            <span className="text-xs text-gray-500 mb-1">{recipe.category}</span>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside mb-2">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
            <button className="mt-auto px-3 py-1 bg-foreground text-background rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-black text-sm transition">View Details</button>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-gray-400">© {new Date().getFullYear()} Recipe Sharing Platform</footer>
    </div>
  );
}
