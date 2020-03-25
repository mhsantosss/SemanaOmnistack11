const connection = require('../database/connection');


module.exports = {
    async index(request,respons){
        const ong_id = request.headers.authorization;


        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return respons.json(incidents);
    }
}