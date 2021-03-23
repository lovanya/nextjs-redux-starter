const nextRoutes = require('next-routes');
// eslint-disable-next-line no-extra-parens
const routes = (module.exports = nextRoutes());

const APP_ROUTES = [
  {
    page: 'index',
    pattern: '/'
  },
  {
    page: 'about',
    pattern: '/about'
  }
];

APP_ROUTES.forEach(route => routes.add(route));
