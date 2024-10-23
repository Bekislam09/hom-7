document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader');
    const users = document.getElementById('user');

    loader.style.display = 'block'; 

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none'; 
            data.forEach(user => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                `;
                users.appendChild(card);
            });
        })
        .catch(error => {
            loader.style.display = 'none';
            console.error(error);
        });
});
``