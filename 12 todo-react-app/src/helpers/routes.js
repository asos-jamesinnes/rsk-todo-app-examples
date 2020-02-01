const serveUrl = `https://cors-anywhere.herokuapp.com/https://stanwkolejceapi.herokuapp.com/api`

export const toDoItemsApiUrl = id =>
    id ? `${serveUrl}/todos/${id}` : `${serveUrl}/todos/` 