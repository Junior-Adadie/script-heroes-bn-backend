import { AvailableRequest } from '../database/models';

export default {
  displaydirectRequests: async (req, res) => {
   const allRequests = await AvailableRequest.findAll();
   if (!allRequests) {
       res.status(404).json({message:'No requests found'})
   }
   res.status(200).json({allRequests : allRequests});

  },
  displaydirectpendingRequests: async (req, res) => {
    const pendingRequests = await AvailableRequest.findAll({where:{status:'pending'}});
    if (!pendingRequests) {
        res.status(404).json({message:'No pending requests found'})
    }
    res.status(200).json({pendingRequests : pendingRequests});
   },
  displaydirectapprovedRequests: async (req, res) => {
    const approvedRequests = await AvailableRequest.findAll({where:{status:'approved'}});
    if (!approvedRequests) {
        res.status(404).json({message:'No approved requests found'})
    }
    res.status(200).json({approvedRequests : approvedRequests});
   },
   makeDecision: async (req,res) => {
     const request = await AvailableRequest.findByPk(req.params.id)
     if (!request) {
       res.status(400).json({error:`request with id ${req.params.id} is not found`})
     }else{
       const  makeDecision = await  request.update(req.body.action, {where:{id:req.params.id}});
     if (req.body.action == 'approve') {
      await request.update({status:'approved'})
      res.status(201).json({message:'Request approved succesfully',
      request:request})
    }
    if (req.body.action == 'cancel') {
     await request.update({status:'canceled'})
     res.status(201).json({message:'Request cancelled succesfully',
     request:request})
   }
     }
    
     
    
     }
};
