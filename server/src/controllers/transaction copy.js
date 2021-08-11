const { transaction,user,listAs,House,order,orderCity,product  } = require('../../models')
const joi = require('joi')
const { Op, Transaction } = require("sequelize");

exports.createTransaction = async (req, res) => {
  const path = process.env.PATH_FILE
  try {

    let data = req.body
    // console.log("req.body",data)
    // console.log(data)
    // console.log("inidataprodu", data)
    // console.log("inidataprodu", data.product)
    // console.log("inidataproduks", data.product)
    const dataProduk=data.product
    
    const attachment = req.files.imageFile[0].filename 
    const dataParse=JSON.parse(dataProduk)
    console.log("data",data)
    console.log("dataParse",dataParse)
    var idProduks=[]
    dataParse.map(async(items)=>{
      idProduks = idProduks.concat(items.id);
    })
    console.log(idProduks);

//     let res = await   orderQuantity.map((num1, index) => {
const name=data.name
const email=data.email
const phone=data.phone
const address=data.address
const postCode=data.postCode
const description=data.description
const user_id=data.user_id
// const productId=data.id
// const user_id=data.user_id
// var orderId=""
// console.log(productId)
const newData = await transaction.create({
user_id:user_id,

// productId:idProduks.join(),
name:name,
 email:email,
 phone:phone,
 address:address,
 postCode:postCode,
 description:description,
 attachment:attachment,
 status:"Waiting Approve",
//  orderId:orders.dataValues.id
//  orderId:orderId
 
  });
  await Promise.all(
    dataParse.map(async(item)=>{
      const{id,qty}=item;
console.log(id,qty,newData.id)
    const orders=  await order.create({
        transactionsId:newData.id,
        productsId:id,
        orderQuantity:qty,
      })
      console.log("orders",orders)
      // orderId=orders.dataValues.id
      
      // orderId=
    })
  )
  // console.log(orders.dataValues.id)
  // console.log("orderIds",orderId)

  //   var orderId=orders.dataValues.id
//   var orderAr=[]
//   var i =0;
//   for(i=2; i>=0; i--){
//     // console.log("datai",i)
//  const a=   eval(orderId-i)
//  orderAr.push(a)
//     console.log("dataorder",a)

//   }
//   console.log(orderAr)
//   await transaction.update({
//     orderId: orderAr.join(),
//   }, {
//     where: {
//       id: newData.id
//     }
//   })
  

    data = {
      ...data,
      attachment
  }
  
 
    let createdTransaction = await transaction.findOne({
      // where: {
      //   id: transactions.id,
      // },
      // include: 
      //   {
      //     model:product,
      //     as:"product",
      //     attributes:{
      //       exclude:["id"],
      //     }
      //   },
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
              model:product,
              as:"product",
              attributes:{
                exclude:["id","createdAt", "updatedAt"],
              },
              include: [{
                model:order,
                as:"order",
                attributes: {
                  exclude: [ "id", "createdAt", "updatedAt"],
                },
                  }],
              
             
          attributes:{
  
                exclude:[ "city_id","createdAt", "updatedAt"],
              },
            },
      ],
  
      attributes:{
          exclude:[ "user_id","houseId","createdAt", "updatedAt"],
        },
    });
    // createdTransaction = JSON.parse(JSON.stringify(createdTransaction));
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
    let transactions = await transaction.findOne({
        
    where: {
        id: req.params.id,
    },
    // include: [
    //      {
    //         model:order,
    //         as:"order",
    //         attributes:{
    //           exclude:["createdAt", "updatedAt"],
    //         }, 
    //       }
            // include: [{
            //   model:order,
            //   as:"order",
            //   attributes: {
            //     exclude: [ "id", "createdAt", "updatedAt"],
            //   },
            //     }],

        // attributes:{
        //       exclude:[ "city_id","createdAt", "updatedAt"],
        //     },
        //   },
    // ],

       
     
      });
      // const orders=await order.findOne({
      //   where:{
      //     id:transactions.orderId
      //   },
      // })
      const products=await order.findAll({
        where:{
          // id:transactions.id
          transactionsId:transactions.id

        },
        attributes:{
              exclude:[ "id","productsId","transactionsId","createdAt", "updatedAt"],
            },
        include: [
        {
          model:product,
          as:"product",
          attributes:{
            exclude:["ProductId","createdAt", "updatedAt"],
            // exclude:["transactionsId", "id","ProductId","createdAt", "updatedAt"],
          }, 
        }, 
       
    ],
      })

     
      // const parseJSON = JSON.parse(JSON.stringify(parseInt(transactions.orderId.length)))

      // let orders = parseJSON.map(orderItem => {
      //     return {
      //         ...orderItem,
      //           // orderId: orderItem[0],
      //           // orderQuantity: transactions.orders.orderQuantity,
            
      //     }
      // })
   
     
     
    res.send({

    status: "success",
    message: "resource has successfully get",
    data:{transactions,products}
    // data:{
    //   transactions,
    //   products,orderId1
    // }

    
    
    });
} catch (error) {
    console.log(error);

    res.status(500).send({
    status: "failed",
    message: "internal server error",
    });
}
};

exports.getMyTransaction = async (req, res) => {
  const path = process.env.PATH_FILE
  try { 
      const { idUser } = req
  console.log(idUser)
  let users = await user.findOne({

      where: {
        id:req.idUser
      },
          attributes:{
            exclude:["password","createdAt", "updatedAt"],
          },
      })

  let transactions = await transaction.findAll({
    where: {
      user_id:req.idUser
    },
    include: [
      
        {
            model:product,
            as:"product",
            attributes:{
              exclude:["id","createdAt", "updatedAt"],
            },
            
           
        attributes:{

              exclude:[ "city_id","createdAt", "updatedAt"],
            },
          },
    ],

       
        attributes:{
            exclude:[ "product_id","user_id","houseId","createdAt", "updatedAt"],
          },
      });
          
   
       users = JSON.parse(JSON.stringify(users))
      users = {
              ...users,
                image: users.image ? path + users.image : null
      }
      const parseJSON = JSON.parse(JSON.stringify(transactions))

      transactions = parseJSON.map(transaction => {
          return {
              ...transaction,
                photo: transaction.product.photo ? path + transaction.product.photo : null,
            
          }
      })
  
      res.send({
      status: "success",
      message: "resource has successfully get",
      data: {users,transactions}
      
      
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
        // console.log(req.body.id)
        // let transactions = await transaction.findOne({
        //   // orderId:req.
      //   // })
      //   let orders = await order.findOne({
      //     where: {
      //     transactionsId:req.body.id
      //   }
      // })
      // let  transactions= await transaction.findAll({ include: ["order"] });
      // let  transactions= await transaction.findByPk(transactionsId,{ include: ["order"] });
      // let    transactions.findByPk(id, { include: ["order"] });
         let transactions = await transaction.findAll({
                attributes:{
                    // exclude:["orderQuantity", "productId","product_id","user_id","houseId","createdAt", "updatedAt"],
                    exclude:[ "productId","product_id","user_id","houseId","createdAt", "updatedAt"],
                  },
              });
              
              // console.log("tr2",transactions)
              // const transactionJsonString=JSON.stringify(transactions)
              // console.log(transactionJsonString)
              // console.log(JSON.stringify(transactions))
              // console.log("tr2",transaction)
              transactions = transaction.findAll(['script', 'form'])
              transactions.extend(order.findAll(id="footer"))

              const products=await order.findAll({
            
                attributes:{
                      exclude:[ "id","productsId","transactionsId","createdAt", "updatedAt"],
                    },
                include: [
                {
                  model:product,
                  as:"product",
                  attributes:{
                    exclude:["ProductId","createdAt", "updatedAt"],
                    // exclude:["transactionsId", "id","ProductId","createdAt", "updatedAt"],
                  }, 
                }, 
               
            ],
              })
          
              const merge=transactions.concat(products)
              // console.log(merge)
              // console.log(array1.concat(array2));

        const parseJSON = JSON.parse(JSON.stringify(transactions))
        const parseJSONs = JSON.parse(JSON.stringify(products))
        const merges=parseJSON.concat(parseJSONs)
              console.log("merge",parseJSON)

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
                // ,products
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
              model:product,
              as:"product",
              attributes:{
                exclude:["id","createdAt", "updatedAt"],
              },
             
          attributes:{
  
                exclude:[ "city_id","createdAt", "updatedAt"],
              },
            },
      ],
  
         
          attributes:{
              exclude:[ "product_id","user_id","houseId","createdAt", "updatedAt"],
            },
        });
      // const parseJSON = JSON.parse(JSON.stringify(transactions))

      // transactions = parseJSON.map(transaction => {
      //     return {
      //         ...transaction,
      //         attachment: transaction.attachment ? path + transaction.attachment : null
      //     }
      // })
   
      
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
