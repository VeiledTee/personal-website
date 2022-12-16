fetch('', {
  headers: {
    "Authorization": "Token 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"
  }
})
.then(response => response.json())
.then(data => {
  console.log(data)
})
const list = document.getElementById('repo-list')
data.forEach(element => {
  const item = document.createElement('li');
  item.innerHTML = repo.name;
  list.appendChild(item);
});

// var user_url = 'https://api.github.com/users/' + username + '/repos';

// jQuery.githubUser = function(username, callback) {
//     return jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=CALLBACK");
//   }
  
//   jQuery.fn.loadRepositories = function(username) {
//     this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
  
//     var target = this;
//     $.githubUser(username, function(data) {
//       var repos = data.user.repositories;
//       sortByNumberOfWatchers(repos);
  
//       var list = $('<dl/>');
//       target.empty().append(list);
//       $(repos).each(function() {
//         list.append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
//         list.append('<dd>' + this.description + '</dd>');
//       });
//     });
  
//     function sortByNumberOfWatchers(repos) {
//       repos.sort(function(a,b) {
//         return b.watchers - a.watchers;
//       });
//     }
//   };