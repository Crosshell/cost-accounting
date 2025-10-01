# Cost Accounting
A Node.js application for managing and tracking cost accounting data

## Endpoint docs
Interactive API documentation is available at:
https://cost-accounting-l2g6.onrender.com/docs

## Prerequisites

Choose one of the following options:

### Option 1: Local Development
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Option 2: Docker
- [Docker](https://www.docker.com/)
- Docker Compose

## Installation & Setup

### Common Setup
1. Clone the repository:

```bash
git clone https://github.com/Crosshell/cost-accounting
cd cost-accounting
```

2. Create a `.env` file (based on `.env.sample`):

```dotenv
PORT=8070
```

### Running Locally

1. Install dependencies:

```bash
npm install
```

2. Start the application:

```bash
npm run start
```

3. The application will be available at `http://localhost:8070`

### Running with Docker Compose

1. Build the Docker image:

```bash
docker compose build
```

2. Start the containers:

```bash
docker compose up
```

3. The application will be available at `http://localhost:8070`

4. To stop the containers:

```bash
docker compose down
```

## API Usage Examples

Once the application is running, you can access the API:

```bash
# Example: Health check
curl http://localhost:8070/healthcheck
```

For detailed API documentation, visit https://cost-accounting-l2g6.onrender.com/docs