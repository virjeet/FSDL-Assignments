# ✦ WanderLux — Luxury Travel Agency Website

A fully functional travel agency website built with **Node.js**, **Express**, and **Handlebars** templating. Uses an in-memory NoSQL-style data store (no external database required to run).

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
cd travel-agency
npm install
```

### 2. Start the server
```bash
npm start
```

### 3. Open your browser
```
http://localhost:3000
```

---

## 📁 Project Structure

```
travel-agency/
├── server.js              # Express app entry point
├── package.json
├── data/
│   └── db.js              # In-memory NoSQL store (destinations, packages, bookings)
├── routes/
│   └── index.js           # All route handlers
├── views/
│   ├── layouts/
│   │   └── main.hbs       # Base HTML layout
│   ├── partials/
│   │   ├── navbar.hbs
│   │   └── footer.hbs
│   ├── home.hbs
│   ├── destinations.hbs
│   ├── destination-detail.hbs
│   ├── packages.hbs
│   ├── book.hbs
│   ├── confirmation.hbs
│   ├── my-bookings.hbs
│   ├── contact.hbs
│   └── 404.hbs
└── public/
    ├── css/style.css
    └── js/main.js
```

---

## 🌍 Pages & Features

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, featured destinations, packages, testimonials |
| `/destinations` | All destinations with category filter & sort |
| `/destinations/:id` | Destination detail with highlights & booking CTA |
| `/packages` | All-inclusive holiday packages |
| `/book/:type/:id` | Booking form with live price calculation |
| `/book` (POST) | Booking submission → confirmation page |
| `/my-bookings` | View all bookings made in this session |
| `/contact` | Contact form with success message |

---

## 🗄️ Data Layer

The `data/db.js` file acts as an in-memory NoSQL store with **4 collections**:

- **destinations** — 6 pre-seeded destinations (Santorini, Kyoto, Patagonia, etc.)
- **packages** — 3 curated multi-destination packages
- **testimonials** — 3 traveller reviews
- **bookings** — starts empty, grows as users book (resets on server restart)

### Connecting Real MongoDB

To swap in MongoDB, replace `data/db.js` with Mongoose models:

```bash
npm install mongoose
```

```js
// In server.js
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
```

Then replace each `db.destinations.find()` call with `Destination.find()` etc.

---

## 🎨 Design

- **Font pairing**: Cormorant Garamond (serif headings) + DM Sans (body)
- **Colour palette**: Deep teal, warm ivory, antique gold
- **Aesthetic**: Editorial luxury — refined, not flashy
- **Animations**: Hero parallax, scroll-reveal cards, image zoom on hover
- **Fully responsive** — mobile hamburger nav, stacked layouts on small screens

---

## 🔧 Environment Variables (optional)

Create a `.env` file:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/wanderlux
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `express` | Web framework |
| `express-handlebars` | Server-side HTML templating |
| `body-parser` | Parse POST form data |
| `uuid` | Generate unique booking IDs |
