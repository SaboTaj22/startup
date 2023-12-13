document.addEventListener('DOMContentLoaded', function () {
    let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    const userNameDisplay = document.getElementById('userNameDisplay');

    // Read and display the user name
    const userName = localStorage.getItem('userName');
    if (userName) {
        userNameDisplay.textContent = `${userName}`;
    }

    // Function to update the display of selected items
    function updateSelectedItemsDisplay() {
        const selectedItemsDisplay = document.getElementById('selectedItemsDisplay');
        selectedItemsDisplay.innerHTML = '';

        if (selectedItems.length === 0) {
            selectedItemsDisplay.textContent = 'Cart Empty';
        } else {
            selectedItems.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.textContent = `${item.name} - $${item.price}`;
                selectedItemsDisplay.appendChild(itemDiv);
            });
        }
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));

            if (!selectedItems.some(item => item.name === itemName)) {
                selectedItems.push({ name: itemName, price: itemPrice });
                localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
                updateSelectedItemsDisplay();
            }
        });
    });

    const submitOrderButton = document.getElementById('submitOrder');
    submitOrderButton.addEventListener('click', function () {
        // Save the order in local storage along with the user's name
        const order = {
            userName: userName || 'Guest',
            items: selectedItems
        };

        // Send the order data to the server
        fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to submit order. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Order submitted successfully:', data);
            // Optional: Clear the selected items array
            selectedItems = [];
            localStorage.removeItem('selectedItems');
            updateSelectedItemsDisplay();
        })
        .catch(error => {
            console.error('Error submitting order:', error);
        });
    });

    // Display the selected items on page load
    updateSelectedItemsDisplay();

    const clearSelectedItemsButton = document.getElementById('clearSelectedItemsButton');
    clearSelectedItemsButton.addEventListener('click', function () {
        selectedItems = [];
        localStorage.removeItem('selectedItems');
        updateSelectedItemsDisplay();
    });
});




