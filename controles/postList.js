const {connection} = require("../configurationDB/Config");
module.exports = {
    addPost : ((req, res) => {
        const query = `INSERT INTO list (firstName, lastName, image, createdAt) VALUES ("${req.body.firstName}","${req.body.lastName}","${req.body.image}","${req.body.createdAt}")`
        
        connection.query(query, (err, result) => {
            err ? res.status(500).send(err) 
            :
            res.status(200).send("post is ALIVE!!")
            
        })
    })

}
