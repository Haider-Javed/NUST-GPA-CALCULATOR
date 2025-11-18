document.getElementById("addRowBtn").addEventListener("click", () => {
  const table = document.querySelector("#subjectsTable tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="text" placeholder="e.g. Programming" /></td>
    <td><input type="number" min="1" value="3" /></td>
    <td>
      <select>
        <option value="4">A</option>
        <option value="3.5">B+</option>
        <option value="3">B</option>
        <option value="2.5">C+</option>
        <option value="2">C</option>
        <option value="1.5">D+</option>
        <option value="1">D</option>
        <option value="0">F</option>
      </select>
    </td>
    <td><button class="deleteBtn">❌</button></td>
  `;
  table.appendChild(row);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest("tr").remove();
  }
});

document.getElementById("calculateBtn").addEventListener("click", () => {
  const rows = document.querySelectorAll("#subjectsTable tbody tr");
  let totalPoints = 0;
  let totalCredits = 0;

  rows.forEach(row => {
    const credit = parseFloat(row.children[1].querySelector("input").value);
    const grade = parseFloat(row.children[2].querySelector("select").value);
    totalPoints += credit * grade;
    totalCredits += credit;
  });

  const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
  document.getElementById("result").textContent = `Your GPA: ${gpa}`;
});
