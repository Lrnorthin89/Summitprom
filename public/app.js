document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading-screen');
  
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 2000);
  
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for sticky header
          behavior: 'smooth'
        });
      });
    });
  
    // Fetch Discord messages when the Discord tab is clicked
    document.querySelector('#discord').addEventListener('click', fetchDiscordMessages);
  
    async function fetchDiscordMessages() {
      try {
        const response = await fetch('/api/messages'); // Calls the Node.js backend
        const messages = await response.json();
        const discordFeed = document.querySelector('.discord-feed');
  
        // Clear previous messages
        discordFeed.innerHTML = '<h3>Discord Feed</h3>';
  
        // Loop through messages and display them
        messages.forEach(message => {
          const messageElement = document.createElement('p');
          messageElement.textContent = `${message.author.username}: ${message.content}`;
          discordFeed.appendChild(messageElement);
        });
      } catch (error) {
        console.error('Error fetching Discord messages:', error);
        document.querySelector('.discord-feed').innerHTML = '<p>Error fetching Discord messages.</p>';
      }
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading-screen');
  
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 2000);
  
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for sticky header
          behavior: 'smooth'
        });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading-screen');
  
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 2000);
  
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for sticky header
          behavior: 'smooth'
        });
      });
    });
  });
  