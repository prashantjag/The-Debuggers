// Sample Data
const leaderboardData = [];

// Render Leaderboard
function renderLeaderboard() {
  const leaderboardBody = document.getElementById("leaderboard-body");
  leaderboardBody.innerHTML = ""; // Clear table

  // Sort leaderboard by performance
  leaderboardData.sort((a, b) => b.performance - a.performance);

  // Update leadership bar
  if (leaderboardData.length > 0) {
    const leader = leaderboardData[0];
    document.getElementById("leader-name").textContent = leader.name;
    document.getElementById("leader-performance").textContent = `Performance: ${leader.performance}`;
  }

  // Populate table rows
  leaderboardData.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.name}</td>
      <td>${entry.performance}</td>
      <td>${entry.rating.toFixed(1)}</td>
      <td>${entry.reviews}</td>
    `;
    leaderboardBody.appendChild(row);
  });
}

// Handle Form Submission
document.getElementById("review-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const performance = parseInt(document.getElementById("performance").value);
  const rating = parseFloat(document.getElementById("rating").value);
  const reviews = document.getElementById("reviews").value;

  // Add new participant to data
  leaderboardData.push({ name, performance, rating, reviews });

  // Clear the form
  event.target.reset();

  // Update leaderboard
  renderLeaderboard();
});

// Initial Render
renderLeaderboard();