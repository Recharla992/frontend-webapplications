// script.js - Fetch and display data from JSONPlaceholder
window.addEventListener('DOMContentLoaded', function() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
  const container = document.createElement('div');
  container.id = 'api-data';
  container.style.margin = '30px auto';
  container.style.maxWidth = '600px';
  container.style.background = '#f0f0f0';
  container.style.borderRadius = '10px';
  container.style.padding = '20px';
  container.innerHTML = '<h3>Latest Posts from JSONPlaceholder</h3>';
  document.body.appendChild(container);

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.marginBottom = '18px';
        postDiv.style.padding = '12px';
        postDiv.style.background = '#fff';
        postDiv.style.borderRadius = '6px';
        postDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        postDiv.innerHTML = `<strong>${post.title}</strong><br><span>${post.body}</span>`;
        container.appendChild(postDiv);
      });
    })
    .catch(err => {
      container.innerHTML += `<p style='color:red;'>Error fetching data: ${err}</p>`;
    });
});
