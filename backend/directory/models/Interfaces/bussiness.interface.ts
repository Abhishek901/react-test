import { Decimal128 } from "mongodb";
import { Document, Schema } from "mongoose";

export interface IBussinessInterface extends Document{
    title: String;
    location: String;
    category: Schema.Types.ObjectId;
    userId:Schema.Types.ObjectId;
    profilePic:String;
    mainQuote:String;
    subQuote:String;
    coverPic:String;
    productDetailsDes:String;
    venueDetailsDes:String;
    user:Object;
    lat: Decimal128;
    lng: Decimal128;
    email: String;
    website: String;
    phoneNumber: Number;
    mobile: Number;
    twitter: String;
    facebook: String;
    googleplus: String;
    openingDays:Array<Object>;
    from: String;
    to: String;
    fulldescription: String;
    created_at:Date;
    updated_at:Date;
}