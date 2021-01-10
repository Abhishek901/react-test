import { BussinessRepository } from "../repository/bussiness.repository";
import { IBussinesss } from "./interfaces/bussiness.bussiness.interface";
import { IBussinesssInterface } from "../models/Interfaces/bussiness.interface";

export class UserBussiness implements IBussinesss {
  private _bussinessRepository: BussinessRepository;

  constructor() {
    this._bussinessRepository = new BussinessRepository();
  }

  create(item: IBussinesssInterface, callback: (error: any, result: any) => void) {
    this._bussinessRepository.create(item, callback);
  }

  update(
    _id: string,
    item: IBussinesssInterface,
    callback: (error: any, result: any) => void
  ) {
    this._bussinessRepository.findOne(_id, (err, res) => {
      if (err) callback(err, res);
      else this._bussinessRepository.update(res._id, item, callback);
    });
  }

  find(
    callback: (error: any, result: Array<IBussinesssInterface>) => void,
    queryObject = {},
    withOption: boolean = false
  ) {
    withOption
      ? this._bussinessRepository.findByOption(callback, queryObject)
      : this._bussinessRepository.find(callback);
  }

 

  findOne(_id: string, callback: (error: any, result: IBussinesssInterface) => void) {
    this._bussinessRepository.findOne(_id, callback);
  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    this._bussinessRepository.delete(_id, callback);
  }

  findOneAndUpdate(
    _id: string,
    doc,
    callback: (error: any, result: any) => void
  ) {
    this._bussinessRepository.findOneAndUpdate(_id, doc, callback);
  }
}
