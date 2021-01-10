import { mongooseInstance, mongooseConnection } from "../db/db";
import { IBussinessInterface } from "../../models/Interfaces/bussiness.interface";
import { Schema } from "mongoose";
import { Decimal128 } from "mongodb";

const BussinessSchema = new mongooseInstance.Schema({
        title: {
            type:String,
            required:true,
            maxlength:225
        },
        location: {
            type:String,
            required:true
        },
        profilePic:{
            type:String,
        },
        mainQuote:{
            type:String,
        },
        subQuote:{
            type:String,
        },
        productDetailsDes:{
            type:String,
        },
        venueDetailsDes:{
            type:String,
        },
        coverPic:{
            type:String,
        },
        category:{
            type:Schema.Types.ObjectId
        },
        userId:{
            type:Schema.Types.ObjectId
        },
        lat:{
            type:Decimal128
        },
        lng: {
            type:Decimal128
        },
        email:{
            type:String,
            required:true,
            maxlength:225,   
        },
        website:{
            type:String,
        },
        phoneNumber: {
            type:Number,
        },
        mobile: {
            type:Number,
        },
        user:{
            type:Object,
        },
        twitter: {
            type:String,
        },
        facebook: {
            type:String,
        },
        googleplus: {
            type:String,
        },
        openingDays: {
            type:Array,
        },
        from: {
            type:Number,
        },
        to:{
            type:Number,
        },
        fulldescription: {
            type:String,
        },
        created_at: {
            type:Date,
        },
        updated_at:{
            type:Date,
        },    
}).pre<IBussinessInterface>("save",function(next){
    if (this.isNew) {
        console.log("saving............",this)
        this.created_at = new Date();
      } else {
        this.updated_at = new Date();
      }
      next();
})

const schemModel = mongooseConnection.model<IBussinessInterface>("bussiness", BussinessSchema);
export default schemModel;