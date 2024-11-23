# Introduction to Databases

## Overview
This section covers the fundamentals of databases, including both SQL and NoSQL databases. You will learn about the differences between these types of databases, their use cases, and how to work with them.

## Topics Covered
- Introduction to Databases
- SQL Databases
    - Basics of SQL
    - Common SQL Commands
    - Example: MySQL
- NoSQL Databases
    - Basics of NoSQL
    - Types of NoSQL Databases
    - Example: MongoDB

## SQL Databases
SQL (Structured Query Language) databases are relational databases that use tables to store data. They are known for their ACID (Atomicity, Consistency, Isolation, Durability) properties.

### Common SQL Commands
- `SELECT`: Retrieve data from a database
- `INSERT`: Add new data to a database
- `UPDATE`: Modify existing data
- `DELETE`: Remove data

### Example: MySQL
MySQL is a popular open-source SQL database. It is widely used for web applications and supports a variety of data types and indexing options.

## NoSQL Databases [NOT SQL]
NoSQL databases are non-relational databases that store data in a variety of formats, such as key-value pairs, documents, graphs, or wide-column stores. They are known for their scalability and flexibility.

### Types of NoSQL Databases
- Key-Value Stores
- Document Stores
- Column-Family Stores
- Graph Databases

### Example: MongoDB
MongoDB is a widely-used NoSQL database that stores data in JSON-like documents. It is known for its flexibility and scalability, making it a popular choice for modern web applications.

## Further Reading
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Object-Relational Mapping (ORM)

Object-Relational Mapping (ORM) is a technique that allows developers to interact with a database using an object-oriented paradigm. ORMs provide a way to map database tables to classes in a programming language, making it easier to work with database records as objects.

### Mongoose
Mongoose is an ORM for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data. Mongoose includes built-in type casting, validation, query building, and business logic hooks.

### Prisma
Prisma is a next-generation ORM for Node.js and TypeScript. It provides a type-safe database client, migrations, and a declarative data modeling language. Prisma supports various databases, including PostgreSQL, MySQL, SQLite, and MongoDB.

### Drizzle
Drizzle is a lightweight ORM for TypeScript and JavaScript. It focuses on providing a simple and intuitive API for interacting with SQL databases. Drizzle supports various SQL databases and aims to be minimalistic while offering essential ORM features.

## Further Reading on ORM
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Drizzle Documentation](https://orm.drizzle.team/docs)