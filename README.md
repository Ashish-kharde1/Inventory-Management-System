# Inventory Management System

This project is a simple Oil Management System that allows users to log in, add data about oil products, and view the stored data. It features separate interfaces for admin and regular users. Admins have additional functionality to view the data stored in a CSV file.

## Deployed Link
You can access the deployed application [https://inventory-management-system1-swfe.onrender.com](https://inventory-management-system1-swfe.onrender.com).

![QR Code](qr_code.png)

## Features
- Admin and user authentication
- Add and view product details
- Filter data by date and time
- Search data by keywords
- Responsive design

## Technologies Used
- HTML, CSS, JavaScript for the frontend
- Node.js and Express for the backend
- CSV file for data storage

## How to Run Locally

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Ashish-kharde1/Inventory-Management-System.git
    cd Inventory-management-system
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node index.js
    ```

4. Open your browser and go to:
    ```bash
    http://localhost:3000
    ```

### Admin and User Credentials
- Admin: 
  - Username: `admin`
  - Password: `1`
- User: 
  - Username: `user`
  - Password: `2`

## Project Structure
- `index.js` - Main server file.
- `/` - Contains HTML, CSS, and JavaScript files for the frontend.
- `data/` - Contains CSV data file.

## Usage
1. **Login**:
   - Admin: Access admin functionalities.
   - User: Access user functionalities.

2. **Add Product Details**:
   - Enter product name, user name, quantity, customer name, date and time, and price.

3. **View Data**:
   - Filter data by date and time range.
   - Search data by keywords.

4. **Logout**:
   - Admin can stop the server by logging out.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact
For any questions or feedback, please contact [ashnkharde@gmail.com](mailto:ashnkharde@gmail.com).


