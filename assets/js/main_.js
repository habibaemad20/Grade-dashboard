function checkGrade() {

    let grade = Number(document.getElementById("grade").value);
    let result = document.getElementById("result");
    let bar = document.getElementById("bar");
    let percentage = document.getElementById("percentage");
let resultBox = document.getElementById("resultBox");
    let gradeValue = document.getElementById("gradeValue");
    resultBox.style.display = "block";
    
    if (grade < 0 || grade > 100 || isNaN(grade)) {

        gradeValue.textContent = "--";
        result.textContent = "❌ Invalid Grade";
        percentage.textContent = "0%";
        bar.style.width = "0%";
        bar.style.background = "#A22C29";

    }
    else if (grade >= 90 && grade <= 100) {

        gradeValue.textContent = grade;
        result.textContent = "⭐⭐⭐ Excellent";
        percentage.textContent = grade + "%";
        bar.style.width = grade + "%";
        bar.style.background = "#3C6E71";

    }
    else if (grade >= 75 && grade <= 89) {
        gradeValue.textContent = grade;
        result.textContent = "⭐⭐ Very Good";
        percentage.textContent = grade + "%";
        bar.style.width = grade + "%";
        bar.style.background = "#4F8C8F";
    }
    else if (grade >= 50 && grade <= 74) {
        gradeValue.textContent = grade;
        result.textContent = "⭐ Pass";
        percentage.textContent = grade + "%";
        bar.style.width = grade + "%";
        bar.style.background = "#F2C14E";

    }
    else {
        gradeValue.textContent = grade;
        result.textContent = "❌ Fail";
        percentage.textContent = grade + "%";
        bar.style.width = grade + "%";
        bar.style.background = "#C44536";

    }

}