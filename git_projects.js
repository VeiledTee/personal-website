// var table = '<table><tr><th>Repo</th></tr>';
fetch('https://api.github.com/users/VeiledTee/repos')
.then(response => response.json())
.then(data => {
  // Create an HTML table
  var table = '<table><tr><th>Name</th><th>Description</th></tr>';

  // Loop through the data and add each row to the table
  for (var i = 0; i < data.length; i++) {
    table += '<tr><td>' + data[i].name + '</td><td>' + data[i].description + '</td></tr>';
  }

  // Close the table
  table += '</table>';

  // Add the table to the page
  document.getElementById('table').innerHTML = table;
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