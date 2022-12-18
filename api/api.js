const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('');

newsapi.v2.topHeadlines({
  q: 'tesla',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(function (response){
    console.log(response)
    response.articles.forEach(article => {
        var div = document.createElement("div")
        div.classList.add('card')
        var url_id = article.url
        div.innerHTML = url_id
        // div.setAttribute('href', article.url);
        div.textContent = article.title;
        document.body.appendChild(div)
    })
})
// .then (function (data){
//     appendData(data);
// })
// .catch(function(err){
//     console.log(err);
// })

// function appendData(data){
//     var contentContainer = document.getElementById('post-content')
//     for (var i = 0; i < data.length; i++){
//         var div = document.createElement("div")
//         div.innerHTML = data[i].description;
//         contentContainer.appendChild(div);

//     }
// }

// function listPosts(contentElementId){
//     const contentElement = document.getElementById(contentElementId);

//     if(!contentElement){
//         return;
//     }


// }

