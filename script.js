let form = document.getElementById("contact-form");
var output = document.getElementById("output");
output.textContent = " ";

function sendMessage(e) {
    e.preventDefault();

    // Fetch values from the form
    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value.trim();
    let bloodGroup = document.getElementById("blood-group").value.trim();
    let medicalIssue = document.getElementById("medical").value.trim();
    let genderInput = document.querySelector("input[name='gender']:checked");
    let genderValue = genderInput ? genderInput.value : "";
    let toast = document.getElementById('toast');
    let closeToastBtn = document.getElementById('close-toast');


    // Send email
    emailjs
        .send("service_l0i1x7r","template_vnj2cy8",{
        from_name: name,
        address: address,
        phone_number: phone,
        age: age,
        blood_group: bloodGroup,
        medical_issue: medicalIssue,
        gender_value: genderValue,
        }).then((response) => {
            toast.innerText="Successfully Sent to Email"
            toast.style.backgroundColor="green"
            toast.style.color="white"
            toast.classList.add('show');
            // Automatically hide after 3 seconds
            setTimeout(() => toast.classList.remove('show'), 3000);
            
            form.reset(); // Clear the form
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            toast.innerText="Error"
            toast.style.backgroundColor="red"
            toast.style.color="white"
            toast.classList.add('show');
            // Automatically hide after 3 seconds
            setTimeout(() => toast.classList.remove('show'), 3000);
        });
        
        
        
    
        // Close the toast manually
        closeToastBtn.addEventListener('click', () => {
          toast.classList.remove('show');
        });

    }
    
    // Add event listener to the form
    form.addEventListener("submit", sendMessage);
    