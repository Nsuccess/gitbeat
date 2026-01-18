FROM node:22-alpine

LABEL "language"="nodejs"
LABEL "framework"="next.js"

WORKDIR /app

# Copy frontend directory
COPY frontend ./frontend

WORKDIR /app/frontend

# Install dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Set environment variables for Next.js
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

# Start the production server
CMD ["npm", "start"]
