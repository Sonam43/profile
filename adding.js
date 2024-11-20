document.getElementById('profileName').textContent = localStorage.getItem('profileName');
document.getElementById('profileEnrollNo').textContent = localStorage.getItem('profileEnrollNo');
document.getElementById('profileCourse').textContent = localStorage.getItem('profileCourse');
document.getElementById('profileYear').textContent = localStorage.getItem('profileYear');
document.getElementById('profileImage').src = localStorage.getItem('profileImage');

document.getElementById('kebabMenu').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('saveProfile').addEventListener('click', function() {
    localStorage.setItem('profileName', document.getElementById('profileName').textContent);
    localStorage.setItem('profileEnrollNo', document.getElementById('profileEnrollNo').textContent);
    localStorage.setItem('profileCourse', document.getElementById('profileCourse').textContent);
    localStorage.setItem('profileYear', document.getElementById('profileYear').textContent); 
    localStorage.setItem('profileImage', document.getElementById('profileImage').src);
    alert("Profile saved successfully!");
});

document.getElementById('editProfile').addEventListener('click', function() {
    window.location.href = 'form.html'; 
});

document.getElementById('deleteProfile').addEventListener('click', function() {

    localStorage.removeItem('profileName');
    localStorage.removeItem('profileEnrollNo');
    localStorage.removeItem('profileCourse');
    localStorage.removeItem('profileYear');
    localStorage.removeItem('profileImage');
    
    const profileContainer = document.getElementById('profile');
    if (profileContainer) {
        profileContainer.remove(); 
    }
    
    alert("Profile deleted successfully!");
});