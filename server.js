const path = require('path');
const express = require('express');
const app = express();

const storiesInDatabase = [
  { id: 1, text: 'Cody just changed his status: "My favorite food is pizza!"' },
  { id: 2, text: 'Cody just liked this post: "How to guilt humans into giving you more snacks"' }
];

app.use((req, res, next) => console.log(req.method, req.url) || next());
app.use(express.static(path.join(__dirname, './public')));
app.get('/api/news', (req, res, next) => {
  res.json(storiesInDatabase);
});
app.get('/*', (req, res, next) => res.send(path.join(__dirname, './public/index.html')));
app.listen(3000, () => console.log('listening on 3000'));
