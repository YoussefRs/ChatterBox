const {connection} = require("../configurationDB/Config");
module.exports = {
    getPost : ((req, res) => {
        const query = `SELECT * FROM list;`
        
        connection.query(query, (err, result) => {
            err ? res.status(500).send(err) 
            :
            res.status(200).send(result)
            
        })
    })

}