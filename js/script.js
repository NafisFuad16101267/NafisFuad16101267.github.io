// GET the UI Element

let item = document.querySelector('.products');
let cartList = document.querySelector('#cart-list');

// Product class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// UI class
class UI {

    static addToCart(product) {
        let cart = document.querySelector('#cart-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><button class='delete'>Remove</button></td>`;

        cart.appendChild(row);
    }

    static deleteFromCart(target) {
        if (target.hasAttribute('class')) {
            target.parentElement.parentElement.remove();
            Store.removeProducts(target.parentElement.previousElementSibling.previousElementSibling.textContent.trim());
            UI.showAlert('Product removed from the Shopping Cart', 'removed');
        }
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.cart');
        let table = document.querySelector('#cart-head');
        container.insertBefore(div, table);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// Local storage class
class Store {

    static getProducts() {
        let products;
        if (localStorage.getItem('products') === null) {
            products = [];
        } else {
            products = JSON.parse(localStorage.getItem('products'));
        }
        return products;
    }

    static displayProducts() {
        let products = Store.getProducts();
        products.forEach(item => {
            UI.addToCart(item);
        });
    }

    static addProducts(product) {
        let products = Store.getProducts();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    static removeProducts(prodname) {
        console.log(prodname);
        let products = Store.getProducts();

        products.forEach((item, index) => {
            if (item.name === prodname) {
                products.splice(index, 1);
            }
        });
        localStorage.setItem('products', JSON.stringify(products));
    }
}


// Add eventListener

item.addEventListener('click', newProduct);
cartList.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayProducts);

function newProduct(e) {
    if (e.target.hasAttribute('id')) {
        //console.log('button clicked');
        let prodPrice = e.target.parentElement.previousElementSibling;
        let prodName = prodPrice.previousElementSibling;
        //console.log(prodName);
        //console.log(prodPrice);
        let product = new Product(prodName.textContent.trim(), prodPrice.textContent.trim());
        //console.log(product)

        UI.addToCart(product);
        UI.showAlert('Product added to the Shopping Cart', 'added');
        Store.addProducts(product);
    }
}

function removeBook(e) {
    UI.deleteFromCart(e.target);
    e.preventDefault();
}