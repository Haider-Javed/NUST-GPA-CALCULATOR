const addRowBtn = document.getElementById('addRowBtn');
const calculateBtn = document.getElementById('calculateBtn');
const subjectList = document.getElementById('subject-list');
const resultDisplay = document.getElementById('result');

function addRow() {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input class="input subject-input" type="text" placeholder="Subject Name"></td>
        <td><input class="input credit-input" type="number" placeholder="Credits" min="1" value="3"></td>
        <td>
            <select class="input grade-select">
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
        <td><button class="deleteBtn input">Delete</button></td>
    `;
    subjectList.appendChild(row);
}

function deleteRow(e) {
    if (e.target.classList.contains('deleteBtn')) {
        const row = e.target.closest('tr');
        row.remove();
    }
}

function calculateGPA() {
    const rows = subjectList.getElementsByTagName('tr');
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < rows.length; i++) {

        const creditInput = rows[i].getElementsByTagName('input')[1];
        const gradeSelect = rows[i].getElementsByTagName('select')[0];

        if (creditInput && gradeSelect) {
            const credits = parseFloat(creditInput.value);
            const grade = parseFloat(gradeSelect.value);

            totalCredits += credits;
            totalGradePoints += credits * grade;

        }
    }

    const gpa = totalGradePoints / totalCredits;
    resultDisplay.textContent = `GPA: ${gpa.toFixed(2)}`;

}

addRowBtn.addEventListener('click', addRow);
// Use event delegation on the parent container (subjectList)
subjectList.addEventListener('click', deleteRow);
calculateBtn.addEventListener('click', calculateGPA);

