import { Request, Response, Router } from "express";
import Auth from "../../../server/middlewares/authMiddlewares/auth.base.middlware"
import {validationResult} from "express-validator";
import error_handler from "../../../server/middlewares/error.handler.class";
import bussiness_validator from "../../../server/middlewares/validators/bussiness.validator"
import BussinesObject from "../../../bussinessLogic/bussiness.bussiness"; 
import ZomatoApi from "../../../bussinessLogic/zomato.bussiness";

class Bussiness {

  private _router: Router;
  static tokenData :any;
  static plane_cat_array:any;
  static plane_name_array:any;
  
  constructor(router: Router) {
    const multerUpload = new BussinesObject();
    this._router = router;
    this._router.get("/", Auth.base,this.getBussiness);
    this._router.patch("/", Auth.base,this.updateABussiness); 
    this._router.post("/", Auth.base,bussiness_validator,this.addBussiness);
    this._router.post("/zomato", Auth.base,this.getZomatoRatings);
    this._router.get("/:id",Auth.base,this.getBussinessbyId);
    this._router.post(
      "/upload",
      multerUpload.uploadMular().single("photo"),
      this.upload
    );
  
  }

  public updateABussiness = async (req:Request,res:Response) =>{  
    console.log("here in patch business .................."); 
    //
    // console.log(req.body)
    const bussinesObject = new BussinesObject();
    if("md5Image" in req.body){
      console.log(true)
      const {Id, md5Image} = req.body; 
      bussinesObject.findOneAndUpsert(Id,{profilePic:md5Image},(err,results)=>{
           if(err){
            new error_handler(500,'something whent wrong!!',err)
           }
           res.status(200).send(results);
        })
     }

     if("subQuote" in req.body){
      const {Id, subQuote} = req.body; 
      bussinesObject.findOneAndUpsert(Id,{subQuote:subQuote},(err,results)=>{
           if(err){
            new error_handler(500,'something whent wrong!!',err)
           }
           res.status(200).send(results);
        })
     }

     if("mainQuote" in req.body){
      const {Id, mainQuote} = req.body; 
      bussinesObject.findOneAndUpsert(Id,{mainQuote:mainQuote},(err,results)=>{
           if(err){
            new error_handler(500,'something whent wrong!!',err)
           }
           res.status(200).send(results);
        })
     }
    
  }

  public addBussiness = async (req: Request, res: Response, next) => {
    console.log("here in post business ..................");  
    const errors = validationResult(req);
    console.log(errors) 
    if (!errors.isEmpty())
        return next(new error_handler(422,'something whent wrong!!',errors));
        const businessObj =  new BussinesObject();
        businessObj.create(req.body,(err,result)=>{
            if(err){
              new error_handler(500,'something whent wrong!!',err)
            }
            res.status(200).send(result);
        });        
  };
  public getZomatoRatings=async (req:Request,res:Response , next)=>{
    const ZomatoBussiness = new ZomatoApi();
    console.log("Here in zomato rateing part");

    try{
      const data:any =  await ZomatoBussiness.getRestorantListOnCords(28.838648,78.773331)
        console.log("data is ready to sended");
        const processedData = ZomatoBussiness.proccessData(data.data,req.body);
        res.status(200).send(processedData);
       }catch(error){
        console.log('here in error part');
        return next(new error_handler(422,'something whent wrong!!',error));
      }
  }
  getBussiness = (req: Request, res: Response, next)=>{
    console.log("here in get business .................."); 
    const businessObj =  new BussinesObject();
    console.log(req.body);
    businessObj.find((err,result)=>{
        if(err){
          new error_handler(500,'something whent wrong!!',err)
        } 
        res.status(200).send(result);
    });
  }
  getBussinessbyId=(req: Request, res: Response, next)=>{
    const businessObj =  new BussinesObject();
    const id = req.params.id;
    if(id){
      businessObj.findOne(id,(error,bussiness)=>{
         if(error){
           next(new error_handler(500,'need Id for call',"need Id for call"))
          }else{
            res.status(200).send(bussiness);
          }
      });
    }else{
      next(new error_handler(500,'need Id for call',"need Id for call"))
    }
        
  }
  static makeid(length) {
     var result           = '';
     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     var charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
  } 
  public upload = async (req: Request, res: Response, next) => {
    res.status(200).json(req["file"]);
    const UplaodBussiness = new BussinesObject();
    // UplaodBussiness.upload(req.body);
  };
}

module.exports = Bussiness;
