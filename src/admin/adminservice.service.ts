import { Injectable } from "@nestjs/common";
import { AdminForm } from "./adminform.dto";


@Injectable()
export class AdminService {

getIndex():string { 
    return "Admin Index"; 

}
getUserByID(id):any {
    
    return "the id is "+id;
}
getPlannerByID(id):any {
    
    return "the id of the planner is "+id;
}
getPlannerByIDName(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.name;
}

getUserByIDName(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.name;
}

insertUser(mydto:AdminForm):any {
    
        return "Admin Inserted user name: " + mydto.name+" and id is " + mydto.id;
    }
insertPlanner(mydto:AdminForm):any {
    
        return "Admin Inserted planner name: " + mydto.name+" and id is " + mydto.id;
    }

updateUser(name,id):any {
        return "Admin updated user name: " +name+" and id is " +id;
    }
updateUserbyid(name,id):any {
        return "Update admin where id " +id+" and change name to " +name;
    }
    deleteUserbyid(id):any {
    
        return "Delete id is "+id;
    }
    

}