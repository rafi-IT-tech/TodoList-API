## API TODO DOCUMENTATION

#### Register

```http
  POST api/auth/register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

#### Login

```http
  POST api/auth/login
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

#### Create Todo

```http
  POST api/todos/
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `value` | `string` | `value todo` |

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `Token` |


#### Read All todo by userID

```http
  GET api/todos/
```

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `JWT Token` |


#### Read todo detail by id

```http
  GET api/todos/${id}
```

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `JWT Token` |

| params | value                |
| :-------- | :------------------------- |
| `id` | `id of todo` |

#### Edit Todo By Id

```http
  PUT api/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo |

| Headers |  value                       |
| :-------- |  :-------------------------------- |
| `authorization` |  JWT Token |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `value`      | `string` | **Required**. value todo |
| `status`      | `boolean` | **Required**. status todo |

#### Delete Todo By Id

```http
  DELETE api/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo |

| Headers |  value                       |
| :-------- |  :-------------------------------- |
| `authorization` |  JWT Token |


#### Delete All Todo

```http
  POST api/todos/delete_all
```

| Headers |  value                       |
| :-------- |  :-------------------------------- |
| `authorization` |  JWT Token |
