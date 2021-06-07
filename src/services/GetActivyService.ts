import {getRepository} from 'typeorm';
import {Activy} from '../models/Activy';

interface userId {
    id?: string;
}

class GetActivyService{
    public async execute({id}:userId){

        console.log('Id do usuÃ¡rio da atividade: ' + id)

        const activyRepository = getRepository(Activy);
        
        const activies = await activyRepository.find({relations: ["course_unit"]});
        
        //const activies = activyRepository.find();

        if(!activies){
            return{
                message:"activies not found"
            }
        }
        return activies;
    }
}
export {GetActivyService};