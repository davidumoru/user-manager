## Setup/ Installation

The setup or installation process can be found in the project [README](https://github.com/davidumoru/user-manager#readme)

## Testing

To run automated tests on this project, use the command `npm test`.

## Limitations/ Assumptions made during development

The API assumes that security measures such as authentication and authorization are handled externally or in a separate layer. It does not provide built-in security features beyond basic data validation.

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
statusCode: 201

{
  "fullName": "John Doe",
  "track": "frontend",
  "_id": "user_id"
}
```

### **(GET)** `api/John%20Doe` - READ User by Name.

**Response:**
```
{
    "_id": "user_id",
    "fullName": "John Doe",
    "track": "frontend"
}
```

### **(PUT)** `api/John%20Doe` - UPDATE User by Name.

**Response:**
```
{
    "_id": "user_id",
    "fullName": "Updated Name",
    "track": "Updated Track"
}
```

### **(DEL)** `api/Updated%20Name` - DELETE User by Name.

**Response:**
```
{
    "message": "User deleted"
}
```
