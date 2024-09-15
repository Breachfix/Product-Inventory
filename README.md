<<<<<<< HEAD
# Product-Inventory
A user-friendly **Product Inventory Management** system to add, search, update, and delete products. This app is built using **Express** and an **AVL Tree** for efficient product storage, ensuring fast searches and updates.
=======


# 🌟 **Product Inventory App** 🌟

A user-friendly **Product Inventory Management** system to add, search, update, and delete products. This app is built using **Express** and an **AVL Tree** for efficient product storage, ensuring fast searches and updates.

![Inventory](https://img.shields.io/badge/Product-Inventory-blue.svg)
![Express](https://img.shields.io/badge/Express.js-Backend-orange)
![AVL Tree](https://img.shields.io/badge/AVL%20Tree-Data%20Structure-brightgreen)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2C%20CSS%2C%20JS-yellow)
![License](https://img.shields.io/badge/License-MIT-red)

---

## 📜 **Table of Contents**
- [✨ Features](#-features)
- [🛠 Technologies](#-technologies)
- [📦 Setup](#-setup)
- [🚀 Usage](#-usage)
- [⚙️ Backend Structure](#-backend-structure)
- [🌐 Frontend Structure](#-frontend-structure)
- [💡 Algorithms & Data Structures](#-algorithms-and-data-structures)
- [📄 License](#-license)

---

## ✨ **Features**
- 🔹 **Add Products**: Easily add new products with ID, name, category, size, quantity, and price.
- 🔹 **Search & Update**: Quickly find products by ID and update their information.
- 🔹 **Delete Products**: Remove products from the inventory in one click.
- 🔹 **Sort Products**: Organize products by price.
- 🔹 **Dark/Light Mode**: Aesthetic toggle between dark and light themes.

---

## 🛠 **Technologies**

### **Backend**
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building robust APIs.
- **AVL Tree**: Efficient data structure for managing products.
- **MongoDB** *(optional)*: For future enhancements.

### **Frontend**
- **HTML5**: For structuring the web pages.
- **CSS3**: Custom styles and responsive design.
- **JavaScript**: Interactive client-side functionality.
- **LocalStorage**: Data persistence within the browser.
- **Live-Server**: Lightweight development server for the frontend.

---

## 📦 **Setup**

### **Prerequisites**
- **Node.js** installed on your system.
- Optional: **MongoDB** for database functionality.

### **Installation Steps**
1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/product-inventory.git
    ```

2. **Install dependencies**:
    ```bash
    cd product-inventory
    npm install
    ```

3. **Start the backend server**:
    ```bash
    npm run dev
    ```

4. **Start the frontend server**:
    ```bash
    npm start
    ```

### **Access**
- Frontend: Open `http://192.168.1.83:3000` in your browser.
- Backend API: Server runs on `http://localhost:3000/api/products`.

---

## 🚀 **Usage**

### 📥 **Add Product**
1. Fill in the product details (ID, name, category, size, quantity, price).
2. Click "Add Product" to save it.

### 🔍 **Search Product**
1. Enter the product ID to retrieve its details.

### 📝 **Update Product**
1. After searching, modify the details and click "Update Product."

### ❌ **Delete Product**
1. Click the "Delete" button next to the product you wish to remove.

### 🎛 **Sort Products**
1. Click "Sort Products" to reorder by price.

### 🌗 **Toggle Theme**
1. Click the theme button to switch between **dark** and **light** modes.

---

## ⚙️ **Backend Structure**

### **Express Routes**
- **`POST /api/products/add`**: Adds a new product.
- **`PUT /api/products/update/:id`**: Updates product details by ID.
- **`GET /api/products/:id`**: Fetches a specific product by ID.
- **`GET /api/products`**: Returns all products in the inventory.

### **Controller Functions**
- **`addProduct`**: Adds products using AVL tree insertion.
- **`updateProduct`**: Modifies product information.
- **`getProductById`**: Retrieves product based on its ID.
- **`getAllProducts`**: Fetches all products in ascending order of their IDs.

---

## 🌐 **Frontend Structure**

### **Key Components**
- **Add Product Form**: Interface to input new product details.
- **Search & Update Form**: Search for products and update details seamlessly.
- **Product List**: Displays all products and supports deletion and sorting.
- **Theme Toggle**: Switches between light and dark themes.

### **LocalStorage**
- Stores all product data in the browser's local storage for persistence between sessions.

---

## 💡 **Algorithms and Data Structures**

### **AVL Tree**
This app uses an **AVL Tree** to manage products. The AVL tree is a self-balancing binary search tree, ensuring that each operation (insert, update, search) takes O(log n) time.

#### **AVL Tree Operations**
- **Insert**: Adds a product by its ID and automatically balances the tree.
- **Search**: Efficiently retrieves a product by ID.
- **Update**: Locates the product and modifies the necessary fields.
- **In-Order Traversal**: Retrieves products sorted by ID.

#### **Rotations**
- **Left Rotation**: Balances when the right subtree is heavier.
- **Right Rotation**: Balances when the left subtree is heavier.
- **Left-Right Rotation**: Balances more complex cases when both left and right subtrees are imbalanced.

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy managing your products with ease! ✨
>>>>>>> 3a3c6a0 (Initial commit)
