# Invent Analytics Test Case

### 🛠 &nbsp;Tech Stack

- 🌐 &nbsp;
  ![Node.js](https://img.shields.io/badge/-Node.js-eeeeee?style=flat&logo=node.js)
- 🛢 &nbsp;
  ![MySQL](https://img.shields.io/badge/-MySQL-ffffff?style=flat&logo=mysql)
- ⚙️ &nbsp;
  ![GitHub](https://img.shields.io/badge/-GitHub-ffffff?style=flat&logo=github&logoColor=000000)
- 🔧 &nbsp;
  ![Docker](https://img.shields.io/badge/-Docker-ffffff?style=flat&logo=docker&logoColor=007ACC)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To set up the Shopping Service APIs, follow these steps:

### Prerequisites

- Docker installed on your system

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/bilalisler/invent-analytics-developer-case.git
    ```

2. Navigate to the project directory:

    ```bash
    cd invent-analytics-developer-case
    ```

3. Run the Service:

    ```bash
     docker-compose up --force-recreate --build
    ```

The setup script will build the Docker image for the service and start the app on port `3000`

## Usage

Once the setup is complete, the API will be available at:

```sh
 curl --location 'localhost:3000/health'
```
## Tests
```sh
npm test
```

### Available Endpoints

- `GET /health`
- `GET /users`
- `GET /users/{id}`
- `POST /users/`


- `GET /books/`
- `GET /books/{id}`
- `POST /books/`


- `POST /users/{user_id}/borrow/{book_id}`
- `POST /users/{user_id}/return/{book_id}`
