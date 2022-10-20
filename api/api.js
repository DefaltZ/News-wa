const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('83f1b70d652148bb9b223fd3f8275013');

// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  category: 'business,general,science,technology',
  language: 'en',
  country: 'in'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});

