async function getRepos() {
  const response = await fetch(`https://api.github.com/users/VeiledTee/repos`);
  const data = await response.json();
  const non_fork_table = document.getElementById('nonforked-repos-table');
  const fork_table = document.getElementById('forked-repos-table');

  for (let i = 0; i < data.length; i++) {
    const repo = data[i];
    if (repo.fork == false){
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = repo.name;
    const descCell = document.createElement('td');
    descCell.textContent = repo.description;
    row.appendChild(nameCell);
    row.appendChild(descCell);
    non_fork_table.appendChild(row);
    }
    else{
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = repo.name;
      const descCell = document.createElement('td');
      descCell.textContent = repo.description;
      row.appendChild(nameCell);
      row.appendChild(descCell);
      fork_table.appendChild(row);
    }
  };
}
getRepos();
