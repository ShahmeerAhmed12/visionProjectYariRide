document.getElementById('mechanicForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var messageDiv = document.getElementById('message');
    
    if(name && phone) {
        messageDiv.innerHTML = `<p>Thank you, ${name}. A mechanic will contact you soon at ${phone}.</p>`;
    } else {
        messageDiv.innerHTML = '<p>Please fill out both fields.</p>';
    }
});


