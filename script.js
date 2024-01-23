const repositoriesContainer = $('#repositories');
const loader = $('#loader');
const alertContainer = $('#alertContainer');

function getRepositories() {
    const username = $('#username').val();
    const perPage = $('#perPage').val();
    const searchQuery = $('#search').val();

    loader.show();
    repositoriesContainer.html('');
    alertContainer.html('');

    fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=1&q=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            loader.hide();
            displayRepositories(data);
        })
        .catch(error => {
            loader.hide();
            showAlert('danger', `Error: ${error.message}`);
        });
}

function displayRepositories(repositories) {
    if (!Array.isArray(repositories)) {
        showAlert('danger', 'Invalid data received from the server.');
        return;
    }

    if (repositories.length === 0) {
        showAlert('info', 'No repositories found.');
        return;
    }

    repositories.forEach(repo => {
        const repoElement = $('<div>').addClass('repository');
        repoElement.html(`<h3>${repo.name}</h3><p>${repo.description || 'No description'}</p>`);

        if (repo.topics && Array.isArray(repo.topics) && repo.topics.length > 0) {
            const topicsElement = $('<p>').addClass('topics');
            topicsElement.text(`Topics: ${repo.topics.join(', ')}`);
            repoElement.append(topicsElement);
        }

        repositoriesContainer.append(repoElement);
    });
}

function showAlert(type, message) {
    const alert = $('<div>').addClass(`alert alert-${type}`);
    alert.text(message);
    alertContainer.html(alert);
}
