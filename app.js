// we create the class which will define the products caracteristics
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//Instruction modal
$('#instructions').modal();

// Here, we will create the class which define
// the user interface

class UI{
    // Here we create the html element tha show us the product added
    addProduct(product) {
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `<div class='card text-center mb-4'>
                <div class='card-body'>
                    <strong>Product ID</strong>: ${product.id}
                    <strong>Product name</strong>: ${product.name}
                    <strong>Product price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a name="delete" href="#" class="btn btn-danger">Delete</a>
                </div>
            </div>`;
        // Then we add a child element to form products
        productList.appendChild(element);
        // And finally we reset the form shown to the user
        this.resetForm();
    }

    resetForm(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(element) {
        if (element.name === "delete") {
            console.log(element.parentElement.parentElement.parentElement.remove());
            this.showMessage("Product deleted successfully", "info");
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);

        setTimeout(function(){
            document.querySelector(".alert").remove();
        },3000);

    }

}

// Here we will capture the DOM events

document.getElementById('product-form');
// With the next line we add the event that capture add product
addEventListener("submit", function(e){
        // Here we'll create the product propieties
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const year = document.getElementById("year").value;

        // with this code we create the product elemen with the pripietis create before
        const product = new Product(name, price, year);
        // Here we create and call the metod which will be add the element to the user interface
        const ui = new UI();

        //Validation of Form products information
        if (name === "" || price === "" ||  year === "" ) {
            ui.showMessage("Complete fields please", "danger");
        }else{
            ui.addProduct(product);
    
            ui.showMessage("Product added succesfully","success");
    
    // Whit this line we can cancell the even default od SUBMIT
            e.preventDefault();
        }

});

// we will capture the event taht corresponds to delet products

document.getElementById("product-list").addEventListener("click",function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
});
