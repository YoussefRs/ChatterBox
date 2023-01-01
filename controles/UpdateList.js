const {connection} = require("../configurationDB/Config");
module.exports = {
    updatePost : ((req, res) => {
        const query = `UPDATE list SET firstName="${req.body.firstName}",lastName="${req.body.lastName}",image="${req.body.image}",createdAt="${req.body.createdAt}" WHERE id ="${req.params.id}"`
        
        connection.query(query, (err, result) => {
            err ? res.status(500).send(err) 
            :
            res.status(200).send("UPdate DONE")
            
        })
    })

}