[DEPLOYED API](https://user-manager-8ybn.onrender.com)

## Setup/ Installation

The setup or installation process can be found in the project [README](https://github.com/davidumoru/user-manager#readme)

## Testing

To run automated tests on this project:

### Local Test
To test locally;
Ensure all dependecies are installed, express server is running and db is connected successfully.
Then use the command `npm run test:local` to run.

### Deployed Test
To test my already deployed API, use the command `npm run test`

## Limitations/ Assumptions made during development

- The API assumes that security measures such as authentication and authorization are handled externally or in a separate layer. It does not provide built-in security features beyond basic data validation.
- The task mentioned adding or retrieving a person by name, but typically, I would use the generated ID.

## API Endpoints

The project includes the following endpoints:

### **(POST)** `api/` - CREATE User.

**Request Body:**
```
{
  "fullName": "John Doe",
  "track": "frontend",
}
```

**Response:**
```
{
    "message": "User created successfully",
    "user": {
        "fullName": "John Doe",
        "track": "backend",
        "_id": "user_id",
        "__v": 0
    }
}
```

### **(GET)** `api/John%20Doe` - READ User by Name.

**Response:**
```
{
    "message": "User retrieved successfully",
    "user": {
        "_id": "user_id",
        "fullName": "John Doe",
        "track": "backend",
        "__v": 0
    }
}
```

### **(PUT)** `api/John%20Doe` - UPDATE User by Name.

**Response:**
```
{
    "message": "User updated successfully",
    "user": {
        "_id": "user_id",
        "fullName": "Updated Name",
        "track": "Updated Track",
        "__v": 0
    }
}
```

### **(DEL)** `api/Updated%20Name` - DELETE User by Name.

**Response:**
```
{
    "message": "User deleted"
}
```
