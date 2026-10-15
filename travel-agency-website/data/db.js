const { v4: uuidv4 } = require('uuid');


const destinations = [
  {
    _id: 'd1',
    name: 'Santorini, Greece',
    tagline: 'Whitewashed cliffs over volcanic caldera',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    category: 'Beach',
    rating: 4.9,
    reviews: 1284,
    price: 2499,
    duration: '7 nights',
    highlights: ['Oia Sunset Views', 'Volcano Boat Tour', 'Wine Tasting', 'Black Sand Beach'],
    description: 'Perched atop a volcanic caldera, Santorini dazzles with its iconic blue-domed churches, labyrinthine whitewashed alleys, and sunsets that set the Aegean ablaze.'
  },
  {
    _id: 'd2',
    name: 'Kyoto, Japan',
    tagline: 'Ancient temples cloaked in cherry blossom',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
    category: 'Cultural',
    rating: 4.8,
    reviews: 2150,
    price: 3199,
    duration: '10 nights',
    highlights: ['Arashiyama Bamboo Grove', 'Geisha District', 'Tea Ceremony', 'Fushimi Inari'],
    description: 'Kyoto is Japan\'s cultural soul — 1,600 Buddhist temples, moss-draped zen gardens, and centuries-old machiya townhouses lining quiet canals.'
  },
  {
    _id: 'd3',
    name: 'Patagonia, Chile',
    tagline: 'Earth\'s last wilderness at the end of the world',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    category: 'Adventure',
    rating: 4.9,
    reviews: 876,
    price: 4299,
    duration: '12 nights',
    highlights: ['Torres del Paine Trek', 'Grey Glacier', 'Condor Spotting', 'Los Glaciares NP'],
    description: 'Where the Andes crumble into the Southern Ocean, Patagonia offers a raw, humbling landscape of granite spires, turquoise lakes, and thousand-year-old glaciers.'
  },
  {
    _id: 'd4',
    name: 'Marrakech, Morocco',
    tagline: 'A labyrinth of spice, colour and sound',
    image: 'https://images.unsplash.com/photo-1596436534953-4e4e5f5dfe1c?w=800&q=80',
    category: 'Cultural',
    rating: 4.7,
    reviews: 1560,
    price: 1899,
    duration: '6 nights',
    highlights: ['Jemaa el-Fna Square', 'Majorelle Garden', 'Souk Shopping', 'Atlas Day Trip'],
    description: 'Marrakech assaults the senses in the best way — saffron-scented souks, hand-hammered copper lanterns, rooftop terraces under Saharan stars.'
  },
  {
    _id: 'd5',
    name: 'Bali, Indonesia',
    tagline: 'Island of Gods, rice terraces and surf',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    category: 'Beach',
    rating: 4.8,
    reviews: 3200,
    price: 1699,
    duration: '8 nights',
    highlights: ['Tegallalang Rice Terraces', 'Uluwatu Temple', 'Seminyak Beach', 'Mount Batur Sunrise'],
    description: 'Bali is more than a destination — it\'s a spiritual experience wrapped in emerald rice terraces, world-class surf breaks, and exquisite Hindu ceremony.'
  },
  {
    _id: 'd6',
    name: 'Amalfi Coast, Italy',
    tagline: 'Pastel villages cascading to a cobalt sea',
    image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&q=80',
    category: 'Beach',
    rating: 4.8,
    reviews: 1890,
    price: 2799,
    duration: '7 nights',
    highlights: ['Positano Stroll', 'Limoncello Tasting', 'Grotto Azzurra', 'Path of the Gods Hike'],
    description: 'Dramatic limestone cliffs plunging into the Tyrrhenian Sea, painted villages draped in bougainvillea, and cuisine that reads like a love letter to Italy.'
  }
];

const packages = [
  {
    _id: 'p1',
    name: 'Greek Island Hopper',
    destinations: ['Santorini', 'Mykonos', 'Crete'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    price: 3899,
    duration: '14 nights',
    inclusions: ['Flights', 'Hotels', 'Ferry Transfers', 'Breakfast Daily', 'Guided Tours'],
    badge: 'Best Seller'
  },
  {
    _id: 'p2',
    name: 'Japan Rail Journey',
    destinations: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'],
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80',
    price: 4599,
    duration: '15 nights',
    inclusions: ['Flights', 'Ryokan Stays', 'JR Pass', 'Breakfast Daily', 'Cultural Experiences'],
    badge: 'Premium'
  },
  {
    _id: 'p3',
    name: 'South American Explorer',
    destinations: ['Patagonia', 'Buenos Aires', 'Atacama'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    price: 5299,
    duration: '18 nights',
    inclusions: ['Flights', 'Eco-Lodges', 'Internal Flights', 'All Meals', 'Expert Guides'],
    badge: 'Adventure'
  }
];

const testimonials = [
  {
    _id: 't1',
    name: 'Priya Mehta',
    location: 'Mumbai',
    avatar: 'PM',
    rating: 5,
    text: 'Our Santorini trip was flawlessly organised. Every hotel, transfer and excursion was perfect. WanderLux truly understands luxury travel.',
    trip: 'Santorini, Greece'
  },
  {
    _id: 't2',
    name: 'James Okafor',
    location: 'London',
    avatar: 'JO',
    rating: 5,
    text: 'The Japan Rail Journey was a revelation. Seamless logistics, incredible ryokan stays, and our guide was phenomenal. Already planning the next trip!',
    trip: 'Japan Rail Journey'
  },
  {
    _id: 't3',
    name: 'Sofia Reyes',
    location: 'Mexico City',
    avatar: 'SR',
    rating: 5,
    text: 'Patagonia exceeded every expectation. Torres del Paine at sunrise with no crowds — WanderLux knows the secret spots nobody else does.',
    trip: 'Patagonia, Chile'
  }
];


class Collection {
  constructor(data) {
    this.data = [...data];
  }
  find(query = {}) {
    return this.data.filter(doc =>
      Object.keys(query).every(k => doc[k] === query[k])
    );
  }
  findOne(query = {}) {
    return this.data.find(doc =>
      Object.keys(query).every(k => doc[k] === query[k])
    ) || null;
  }
  findById(id) {
    return this.data.find(doc => doc._id === id) || null;
  }
  insertOne(doc) {
    const newDoc = { _id: uuidv4(), createdAt: new Date().toISOString(), ...doc };
    this.data.push(newDoc);
    return newDoc;
  }
  count() { return this.data.length; }
}


const bookingsData = [];

const db = {
  destinations: new Collection(destinations),
  packages:     new Collection(packages),
  testimonials: new Collection(testimonials),
  bookings:     new Collection(bookingsData)
};

module.exports = db;
