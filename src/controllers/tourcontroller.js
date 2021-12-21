import TourInfos from "../models/tour";

class TourController{
    // create users
    static async createTour(req,res){
        req.body.user=req.user._id;
        const tour= await TourInfos.create(req.body);
            req.body.user=req.user._id;
        
        if(!tour){
            return res.status(404).json({Error:"tour note registed"})
        }
            
           return res.status(200).json({message:"user created successeful",data:tour});

            
        }
        // get all tours
        static async getAllTours(req,res){
            const tour=await TourInfos.find();
            if(!tour){
                return res.status(404).json({Error:"tour note retrieves well"})
            }
                
               return res.status(200).json({message:" successeful retrieved tour",data:tour });
    
                
            }
            // get one tour
            static async getOneTour(req,res){
                const tour= await TourInfos.findById(req.params.id);
                if(!tour){
                    return res.status(404).json({Error:"tour note registed"})
                }
                    
                   return res.status(200).json({message:"user created successeful",data:tour});
        
                    
                }
                // delete one user
                static async deleteOneTour(req,res){
                    const tour= await TourInfos.findByIdAndDelete(req.params.id);
                    if(!tour){
                        return res.status(404).json({Error:"tour note found"})
                    }
                        
                       return res.status(200).json({message:"one tout delete"});
            
                        
                    }
    }


    export default TourController;

