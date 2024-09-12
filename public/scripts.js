document.addEventListener("DOMContentLoaded", function() {
    const newsList = document.getElementById('news-list');
  
    // Sample news items (you can replace this with an API or dynamic data)
    const newsItems = [
      "John Doe scored 30 points in last night's game.",
      "Team Alpha defeated Team Bravo by 15 points.",
      "Player of the Week: Jane Smith with 25 points and 10 assists.",
      "Next game scheduled for Saturday at 6 PM.",
    ];
  
    // Loop through the news items and display them
    newsItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      newsList.appendChild(li);
    });
  });
  
  // Filtering by team
function filterTable() {
    const filterValue = document.getElementById('team-filter').value.toLowerCase();
    const table = document.getElementById('stats-table');
    const tr = table.getElementsByTagName('tr');
  
    for (let i = 1; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName('td')[1]; // Team column
      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (filterValue === 'all' || txtValue.toLowerCase() === filterValue) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }
  
  // Sorting the table columns
  function sortTable(columnIndex) {
    const table = document.getElementById('stats-table');
    let switching = true;
    let shouldSwitch, i;
    let dir = 'asc'; // Set the sorting direction to ascending
  
    while (switching) {
      switching = false;
      const rows = table.rows;
  
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        const x = rows[i].getElementsByTagName('td')[columnIndex];
        const y = rows[i + 1].getElementsByTagName('td')[columnIndex];
  
        // Sort numeric values in ascending/descending order
        const xContent = parseFloat(x.textContent) || x.textContent.toLowerCase();
        const yContent = parseFloat(y.textContent) || y.textContent.toLowerCase();
  
        if ((dir === 'asc' && xContent > yContent) || (dir === 'desc' && xContent < yContent)) {
          shouldSwitch = true;
          break;
        }
      }
  
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      } else {
        // If no switching has been done, reverse the sorting direction
        if (dir === 'asc') {
          dir = 'desc';
        } else {
          dir = 'asc';
        }
      }
    }
  }
  