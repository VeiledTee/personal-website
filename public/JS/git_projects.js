async function getRepos() {
	const response = await fetch(`https://api.github.com/users/VeiledTee/repos`);
	const data = await response.json();
	const non_fork_table = document.getElementById('nonforked-repos-table');
	const fork_table = document.getElementById('forked-repos-table');

	for (let i = 0; i < data.length; i++) {
		const repo = data[i];
		console.log(repo);
		if (repo.fork == false && repo.name != 'game-development' && repo.name != 'python-case-studies') {
			const row = document.createElement('tr');
			const nameCell = document.createElement('td');
			nameCell.textContent = repo.name;
			const descCell = document.createElement('td');
			descCell.textContent = repo.description;
			const urlRedirect = document.createElement('a');
			// urlRedirect.textContent = "Take me to the repo"
			urlRedirect.href = repo.html_url;
			urlRedirect.target = '_blank';
			urlRedirect.innerHTML = 'click';
			row.appendChild(nameCell);
			row.appendChild(descCell);
			row.addEventListener('click', function () {
				window.open(repo.html_url);
			});
			non_fork_table.appendChild(row);
		}
		// else {
		// 	const row = document.createElement('tr');
		// 	const nameCell = document.createElement('td');
		// 	nameCell.textContent = repo.name;
		// 	const descCell = document.createElement('td');
		// 	descCell.textContent = repo.description;
		// 	const urlRedirect = document.createElement('a');
		// 	// urlRedirect.textContent = "Take me to the repo"
		// 	urlRedirect.href = repo.html_url;
		// 	urlRedirect.target = '_blank';
		// 	nameCell.appendChild(urlRedirect);
		// 	descCell.appendChild(urlRedirect);
		// 	row.appendChild(nameCell);
		// 	row.appendChild(descCell);
		// 	// row.appendChild(urlRedirect);
		// 	fork_table.appendChild(row);
		// }
	}
}

getRepos();
