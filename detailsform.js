function enableEdit(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    const inputs = section.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.disabled = !input.disabled;
        if (!input.disabled) {
            input.focus();
        }
    });
}

function deleteProfile() {
    if (confirm("Are you sure you want to delete your profile?")) {
        document.getElementById('profile-form').reset();
        document.getElementById('profile-pic').src = "";
    }
}

document.getElementById('profile-pic-upload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('profile-pic').src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

function saveProfile(event) {
    event.preventDefault();
    const form = document.getElementById('profile-form');
    const formData = new FormData(form);

    console.log('Profile saved:', Object.fromEntries(formData.entries()));

    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.disabled = true;
    });

    alert('Profile information saved successfully!');
}