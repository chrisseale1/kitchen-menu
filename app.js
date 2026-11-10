// Configuration: Connects to your Formatted Weekly Menu Google Sheet
const SHEET_ID = '113rO8r3vTpdgGwwk9aIILBwQ47XfBYqJ6f_KtYHbtyc';
const TAB_NAME = 'Menu Display';

// Fallback seed recipes in case the spreadsheet is offline or still loading
const SEED_DISHES = [
  {
    name: "Thai Spicy Peanut Butter Noodles",
    category: "Noodles & Pasta",
    imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=700&q=80",
    tags: "15-min Quick, Comfort",
    ingredients: "Noodles, peanut butter, soy sauce, sriracha, lime juice, garlic, green onions, sesame seeds",
    instructions: "Whisk peanut butter, soy sauce, and chili with warm noodle water. Toss hot noodles until glossy and topped with scallions."
  },
  {
    name: "Pasta Pomodoro",
    category: "Noodles & Pasta",
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=700&q=80",
    tags: "Classic, Quick",
    ingredients: "Spaghetti or penne, San Marzano tomatoes, garlic, extra virgin olive oil, fresh basil",
    instructions: "Simmer crushed tomatoes with garlic and olive oil for 15 minutes. Toss with al dente pasta and basil leaves."
  },
  {
    name: "Black Bean, Tomato & Rice Bowl",
    category: "Bowls & Skillets",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
    tags: "High Protein, Whole Food",
    ingredients: "Black beans, jasmine rice, spinach, diced tomatoes, bell pepper, purple onion, olive oil",
    instructions: "Cook rice and top with a sauté of onion, peppers, tomatoes, black beans, and spinach. Season smoky and garlicky."
  },
  {
    name: "Impossible Steak 'Bistro' Bowl",
    category: "Bowls & Skillets",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
    tags: "High Protein, Savory",
    ingredients: "Impossible steak bites, sliced mushrooms, garden vegetable rice pouch, steamed spinach",
    instructions: "Sauté Impossible steak bites and sliced mushrooms. Serve over garden vegetable rice pouch with steamed spinach."
  },
  {
    name: "Sautéed Steak Bites with Mushrooms & Green Beans",
    category: "Bowls & Skillets",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
    tags: "High Protein, Quick",
    ingredients: "Impossible steak bites, sliced mushrooms, green beans, soy sauce, rice wine vinegar, jasmine rice",
    instructions: "Sauté mushrooms and green beans in olive oil, sear steak bites, splash with soy sauce and rice wine vinegar. Serve over warm rice."
  },
  {
    name: "Tuscan Tomato & White Bean Skillet",
    category: "Bowls & Skillets",
    imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    tags: "Comfort, Fiber Rich",
    ingredients: "Cannellini white beans, diced fire-roasted tomatoes, garlic, spinach, Italian seasoning",
    instructions: "Sauté garlic, add white beans and crushed tomatoes. Simmer until thick, fold in spinach until wilted."
  },
  {
    name: "Vegan Egg Scramble with Peppers & Black Beans",
    category: "Breakfast & Scrambles",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80",
    tags: "Breakfast, High Protein",
    ingredients: "JUST Egg or firm tofu, black beans, spinach, diced bell peppers, onion, nutritional yeast",
    instructions: "Sauté peppers and onions until tender, add black beans and egg alternative. Fold together until hot and fluffy."
  },
  {
    name: "Tofu & Mushroom Scramble",
    category: "Breakfast & Scrambles",
    imageUrl: "https://images.unsplash.com/photo-1584947897554-464a93864016?auto=format&fit=crop&w=700&q=80",
    tags: "Breakfast, High Protein",
    ingredients: "Firm tofu pressed and crumbled, cremini mushrooms, spinach, turmeric, garlic powder",
    instructions: "Brown mushrooms in skillet. Add crumbled tofu with turmeric and seasonings. Fold in spinach at the end."
  },
  {
    name: "Vegan Whole Grain Waffles",
    category: "Breakfast & Scrambles",
    imageUrl: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80",
    tags: "Breakfast, Quick",
    ingredients: "Whole grain vegan waffles, pure maple syrup, mixed berries",
    instructions: "Toast waffles until crisp and golden brown. Top with warm berries and maple syrup."
  },
  {
    name: "Quick Energy Plate",
    category: "Breakfast & Scrambles",
    imageUrl: "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=700&q=80",
    tags: "No Cook, Quick",
    ingredients: "Vegan deli slices, fresh mixed berries, whole grain toast",
    instructions: "Assemble deli slices alongside chilled fresh blueberries, strawberries, or raspberries."
  },
  {
    name: "Classic Vegan Cheeseburger",
    category: "Burgers & Mains",
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
    tags: "Comfort, High Protein",
    ingredients: "Plant-based patty (Impossible/Beyond), vegan cheddar slice, lettuce, tomato, whole wheat bun",
    instructions: "Sear patty 3-4 minutes per side. Melt vegan cheddar over the top. Serve on toasted bun with toppings."
  },
  {
    name: "Crispy Impossible Chicken Nuggets",
    category: "Burgers & Mains",
    imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80",
    tags: "Quick, Comfort",
    ingredients: "Impossible chicken nuggets, dipping sauce (BBQ or mustard), steamed green beans",
    instructions: "Air fry or bake at 400°F for 10-12 minutes until deeply golden and crispy."
  },
  {
    name: "Hearty Lentil Soup",
    category: "Soups & Sides",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80",
    tags: "Batch Cook, Comfort",
    ingredients: "Brown lentils, vegetable broth, celery, onions, diced tomatoes, thyme, bay leaf",
    instructions: "Simmer lentils with aromatic vegetables and vegetable broth for 35-40 minutes until tender and rich."
  },
  {
    name: "Garlic Green Beans & Sautéed Spinach",
    category: "Soups & Sides",
    imageUrl: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80",
    tags: "Side Dish, Quick",
    ingredients: "Fresh green beans or tender baby spinach, minced garlic, olive oil, sea salt",
    instructions: "Sauté garlic in olive oil, toss in green beans or spinach until bright green and tender-crisp."
  },
  {
    name: "Vanilla Plant Protein Shake",
    category: "Drinks & Snacks",
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",
    tags: "High Protein, Drink",
    ingredients: "Vanilla plant protein powder, unsweetened almond/oat milk, ice",
    instructions: "Shake vigorously in shaker bottle or blend 30 seconds until creamy and frothy."
  },
  {
    name: "Warm Unsalted Popcorn",
    category: "Drinks & Snacks",
    imageUrl: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=700&q=80",
    tags: "Snack, Whole Grain",
    ingredients: "Air-popped corn kernels, optional light spray olive oil, nutritional yeast or pepper",
    instructions: "Air-pop kernels fresh and dust with nutritional yeast or black pepper."
  }
];

let allDishes = [...SEED_DISHES];
let selectedCategory = 'ALL';

// Helper: Convert Google Drive share links to direct streaming image URLs
function normalizeImageUrl(url) {
  if (!url || !url.trim()) return '';
  const trimmed = url.trim();
  // Check if it's a Google Drive URL
  const driveMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/) || trimmed.match(/id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }
  return trimmed;
}

// Fetch Google Sheet data using Google Visualization API endpoint
async function fetchSheetData() {
  const statusEl = document.getElementById('connectionStatus');
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(TAB_NAME)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Sheet network response failed');
    const text = await res.text();
    // Parse Google's JSON wrapper
    const jsonString = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(jsonString);

    const rows = data.table.rows;
    if (rows && rows.length > 0) {
      const parsedDishes = [];
      rows.forEach(r => {
        const c = r.c;
        const name = c[0] ? (c[0].v || '') : '';
        const category = c[1] ? (c[1].v || '') : '';
        const rawImg = c[2] ? (c[2].v || '') : '';
        const tags = c[3] ? (c[3].v || '') : '';
        const ingredients = c[4] ? (c[4].v || '') : '';
        const instructions = c[5] ? (c[5].v || '') : '';

        if (name && name.trim().length > 0) {
          parsedDishes.push({
            name: name.trim(),
            category: category.trim() || 'Mains',
            imageUrl: normalizeImageUrl(rawImg),
            tags: tags.trim(),
            ingredients: ingredients.trim(),
            instructions: instructions.trim()
          });
        }
      });

      if (parsedDishes.length > 0) {
        allDishes = parsedDishes;
        statusEl.textContent = `● Live Connected to Google Sheet (${allDishes.length} dishes)`;
        statusEl.style.color = '#16a34a';
      }
    }
  } catch (err) {
    console.warn('Could not load from Google Sheets live endpoint, using default seed dishes:', err);
    statusEl.textContent = 'Using preloaded recipes (Connect Google Sheet by setting Share to Anyone with Link)';
  }

  renderMenu();
}

function renderMenu() {
  const container = document.getElementById('menuSections');
  const searchVal = document.getElementById('searchInput').value.toLowerCase().trim();

  // Filter dishes
  const filtered = allDishes.filter(dish => {
    const matchesCat = selectedCategory === 'ALL' || dish.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = !searchVal || 
      dish.name.toLowerCase().includes(searchVal) ||
      dish.ingredients.toLowerCase().includes(searchVal) ||
      dish.tags.toLowerCase().includes(searchVal);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px; color: var(--text-muted);">
        <p style="font-size: 1.5rem; margin-bottom: 8px;">🍽️</p>
        <p style="font-size: 1.1rem; font-weight: 600;">No dishes found matching your criteria</p>
      </div>`;
    return;
  }

  // Group by category
  const groups = {};
  filtered.forEach(dish => {
    const cat = dish.category || 'Other';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(dish);
  });

  let html = '';
  Object.keys(groups).forEach(cat => {
    html += `
      <section class="section-block">
        <h2 class="section-header">${cat}</h2>
        <div class="cards-grid">
          ${groups[cat].map((dish, idx) => {
            const fallbackImg = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80";
            const img = dish.imageUrl || fallbackImg;
            const tagsList = dish.tags ? dish.tags.split(',').map(t => `<span class="dish-tag">${t.trim()}</span>`).join('') : '';

            return `
              <div class="dish-card" onclick="openRecipeModal('${escapeHtml(dish.name)}')">
                <div class="dish-img-wrap">
                  <img src="${img}" alt="${escapeHtml(dish.name)}" loading="lazy" onerror="this.src='${fallbackImg}'">
                </div>
                <div class="dish-info">
                  <h3 class="dish-name">${escapeHtml(dish.name)}</h3>
                  <div class="dish-tags">${tagsList}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function openRecipeModal(dishName) {
  const dish = allDishes.find(d => d.name === dishName);
  if (!dish) return;

  const modal = document.getElementById('recipeModal');
  const fallbackImg = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80";

  document.getElementById('modalImg').src = dish.imageUrl || fallbackImg;
  document.getElementById('modalCategoryBadge').textContent = dish.category;
  document.getElementById('modalTitle').textContent = dish.name;
  document.getElementById('modalIngredients').textContent = dish.ingredients || 'No ingredients listed.';
  
  const instEl = document.getElementById('modalInstructions');
  if (dish.instructions) {
    instEl.textContent = dish.instructions;
    document.getElementById('instructionsContainer').style.display = 'block';
  } else {
    document.getElementById('instructionsContainer').style.display = 'none';
  }

  const tagsContainer = document.getElementById('modalTags');
  if (dish.tags) {
    tagsContainer.innerHTML = dish.tags.split(',').map(t => `<span class="dish-tag">${t.trim()}</span>`).join('');
  } else {
    tagsContainer.innerHTML = '';
  }

  modal.classList.remove('hidden');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  fetchSheetData();

  // Category filter buttons
  document.getElementById('categoryChips').addEventListener('click', (e) => {
    if (e.target.classList.contains('cat-chip')) {
      document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      selectedCategory = e.target.getAttribute('data-category');
      renderMenu();
    }
  });

  // Search input
  document.getElementById('searchInput').addEventListener('input', () => {
    renderMenu();
  });

  // Refresh button
  document.getElementById('refreshBtn').addEventListener('click', () => {
    fetchSheetData();
  });

  // Mood button (Random selector)
  document.getElementById('randomBtn').addEventListener('click', () => {
    if (allDishes.length > 0) {
      const randomDish = allDishes[Math.floor(Math.random() * allDishes.length)];
      openRecipeModal(randomDish.name);
    }
  });

  // Modal close handlers
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('recipeModal').classList.add('hidden');
  });

  document.getElementById('recipeModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('recipeModal')) {
      document.getElementById('recipeModal').classList.add('hidden');
    }
  });
});
