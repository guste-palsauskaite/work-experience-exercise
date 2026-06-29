// ============================================================
// app.js — this file runs in the browser.
// It asks the server for train data, then builds the table rows.
// ============================================================

// "document.getElementById" finds an element on the page by its id.
const tableBody = document.getElementById('timetable-body');
const destinationFilter = document.getElementById('destination-filter');

// ============================================================
// loadTrains — fetches train data from the server and
// draws the rows in the timetable.
//
// "async/await" means "wait for the data before continuing"
// without freezing the whole page.
// ============================================================
async function loadTrains(destination) {
  // Build the URL to request. If a destination is chosen,
  // add it as a query parameter, e.g. /api/trains?destination=Paris
  let url = '/api/trains';
  if (destination) {
    url += '?destination=' + destination;
  }

  // "fetch" sends a request to the server and waits for the response
  const response = await fetch(url);
  // ".json()" reads the response as an array of train objects
  const trains = await response.json();

  // TODO: EURO-08 — add your for loop here to count trains by status

  // Clear the table before we draw new rows
  tableBody.innerHTML = '';

  if (trains.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="6" style="text-align:center; padding: 24px; color: #888;">No trains found.</td></tr>';
    return;
  }

  // Loop through every train and create a table row for it
  trains.forEach(function (train) {
    // Work out which CSS class to use for the status badge
    const statusClass = getStatusClass(train.status);

    // Work out whether to add a special class to the whole row
    const rowClass = train.status === 'Cancelled' ? 'row-cancelled' : '';

    // Build the HTML for one table row using a "template literal"
    // (the backtick ` lets us drop variables straight into text)
    const row = `
      <tr class="${rowClass}">
        <td>${train.departure}</td>
        <td>${train.arrival}</td>
        <td>${train.duration}</td>
        <td>${train.destination}</td>
        <td>${train.platform}</td>
        <td>
          <span class="status-badge ${statusClass}">
            ${train.status}
          </span>
        </td>
      </tr>
    `;

    // Add the row to the table
    tableBody.innerHTML += row;
  });
}

// ============================================================
// getStatusClass — returns the right CSS class name for a status.
//
// TODO EXERCISE 7 (bonus):
// What happens if a train has a status that isn't listed here?
// Can you add a default fallback at the bottom of the if/else chain?
// ============================================================
function getStatusClass(status) {
  if (status === 'On Time') {
    return 'status-on-time';
  } else if (status === 'Delayed') {
    return 'status-delayed';
  } else if (status === 'Cancelled') {
    return 'status-cancelled';
  }
  // TODO: return a default class here
}

// ============================================================
// Event listener — when the user changes the dropdown,
// reload the table with the new filter.
// ============================================================
destinationFilter.addEventListener('change', function () {
  loadTrains(destinationFilter.value);
});

// Load all trains when the page first opens
loadTrains('');
