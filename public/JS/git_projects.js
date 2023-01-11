// async function getExtensions(url) {
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
// 		console.log(response)
// 		const files = response.data;
// 		let iconSet = new Set(); //create a set to hold the unique icons
// 		for(let file of files){
// 			let file_extension = file.name.split(".")[1];
// 			let icon_class = extensionMapping[file_extension];
// 			let icon = `<i class="${icon_class}"></i>`
// 			iconSet.add(icon); //add the icon to the set if it doesn't already exist
// 		}
// 		return Array.from(iconSet); //convert the set to an array
//     })
//     .catch(error => {
//       console.log(error)
//     });
// }

async function getRepos() {
	console.log('in function');
	const response = await fetch(`https://api.github.com/users/VeiledTee/repos`);
	const data = await response.json();
	const non_fork_table = document.getElementById('nonforked-repos-table');
	const fork_table = document.getElementById('forked-repos-table');
	const extensionMapping = {
		javascript: 'fab fa-js-square',
		python: 'fab fa-python',
		java: 'fab fa-java',
		html: 'fab fa-html5',
		css: 'fab fa-css3-alt',
	};

	for (let i = 0; i < data.length; i++) {
		const repo = data[i];
		// console.log(repo.name);
		if (repo.fork == false && repo.name != 'game-development' && repo.name != 'python-case-studies') {
			const row = document.createElement('tr');
			row.className = 'row';
			const nameCell = document.createElement('td');
			nameCell.textContent = repo.name;
			console.log(nameCell.textContent);
			const descCell = document.createElement('td');
			descCell.textContent = repo.description;
			const urlRedirect = document.createElement('a');
			urlRedirect.href = repo.html_url;
			urlRedirect.target = '_blank';
			urlRedirect.innerHTML = 'click';
			const toolCell = document.createElement('td');
			toolCell.className = 'fa-cell';
			const topicArray = repo.topics;

			for (let i = 0; i < topicArray.length; i++) {
				if (extensionMapping.hasOwnProperty(topicArray[i])) {
					let icon_class = extensionMapping[topicArray[i]];
					// let icon = `<i class="${icon_class}"></i>`;
					let icon = document.createElement('i');
					icon.className = icon_class;
					console.log(icon.className);
					// let parser = new DOMParser();
					// let iconElem = parser.parseFromString(icon, "text/html").querySelector("i");
					toolCell.appendChild(icon);
				}
			}
			row.addEventListener('click', function () {
				window.open(repo.html_url);
			});
			row.appendChild(nameCell);
			row.appendChild(descCell);
			row.appendChild(toolCell);

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
console.log('hello');
getRepos();
