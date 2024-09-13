/* Class select options */

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

// Student Registration

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const fatherName = document.getElementById('father-name').value;
        const dobDD = document.getElementById('dob-dd').value;
        const dobMM = document.getElementById('dob-mm').value;
        const dobYYYY = document.getElementById('dob-yyyy').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;
        const admissionNo = document.getElementById('admission-no').value;

        if (!name || !fatherName || !dobDD || !dobMM || !dobYYYY || !gender || !contact || !email || !admissionNo) {
            alert('Please fill in all fields');
            return;
        }

        alert('Form submitted successfully!');
        form.reset();
    });
});

// Gender Card Active Status

document.addEventListener("DOMContentLoaded", function() {
    const genderCards = document.querySelectorAll('.gender-card');
    genderCards.forEach(card => {
        card.addEventListener('click', function() {
            genderCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Sidebar Options

// Toggle Sidebar
document.querySelector('.fa-bars').addEventListener('click', function() {
    console.log("Clicked");
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('active');
  });
  
  // Close Sidebar on Login Button Click (optional)
  document.getElementById('sidebarLoginBtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('active');
  });


            // function myFunction() {
            //   var x = document.getElementById("myLinks");
            //   if (x.style.display === "block") {
            //     x.style.display = "none";
            //   } else {
            //     x.style.display = "block";
            //   }
            // }
    
  