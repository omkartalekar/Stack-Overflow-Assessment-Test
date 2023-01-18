import Questions from "../models/questionSchema.js";


export const getUserReadById = async (request, response) => {
    try {
        const question = await Questions.findOne({id:request.params.id});

        if(!question){
            response.status(500).send("Question not found");
        }

        counter= question.popularityCount+1;

        const counterUpdate=await Questions.findOneAndUpdate({id:req.params.id},{popularityCount:counter});

        if(!counterUpdate){
            response.status(500).json({message:"Popularity count not updated"});
        }

        return response.status(200).json(question);

    }catch (error) {

        response.send(error);

    }
}

