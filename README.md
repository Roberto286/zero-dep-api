# Zero Dependencies Node.js REST API

This is a simple REST API built with Node.js that has zero dependencies. It demonstrates basic routing and HTTP methods
using the built-in `http` module.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)

## Features

- Simple routing mechanism
- Supports GET, POST, PUT, DELETE, and PATCH HTTP methods
- Configurable server port via environment variables
- Lightweight and easy to understand

## Getting Started

### Prerequisites

- Node.js (v12 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Roberto286/zero-dep-api.git
   cd zero_dep_node_api
   ```

3. (Optional) Create a `.env` file in the root directory and set the desired port:
   ```env
   PORT=1234
   ```
   Note that there's a default port (5687) in config.js file

## Environment Variables

The application uses the following environment variable:

- `PORT`: The port on which the server will listen. Default is `5687` if not specified.

## Running the Application

To start the server, run the following command:

```bash
npm start
```

The server will listen on the port specified in the `.env` file or default to `5687`.