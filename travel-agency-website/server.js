const express    = require('express');
const exphbs     = require('express-handlebars');
const bodyParser = require('body-parser');
const path       = require('path');
const routes     = require('./routes/index');

const app  = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir:  path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    range: (n) => Array.from({ length: n }, (_, i) => i),
    times: (n, block) => {
      let out = '';
      for (let i = 0; i < n; i++) out += block.fn(i);
      return out;
    },
    eq:  (a, b) => a === b,
    gt:  (a, b) => a > b,
    add: (a, b) => a + b,
    formatPrice: (p) => `$${Number(p).toLocaleString()}`,
    formatDate:  (d) => d ? new Date(d).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' }) : '',
    stars: (r) => '★'.repeat(Math.round(r)),
    join: (arr, sep) => arr.join(sep || ', '),
    initials: (s) => s.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase(),
    includes: (arr, val) => Array.isArray(arr) && arr.includes(val),
    badgeClass: (badge) => {
      const map = { 'Best Seller': 'badge-gold', 'Premium': 'badge-blue', 'Adventure': 'badge-green' };
      return map[badge] || 'badge-gold';
    }
  }
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use((req, res) => res.status(404).render('404', { title: 'Page Not Found — WanderLux' }));

app.listen(PORT, () => console.log(`\n🌍  WanderLux running at http://localhost:${PORT}\n`));
