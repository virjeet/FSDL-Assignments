const express = require('express');
const router  = express.Router();
const db      = require('../data/db');

router.get('/', (req, res) => {
  const featured     = db.destinations.find().slice(0, 3);
  const topPackages  = db.packages.find().slice(0, 3);
  const testimonials = db.testimonials.find();
  res.render('home', { title: 'WanderLux — Curated Luxury Travel', featured, topPackages, testimonials });
});

router.get('/destinations', (req, res) => {
  const { category, sort } = req.query;
  let destinations = db.destinations.find();

  if (category && category !== 'all') {
    destinations = destinations.filter(d => d.category === category);
  }
  if (sort === 'price-asc')  destinations.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') destinations.sort((a, b) => b.price - a.price);
  if (sort === 'rating')     destinations.sort((a, b) => b.rating - a.rating);

  res.render('destinations', {
    title: 'Destinations — WanderLux',
    destinations,
    activeCategory: category || 'all',
    activeSort: sort || ''
  });
});

router.get('/destinations/:id', (req, res) => {
  const destination = db.destinations.findById(req.params.id);
  if (!destination) return res.status(404).render('404', { title: '404' });
  const related = db.destinations.find().filter(d => d._id !== destination._id && d.category === destination.category).slice(0, 2);
  res.render('destination-detail', { title: `${destination.name} — WanderLux`, destination, related });
});

router.get('/packages', (req, res) => {
  const packages = db.packages.find();
  res.render('packages', { title: 'Holiday Packages — WanderLux', packages });
});

router.get('/book/:type/:id', (req, res) => {
  const { type, id } = req.params;
  const item = type === 'package'
    ? db.packages.findById(id)
    : db.destinations.findById(id);
  if (!item) return res.status(404).render('404', { title: '404' });
  res.render('book', { title: `Book — WanderLux`, item, type });
});

router.post('/book', (req, res) => {
  const { firstName, lastName, email, phone, travellers, departureDate, specialRequests, itemId, itemType, itemName, itemPrice } = req.body;
  const total = parseInt(itemPrice) * parseInt(travellers || 1);
  const booking = db.bookings.insertOne({
    firstName, lastName, email, phone,
    travellers: parseInt(travellers),
    departureDate, specialRequests,
    itemId, itemType, itemName,
    pricePerPerson: parseInt(itemPrice),
    total,
    status: 'Confirmed'
  });
  res.render('confirmation', { title: 'Booking Confirmed — WanderLux', booking });
});

router.get('/my-bookings', (req, res) => {
  const bookings = db.bookings.find();
  res.render('my-bookings', { title: 'My Bookings — WanderLux', bookings, hasBookings: bookings.length > 0 });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us — WanderLux' });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // In a real app, send email / save to DB
  res.render('contact', {
    title: 'Contact Us — WanderLux',
    success: `Thanks ${name}! We'll get back to you at ${email} within 24 hours.`
  });
});

module.exports = router;
