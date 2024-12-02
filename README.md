 <h1>Travel Agency RESTful API</h1>

  <h2>Table of Contents</h2>
  <ol>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#objectives">Objectives</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#technology-stack">Technology Stack</a></li>
    <li><a href="#development-steps">Development Steps</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
  </ol>

  <h2 id="introduction">1. Introduction</h2>
  <p>
    This project involves the development of the backend part for a travel agency application. The RESTful API is built using Node.js and provides functionality for managing clients, tours, hotels, countries, and sales.
  </p>

  <h2 id="objectives">2. Objectives</h2>
  <ul>
    <li>Develop a RESTful API for a travel agency.</li>
    <li>Implement CRUD operations for various entities.</li>
    <li>Integrate with a PostgreSQL database.</li>
    <li>Document the API using Swagger.</li>
  </ul>
  
  <h2> Architecture</h2>
  
  ![image](https://github.com/user-attachments/assets/38c54d4b-b1cb-43cd-acfd-3e37ac98ada2)

  <h2 id="features">3. Features</h2>
  <h3>3.1 Clients</h3>
  <p>Implemented functionality for managing clients, including:</p>
  <ul>
    <li>Retrieving a list of clients.</li>
    <li>Adding a new client.</li>
    <li>Viewing client details.</li>
    <li>Updating client information.</li>
    <li>Deleting a client.</li>
  </ul>

  <h3>3.2 Tours</h3>
  <p>Developed API endpoints for tours, allowing:</p>
  <ul>
    <li>Retrieving a list of available tours.</li>
    <li>Adding new tours.</li>
    <li>Viewing details of a specific tour.</li>
    <li>Updating tour information.</li>
    <li>Deleting tours.</li>
  </ul>

  <h3>3.3 Hotels</h3>
  <p>Created functionality for managing hotels:</p>
  <ul>
    <li>Retrieving a list of hotels.</li>
    <li>Adding a new hotel.</li>
    <li>Viewing hotel details.</li>
    <li>Updating hotel information.</li>
    <li>Deleting a hotel.</li>
  </ul>

  <h3>3.4 Countries</h3>
  <p>Implemented an API for managing countries, which allows:</p>
  <ul>
    <li>Retrieving a list of countries.</li>
    <li>Adding new countries.</li>
    <li>Viewing information about a specific country.</li>
  </ul>

  <h3>3.5 Sales</h3>
  <p>Developed functionality for managing sales, including:</p>
  <ul>
    <li>Recording a sale.</li>
    <li>Retrieving information about all sales.</li>
    <li>Creating discounts for clients.</li>
  </ul>

  <h2 id="technology-stack">4. Technology Stack</h2>
  <ul>
    <li><strong>Programming Language:</strong> Node.js</li>
    <li><strong>Database:</strong> PostgreSQL</li>
    <li><strong>API Documentation:</strong> Swagger</li>
  </ul>

  <h2 id="development-steps">5. Development Steps</h2>
  <h3>5.1 Database Design</h3>
  <p>
    Designed the database schema, which includes tables for clients, tours, hotels, countries, sales, and discounts. Relationships between tables were considered, such as tours being linked to specific hotels and countries.
  </p>

  <h3>5.2 Developing the REST API</h3>
  <p>
    Implemented endpoints for all main entities:
  </p>
  <ul>
    <li><code>/customers</code> for clients.</li>
    <li><code>/tours</code> for tours.</li>
    <li><code>/hotels</code> for hotels.</li>
    <li><code>/countries</code> for countries.</li>
    <li><code>/sales</code> for sales.</li>
  </ul>

  <h3>5.3 Database Integration</h3>
  <p>
    Set up integration with PostgreSQL using an ORM (e.g., Sequelize) to facilitate easy data handling.
  </p>

  <h3>5.4 API Testing</h3>
  <p>
    Conducted testing of all created endpoints using Postman and Swagger to ensure proper functionality.
  </p>

  <h2 id="api-endpoints">6. API Endpoints</h2>
  <p>The following endpoints are available:</p>
  <h3>6.1 Clients</h3>
  <ul>
    <li><code>GET /customers</code> - Retrieve all clients.</li>
    <li><code>POST /customers</code> - Add a new client.</li>
    <li><code>GET /customers/:id</code> - View client details.</li>
    <li><code>PUT /customers/:id</code> - Update client information.</li>
    <li><code>DELETE /customers/:id</code> - Delete a client.</li>
  </ul>

  <h3>6.2 Tours</h3>
  <ul>
    <li><code>GET /tours</code> - Retrieve all tours.</li>
    <li><code>POST /tours</code> - Add a new tour.</li>
    <li><code>GET /tours/:id</code> - View tour details.</li>
    <li><code>PUT /tours/:id</code> - Update tour information.</li>
    <li><code>DELETE /tours/:id</code> - Delete a tour.</li>
  </ul>

  <h3>6.3 Hotels</h3>
  <ul>
    <li><code>GET /hotels</code> - Retrieve all hotels.</li>
    <li><code>POST /hotels</code> - Add a new hotel.</li>
    <li><code>GET /hotels/:id</code> - View hotel details.</li>
    <li><code>PUT /hotels/:id</code> - Update hotel information.</li>
    <li><code>DELETE /hotels/:id</code> - Delete a hotel.</li>
  </ul>

  <h3>6.4 Countries</h3>
  <ul>
    <li><code>GET /countries</code> - Retrieve all countries.</li>
    <li><code>POST /countries</code> - Add a new country.</li>
    <li><code>GET /countries/:id</code> - View country information.</li>
  </ul>

  <h3>6.5 Sales</h3>
  <ul>
    <li><code>GET /sales</code> - Retrieve all sales.</li>
    <li><code>POST /sales</code> - Record a sale.</li>
    <li><code>POST /sales/discount</code> - Create a discount for a client.</li>
  </ul>

  <h2 id="testing">7. Testing</h2>
  <p>
    All API endpoints were thoroughly tested using Postman and Swagger UI to ensure they function as expected.
  </p>

  <h2 id="conclusion">8. Results</h2>

  ![image](https://github.com/user-attachments/assets/a3068f87-466e-4474-ac48-26f97e852060)
  
  Server working:
  ![image](https://github.com/user-attachments/assets/a53c7c45-9d71-4400-be01-23045976cee8)

  ![image](https://github.com/user-attachments/assets/5c5e16ee-6be3-4ac2-a49f-7c6fc02be742)
  ![image](https://github.com/user-attachments/assets/c70262d7-455a-40d7-af04-f5b9dedcceba)
  ![image](https://github.com/user-attachments/assets/64a3f63b-e81e-41e2-b79e-8a058668802f)
  ![image](https://github.com/user-attachments/assets/b597a0b5-077d-4b2f-8611-b8682909a5e1)
  ![image](https://github.com/user-attachments/assets/fc3c1c98-5531-4a57-aa51-54071bd3fe19)

  
  
