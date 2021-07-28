const { transaction,user,listAs,House,City } = require('../../models')
const joi = require('joi')
const { Op } = require("sequelize");

exports.createTransaction = async (req, res) => {
  // const {  ...transactionsData } = req.body;
  const { user: userName, ...transactionsData } = req.body;
  // ...req.body,

  console.log(req.body);
  try {
    const transactions = await transaction.create({
      // id: uuidv4(),
      ...req.body,
      // const data = req.body
      // const { checkin, checkout,user_id,houseId,status } = req.body

      // checkin:transactionsData.checkin,
      // checkout:transactionsData.checkout,
      // user_id:transactionsData.user_id,
      // houseId:transactionsData.houseId,
      // status:transactionsData.status,
    });

  
    let createdTransaction = await transaction.findOne({
      where: {
        id: transactions.id,
      },
      include: [
        {
          model:House,
          as:"house",
          attributes:{
            exclude:["id","createdAt", "updatedAt"],
          },
          include: [
              {
                model: City,
                as: "city",
                attributes: {
                  exclude: [  "createdAt", "updatedAt"],
                },
              },
              
             
            ],
      attributes:{

            exclude:[ "city_id","createdAt", "updatedAt"],
          },
        },
  ],

     
      attributes:{
          exclude:[ "user_id","houseId","createdAt", "updatedAt"],
        },
    });


    createdTransaction = JSON.parse(JSON.stringify(createdTransaction));
    
   
    res.send({
      status: "success",
      message: "resource has successfully ",
      data: createdTransaction,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};
  exports.updateTransaction = async (req, res) => {
  const { id } = req.params;
  const path = process.env.PATH_FILE

    try {
        let data = req.body
        const attachment = req.files.imageFile[0].filename 

        data = {
            ...data,
            attachment
        }
        await transaction.update(data, {
            where: {
              id:id
            },
          });
          let transactions = await transaction.findOne({
            where: {
              id,
            },
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          });

          // let parseJSON = JSON.parse(JSON.stringify(transactions))

          //     transactions = parseJSONs =>{
          
          //         return {
          //             ...transactions,
          //             attachment: attachment ? path + attachment : null
          //         }
          // }
      const parseJSON = JSON.parse(JSON.stringify(transactions))

      transactions = parseJSONs => {
          return {
              ...transaction,
              attachment: transaction.attachment ? path + transaction.attachment : null
          }
      }
   
          res.send({
            status: "success",
            message: "resource has successfully Updated",
            data: transaction,
          });
        } catch (error) {
            console.log(error)
          res.status(500).send({
            status: "failed",
            message: "internal server error",
          });
        }
      };
      exports.StatusUpdate = async (req, res) => {
        const { id } = req.params;
      
          try {
              let data = req.body
              // const status=req.body.status
              // ...req.body,
              
              console.log(data)
              data = {
                ...data,
            }
              await transaction.update(data, {
                  where: {
                    id:id
                  },
                });
                let transactions = await transaction.findOne({
                  where: {
                    id,
                  },
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                });
            
            
            
         
                res.send({
                  status: "success",
                  message: "resource has successfully Updated",
                  data: transactions,
                });
              } catch (error) {
                  console.log(error)
                res.status(500).send({
                  status: "failed",
                  message: "internal server error",
                });
              }
            };

exports.getTransaction = async (req, res) => {
try {
    const path = process.env.PATH_FILE

    const transactions = await transaction.findOne({
        
    where: {
        id: req.params.id,
    },
    include: [
        {
            model:House,
            as:"house",
            attributes:{
              exclude:["id","createdAt", "updatedAt"],
            },
            include: [
                {
                  model: City,
                  as: "city",
                  attributes: {
                    exclude: [  "createdAt", "updatedAt"],
                  },
                },
                
               
              ],
        attributes:{

              exclude:[ "city_id","createdAt", "updatedAt"],
            },
          },
    ],
    
    attributes:{
        exclude:[ "user_id","houseId","createdAt", "updatedAt"],
      },
    });


    const parseJSON = JSON.parse(JSON.stringify(transactions))

      transactions = parseJSONs => {
          return {
              ...transaction,
              attachment: transaction.attachment ? path + transaction.attachment : null
          }
      }

    res.send({
    status: "success",
    message: "resource has successfully get",
    data: transactions,
    
    
    });
} catch (error) {
    console.log(error);

    res.status(500).send({
    status: "failed",
    message: "internal server error",
    });
}
};
    

exports.getAllTransaction = async (req, res) => {
    try {

        const path = process.env.PATH_FILE

        let transactions = await transaction.findAll({
            include: [
              {
                model:user,
                as:"user",
                attributes:{
                    exclude:["id","user_id","createdAt", "updatedAt"],
                  },
                  include: [{
                model:listAs,
                as:"listas",
                attributes: {
                  exclude: [ "id", "createdAt", "updatedAt"],
                },
                  }],
                  attributes: {
                      exclude: [ "username","address","email","password","image", "createdAt", "updatedAt"],
                    },
              },
                {
                    model:House,
                    as:"house",
                    attributes:{
                      exclude:["id","createdAt", "updatedAt"],
                    },
                    include: [
                        {
                          model: City,
                          as: "city",
                          attributes: {
                            exclude: [  "createdAt", "updatedAt"],
                          },
                        },
                       
                        
                       
                      ],
                attributes:{
        
                      exclude:[ "city_id","createdAt", "updatedAt"],
                    },
                  },
            ],
        
               
                attributes:{
                    exclude:[ "user_id","houseId","createdAt", "updatedAt"],
                  },
              });
          
        const parseJSON = JSON.parse(JSON.stringify(transactions))

        transactions = parseJSON.map(transaction => {
            return {
                ...transaction,
                attachment: transaction.attachment ? path + transaction.attachment : null
            }
        })

        res.send({
            status: 'success',
            data: {
                transactions
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}
  


exports.transactionId = async (req, res) => {
  const path = process.env.PATH_FILE

  try {
    let transactions = await transaction.findAll({
      where: {
        user_id: {
          [Op.eq]: parseInt(req.query.user_id)
        },
      },

      include: [
        {
            model:House,
            as:"house",
            attributes:{
              exclude:["id","createdAt", "updatedAt"],
            },
            include: [
                {
                  model: City,
                  as: "city",
                  attributes: {
                    exclude: [  "createdAt", "updatedAt"],
                  },
                },
                
               
              ],
        attributes:{

              exclude:[ "city_id","createdAt", "updatedAt"],
            },
          },
    ],

       
        attributes:{
            exclude:[ "user_id","houseId","createdAt", "updatedAt"],
          },
      });

      const parseJSON = JSON.parse(JSON.stringify(transactions))

      transactions = parseJSON.map(transaction => {
          return {
              ...transaction,
              attachment: transaction.attachment ? path + transaction.attachment : null
          }
      })
   
      
    res.send({
      status: "success",
      message: "resource has successfully get",
      data: transactions

    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      // status: "failed",
      message: "internal server error",
    });
  }
};

// exports.createTransaction = async (req, res) => {
//     try {

//       const transactions = await transaction.create({
//         ...req.body,
//       });
//       const TransactionDataStored = await transaction.findOne({
//         where: {
//           status: req.body.status
//         },
//         include:[
//         //     {
//         //   model:user,
//         //   as:"user",
//         //   attributes:{
//         //       exclude:["id","user_id","createdAt", "updatedAt"],
//         //     },
//         //     include: [{
//         //   model:listAs,
//         //   as:"listas",
//         //   attributes: {
//         //     exclude: [ "id", "createdAt", "updatedAt"],
//         //   },
//         //     }]
//         //     attributes: {
//         //         exclude: [ "fullname","username","address","email","password","image","gender", "createdAt", "updatedAt"],
//         //       },
//         // },
     
//         {
//             model:House,
//             as:"house",
//             attributes:{
//               exclude:["id","createdAt", "updatedAt"],
//             },
//             include: [
//                 {
//                   model: City,
//                   as: "city",
//                   attributes: {
//                     exclude: [  "createdAt", "updatedAt"],
//                   },
//                 },
                
               
//               ],
//         attributes:{

//               exclude:[ "city_id","createdAt", "updatedAt"],
//             },
//           },
//     ],

       
//         attributes:{
//             exclude:[ "user_id","houseId","createdAt", "updatedAt"],
//           },
//       });
  
  
//       res.send({
//         status: "success",
//         message: "resource has successfully created",
//         data:TransactionDataStored
//         // data: {
//         //   // id: HouseDataStored.id,
//         //   address: TransactionDataStored.address,
//         //   price: TransactionDataStored.price,
//         //   price: TransactionDataStored.price,
//         //   typeRent: TransactionDataStored.typeRent,
//         //   amenities: TransactionDataStored.amenities.split(","),
//         //   bathroom: TransactionDataStored.bathroom,
//         //   bedroom: TransactionDataStored.bedroom,
          
//         //   city:{
//         //     id:TransactionDataStored.city.id,
//         //     name:TransactionDataStored.city.name,
//         //   }
//         // },

//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
  
//         status: "failed",
//         message: "internal server error",
//       });
//     }
//   };
