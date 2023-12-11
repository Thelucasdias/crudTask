import http from "node:http";



const PORT = 3333;

const server = http.createServer((req, res) => {

    const {method,url,headers} = req
    
    if (method === "GET" && url === "/tasks") {
      return res
      .setHeader('Content-Type', 'application/json')
      .end('Listagem de tasks')
    }
    if (method === "POST" && url === "/tasks") {
      return res.writeHead(201).end()
    }
    if (method === "PUT" && url === "/update") {
      return res.end('Editar task')
    }
    
    
  })

  
  .listen(PORT);



