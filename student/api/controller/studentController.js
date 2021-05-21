const {Student} = require('../model');


const studentController = {
    
 async getAll(req,res){    
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
    

    await Student.find().skip(offset).limit(count).then(data =>{              
       res.json({status:200, result: data})
     })
     .catch(error => {
      console.log('-----Error retrieving student records------');
      res.json({status:500, msg:'Internal server error'})
     })
 },

 async registerNew(req, res){
     var student = new Student({
         name:req.body.name,
         gpa:req.body.gpa 
     });

     var address = new Address({
        street: req.body.address.street,
        city: req.body.address.city,
        state:req.body.address.state,
        zip:req.body.address.zip
    
     });

     student.address.push(address);

     await student.save().then(data =>{
        res.json({status:200, message:"Saved new user", data:data});
    })
    .catch(err => {
        console.log(err)
        res.json({status:500, message:"Could not save user", data:err});
    })
 },
 async getOneStudent(req,res){  
     let stId=  req.params.studentid;  
    await Student.findOne({'_id':stId}).then(data =>{              
       res.json({status:200, result: data})
     })
     .catch(error => {
      console.log('-----Error retrieving student records------');
      res.json({status:500, msg:'Internal server error'})
     })
 },
 async getstudentAddress(req,res){  
    let stId=  req.params.studentid;  
   await Student.findOne({'_id':stId,'address':{$exists:true}},'address').then(data =>{              
      res.json({status:200, result: data})
    })
    .catch(error => {
     console.log('-----Error retrieving student records------');
     res.json({status:500, msg:'Internal server error'})
    })
},
async getOneStudentAddress(req,res){  
    let stId=  req.params.studentid;  
    let addrId=  req.params.addressid;  
   await Student.findOne({'_id':stId,'address._id':addrId},'address').then(data =>{              
      res.json({status:data !=null? 200:204, result: data !=null? data:'No data found'})
    })
    .catch(error => {
     console.log('-----Error retrieving student records------');
     res.json({status:500, msg:'Internal server error'})
    })
},
}

module.exports = studentController;