const http = require('http')

const server = http.createServer((req, res)=>{
    if ( req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/info'){
        res.end('He is our short history')
    }
    else{
        res.end(`
        <h1>Oooops!</h1>
        <p>We cannot seem to find page you are looking for</p>
        <a href = "/">Back home </a>
        `)
    }
    
})

server.listen(5000)