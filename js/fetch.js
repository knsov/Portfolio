async function loadCards() {
  const container = document.getElementById('cards-container');
  
  try {
    const response = await fetch('https://ske1.onrender.com/games'); 
    const data = await response.json();

    container.innerHTML = '';

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      const tagsHtml = item.features 
      ? item.features.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join('') 
      : ''; 
      card.innerHTML = `
        <div class="card-image">
          <span class="badge">PREMIUM</span>
          <img src="${item.thumbnail}" alt="${item.title}">
        </div>
        <div class="card-content">
          <div class="card-header">
            <h3>${item.title}</h3>
            <span class="price-icon">$</span>
          </div>
          <p class="subtitle">${item.version || 'Edgy Hack'}</p>
          <div class="stats">
            <span>${item.bought || 0} bought</span>
            <span>v${item.version || '1.0.0'}</span>
            <span>${item.review || 0} reviews</span>
          </div>
          <div class="tags">
            ${tagsHtml}
          </div>
          <div class="buttons">
            <button class="btn btn-purple">Get</button>
            <button class="btn btn-outline">How to Install</button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error while loading data:', error);
    container.innerHTML = `<p style="color: red; text-align: center;">The data could not be loaded</p>`;
  }
}


document.addEventListener('DOMContentLoaded', loadCards);