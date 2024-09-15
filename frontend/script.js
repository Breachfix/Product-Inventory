let products = JSON.parse(localStorage.getItem("products")) || [];

// Add Product
document.getElementById("addProductForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("productId").value;
    const name = document.getElementById("productName").value;
    const category = document.getElementById("productCategory").value;
    const size = document.getElementById("productSize").value;
    const quantity = document.getElementById("productQuantity").value;
    const price = document.getElementById("productPrice").value;

    const product = { id, name, category, size, quantity, price };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    document.getElementById("addProductForm").reset(); // Clear form

        // Alert the user that the product has been added
    alert("Product has been added successfully!");

    displayProducts();

    // Scroll to the product list after adding
    document.getElementById("productList").scrollIntoView({ behavior: "smooth" });
});

// Search Product
document.getElementById("searchProductForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const searchId = document.getElementById("searchProductId").value;
    const product = products.find(p => p.id === searchId);

    const searchResult = document.getElementById("searchResult");
    const updateForm = document.getElementById("updateProductForm");

    if (product) {
        searchResult.style.display = "block";
        updateForm.style.display = "block";

        searchResult.innerHTML = `
            <strong>ID:</strong> ${product.id}<br>
            <strong>Name:</strong> ${product.name}<br>
            <strong>Category:</strong> ${product.category}<br>
            <strong>Size:</strong> ${product.size}<br>
            <strong>Quantity:</strong> ${product.quantity}<br>
            <strong>Price:</strong> $${product.price}
        `;

        // Pre-fill the update form
        document.getElementById("updateProductName").value = product.name;
        document.getElementById("updateProductCategory").value = product.category;
        document.getElementById("updateProductSize").value = product.size;
        document.getElementById("updateProductQuantity").value = product.quantity;
        document.getElementById("updateProductPrice").value = product.price;
    } else {
        searchResult.style.display = "none";
        updateForm.style.display = "none";
        alert("Product not found");
    }
});

// Update Product
document.getElementById("updateProductForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const searchId = document.getElementById("searchProductId").value;

    const updatedProduct = {
        id: searchId,
        name: document.getElementById("updateProductName").value,
        category: document.getElementById("updateProductCategory").value,
        size: document.getElementById("updateProductSize").value,
        quantity: document.getElementById("updateProductQuantity").value,
        price: document.getElementById("updateProductPrice").value
    };

    products = products.map(p => (p.id === searchId ? updatedProduct : p));
    localStorage.setItem("products", JSON.stringify(products));

    displayProducts();
    alert("Product updated successfully!");
});

// Display products and add delete functionality
function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("note-item");

        productItem.innerHTML = `
            <strong>ID:</strong> ${product.id}<br>
            <strong>Name:</strong> ${product.name}<br>
            <strong>Category:</strong> ${product.category}<br>
            <strong>Size:</strong> ${product.size}<br>
            <strong>Quantity:</strong> ${product.quantity}<br>
            <strong>Price:</strong> $${product.price}<br>
            <button class="delete-btn" data-id="${product.id}">Delete</button>
        `;

        productList.appendChild(productItem);
    });

    // Add event listeners for delete buttons
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            confirmDeleteProduct(productId);
        });
    });
}

// Confirm and Delete Product
function confirmDeleteProduct(id) {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
        deleteProduct(id);
    }
}

// Delete Product
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
}

// Sort Products
document.getElementById("sortButton").addEventListener("click", function () {
    products.sort((a, b) => a.price - b.price);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
});

// Initial load
displayProducts();
