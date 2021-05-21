const {Game} = require('../model')

const gamesController = {
async findAll(req,res){
var offset =0;
var count =5;
if(req.query && req.query.offset){
    var offsetQuery =  req.query.offset;
    if(!isNaN(parseInt(offsetQuery))){
     offset = parseInt(offsetQuery);
    }
}
if(req.query && req.query.count){
    var countQuery =  req.query.count;
    if(!isNaN(parseInt(countQuery))){
     let _count = parseInt(countQuery);
     if(_count >0 && _count <=7){
         count = _count;
     }
    }
}

  await Game.find().skip(offset).limit(count).then(data =>{
        res.json({status:200, result:data})
    })
    .catch(err => {
        res.json({status:500, msg:'Internal server error'})
    })
},

async findoneGame(req,res){
   let gameid = req.params.gameId;
   await Game.findById(gameid).then(data => {
       res.json({status:data !=null?200:204, result:data !=null?data:'No data found'});
   })
   .catch(error => {
       console.log('error:',error);
    res.json({status:500, result:'Internal server error'});
   })
}


}

module.exports = gamesController;