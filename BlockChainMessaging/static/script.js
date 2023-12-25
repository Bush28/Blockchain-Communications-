document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the message from the input field
    var message = document.getElementById('messageInput').value;

    // Send the message to the Flask backend
    fetch('/add_block', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: message })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Message submitted!');
        document.getElementById('messageInput').value = ''; // Clear the input
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('getBlockchain').addEventListener('click', function() {
    // Retrieve the blockchain and display it
    fetch('/get_chain')
    .then(response => response.json())
    .then(data => {
        var blockchainDisplay = document.getElementById('blockchainDisplay');
        blockchainDisplay.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
