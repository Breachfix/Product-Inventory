class ProductNode {
  constructor(id, name, category, size, quantity) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.size = size;
    this.quantity = quantity;
    this.height = 1; // For AVL Tree balancing
    this.left = null;
    this.right = null;
  }
}

class ProductInventory {
  constructor() {
    this.root = null; // Root of the AVL tree
  }

  // Get height of the node
  getHeight(node) {
    return node ? node.height : 0;
  }

  // Get balance factor of the node
  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // Right rotation (used to balance tree)
  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    // Return new root
    return x;
  }

  // Left rotation (used to balance tree)
  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    // Return new root
    return y;
  }

  // Add a new product to the AVL Tree by ID
  addProduct(id, name, category, size, quantity) {
    const newProduct = new ProductNode(id, name, category, size, quantity);
    this.root = this.insertProduct(this.root, newProduct);
  }

  // Helper function to insert a product into the AVL tree
  insertProduct(node, newProduct) {
    if (!node) return newProduct;

    if (newProduct.id < node.id) {
      node.left = this.insertProduct(node.left, newProduct);
    } else if (newProduct.id > node.id) {
      node.right = this.insertProduct(node.right, newProduct);
    } else {
      throw new Error(`Product with ID ${newProduct.id} already exists`);
    }

    // Update height of the current node
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // Get balance factor
    const balance = this.getBalance(node);

    // If the node is unbalanced, perform rotations
    // Left Left Case
    if (balance > 1 && newProduct.id < node.left.id) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && newProduct.id > node.right.id) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balance > 1 && newProduct.id > node.left.id) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balance < -1 && newProduct.id < node.right.id) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Search for a product by ID
  searchProductById(id) {
    return this.searchById(this.root, id);
  }

  // Recursive function to search by ID in the AVL tree
  searchById(node, id) {
    if (!node) return null;
    if (id === node.id) return node;
    if (id < node.id) return this.searchById(node.left, id);
    return this.searchById(node.right, id);
  }

  // Update a product's details by ID
  updateProduct(id, newDetails) {
    let product = this.searchProductById(id);
    if (product) {
      Object.assign(product, newDetails); // Update product with new details
    } else {
      throw new Error(`Product with ID ${id} not found`);
    }
  }

  // In-order traversal to get all products in sorted order by ID
  getAllProducts(node = this.root, products = []) {
    if (node !== null) {
      this.getAllProducts(node.left, products); // Traverse the left subtree
      products.push({
        id: node.id,
        name: node.name,
        category: node.category,
        size: node.size,
        quantity: node.quantity
      });
      this.getAllProducts(node.right, products); // Traverse the right subtree
    }
    return products;
  }
}

module.exports = ProductInventory;
