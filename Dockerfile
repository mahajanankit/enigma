# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY docker/images/enigma /app

# Install Firebase dependencies using pip
RUN pip install --no-cache-dir firebase-admin

# Install any other needed packages specified in requirements.txt (if present)
RUN pip install --no-cache-dir -r requirements.txt

# Run your application
CMD ["python", "runner.py"]
