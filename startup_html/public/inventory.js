document.addEventListener('DOMContentLoaded', function () {
    // Initialize the selected items array from local storage or create an empty array
    let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];

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

    // Add-to-cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));

            // Check if the item is not already in the selected items
            if (!selectedItems.some(item => item.name === itemName)) {
                // Add the selected item to the array
                selectedItems.push({ name: itemName, price: itemPrice });

                // Save the updated selected items to local storage
                localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

                // Update the display
                updateSelectedItemsDisplay();
            }
        });
    });

    // Display the selected items on page load
    updateSelectedItemsDisplay();

    // Clear the selected items when needed (for demonstration purposes)
    const clearSelectedItemsButton = document.getElementById('clearSelectedItemsButton');
    clearSelectedItemsButton.addEventListener('click', function () {
        selectedItems = [];
        localStorage.removeItem('selectedItems');
        updateSelectedItemsDisplay();   
    });
});



