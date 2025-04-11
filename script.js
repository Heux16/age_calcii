function calculateAge() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const [date, month, year] = dob.split('/').map(Number);
  
    const today = new Date();
    const curr_date = today.getDate();
    const curr_month = today.getMonth() + 1;
    const curr_year = today.getFullYear();
  
    let ly = 0;
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) ly = 1;
      } else {
        ly = 1;
      }
    }
  
    let age_year = curr_year - year;
    let age_month = 12 - (month - curr_month);
    let age_date;
  
    if ([1, 5, 7, 8, 10, 12].includes(curr_month)) {
      age_date = 30 - date + curr_date;
      if (age_date === 30) age_date = 0;
      else if (age_date > 30) age_date = Math.abs(30 - age_date);
    } else if ([4, 6, 9, 11].includes(curr_month)) {
      age_date = 31 - date + curr_date;
      if (age_date === 31) age_date = 0;
      else if (age_date > 31) age_date = Math.abs(31 - age_date);
    } else if (curr_month === 2) {
      if (ly === 0) {
        age_date = 29 - date + curr_date;
        if (age_date === 29) age_date = 0;
        else if (age_date > 29) age_date = Math.abs(29 - age_date);
      } else {
        age_date = 28 - date + curr_date;
        if (age_date === 28) age_date = 0;
        else if (age_date > 28) age_date = Math.abs(28 - age_date);
      }
    }
  
    if (curr_month < month) {
      age_year -= 1;
      if (curr_date < date) {
        age_month -= 1;
      }
    } else if (month < curr_month) {
      age_month = curr_month - month;
      if (curr_date < date) {
        age_month -= 1;
      }
    } else if (curr_month === month) {
      if (curr_date < date) {
        age_year -= 1;
        age_month -= 1;
      }
    }
  
    if (age_month === 12) {
      age_month = 0;
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerText = `NAME = ${name}\nAGE = ${age_date}-${age_month}-${age_year}`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitBtn").addEventListener("click", calculateAge);
  });
  