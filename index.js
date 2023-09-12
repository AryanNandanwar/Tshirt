
    function validateForm() {
        // Validate mobile number (should be exactly 9 digits)
        const contactNumber = document.getElementById('contact_number').value;
        if (!/^\d{9}$/.test(contactNumber)) {
            alert('Please enter a valid 9-digit contact number.');
            return false;
        }

        // Validate tagline (limit to 50 characters)
        const tagline = document.getElementById('tagline').value;
        if (tagline.length > 50) {
            alert('Tagline should not exceed 50 characters.');
            return false;
        }

        // Add more validation rules for other fields as needed

        return true; // Submit the form if all data is valid
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    
    // Assuming you have a function to process and generate a receipt
    function processOrder() {
        // Process the order here
        // Generate the receipt
        const receipt = `
            Order Receipt
            Date: ${formattedDate}
            Tagline: ${document.getElementById('tagline').value}
            Color: ${document.getElementById('color').value}
            Size: ${document.getElementById('size').value}
            Quantity: ${document.getElementById('quantity').value}
            Delivery Date: ${document.getElementById('delivery_date').value}
            Delivery Address: ${document.getElementById('delivery_address').value}
            Contact Number: ${document.getElementById('contact_number').value}
        `;
    
        alert(receipt);
        return true; // Submit the form
    }
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        // Arrow function as a class method
        getDetails = () => {
            return `Name: ${this.name}, Age: ${this.age}`;
        }
    }
    class Student extends Person {
        constructor(name, age, rollNo) {
            super(name, age); // Call the parent class constructor
            this.rollNo = rollNo;
        }
    
        // Override the getDetails method
        getDetails = () => {
            return `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`;
        }
    }
    if (rollNo === 0) {
        throw new Error('Roll No should not be zero.');
    }
                


