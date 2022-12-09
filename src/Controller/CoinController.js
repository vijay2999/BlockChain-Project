const coinModel= require("../Model/coinModel")
const axios= require("axios")

const getCoin= async function(req,res){
    try{
        const option={
            method:"get",
            url:`https://api.coincap.io/v2/assets`
        }
      const result=await axios(option)
      const Data=result.data.data
      let sorted = Data.sort((a,b)=> a.changePercent24Hr-b.changePercent24Hr)
      await coinModel.deleteMany()
      await coinModel.create(Data)

      return res.status(200).send({status:true,Data:sorted})
    }catch(error){
        return res.status(500).send({status:false , message:error.message})
    }
}

module.exports.getCoin=getCoin
