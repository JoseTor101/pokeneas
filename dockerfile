# Base image for Node.js
FROM node:18

# Set up working directory
WORKDIR /app

# Copy and install frontend dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy and install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy the rest of the code for both frontend and backend
COPY frontend ./frontend
COPY backend ./backend

# Build the frontend for production (if needed)
RUN cd frontend && npm run build

# Expose the backend and frontend ports
EXPOSE 3001  # Backend port
EXPOSE 5173  # Frontend port

# Start both frontend and backend using the npm script
CMD ["npm", "--prefix", "frontend", "run", "start:all"]
