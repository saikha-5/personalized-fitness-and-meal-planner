import * as bcrypt from "bcrypt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminEntity } from "./admin.entity";
import { MailerService } from "@nestjs-modules/mailer";
import {AdminEditProfile, AdminProfile} from "./adminform.dto";
import { Repository } from "typeorm";
import { PlannerUpdateForm } from "src/Planner/plannerupdateform.dto";
import { PlannerEntity } from "src/Planner/planner.entity";


@Injectable()
export class AdminService{
   
    getIndex(): string 
  {
    return 'Trainer Index';
  }
    

    constructor(
        @InjectRepository(AdminEntity) 
        private adminRepo: Repository<AdminEntity>,
        private plannerRepo: Repository<PlannerEntity>,
        private readonly mailerservice: MailerService

        ){}

       
          
          async signin(mydto){
         

          const mydata= await this.adminRepo.findOneBy({email: mydto.email});
          console.log(mydata.password)
          const isMatch= await bcrypt.compare(mydto.password, mydata.password);
          if(isMatch) {
          return  1;
          }
          else {
              return 0;
          }
          
          }

        
async addAdmin(admin:AdminProfile){
    const adminaccount = new AdminEntity();

    adminaccount.admin_name = admin.admin_name;
    adminaccount.user_name = admin.user_name;
    adminaccount.phoneNo = admin.phoneNo;
    adminaccount.email = admin.email;
    adminaccount.address = admin.address;
    adminaccount.joining_year = admin.joining_year;
    adminaccount.birth_date = admin.birth_date;
    adminaccount.filename = admin.filename;

   
    console.log(adminaccount.address);

    const salt = await bcrypt.genSalt(8);
    adminaccount.password = await bcrypt.hash(admin.password, salt);
    
    const isValidName = await this.adminRepo.findOneBy({user_name: admin.user_name});
   
    
    if(!isValidName ){
        await this.adminRepo.save(adminaccount);
        return "Admin added successfully!";
    }
    else 
        return "Username or Email already been registered!";


}
    

async editProfile(id: number, admin: AdminEditProfile) {
    const user = await this.adminRepo.findOne({
        where: {
            id: id
        }
    });

    try {
        if (user) {
            const editProfile = this.adminRepo.update(id, admin);
            return { update: await editProfile, image: admin.filename };
           
        }
        else
            throw new UnauthorizedException("Admin not found");
    }
    catch {
        throw new UnauthorizedException("Admin not found");
    }
}

 
    async getAdminprofile(id:any){

     const admin = await this.adminRepo
            .createQueryBuilder("admin")
            .select('admin.admin_name')
            .addSelect('admin.user_name')
            .addSelect('admin.phoneNo')
            .addSelect('admin.email')
            .addSelect('admin.address')
            .addSelect('admin.joining_year')
            .addSelect('admin.birth_date')
            .where('admin.id = :id',{ id : id})
            .getOne();

            return admin;
    }

    getAdminByid(id): any {
        console.log(`Admin Found!`);
        return this.adminRepo.findOneBy({ id });
    }

    getAdminByuser_name(user_name): any {
        console.log(`Admin Found!`);
        return this.adminRepo.findOneBy({ user_name});
    }
    getAdminByemail(email): any {
        console.log(`Admin Found!`);
        return this.adminRepo.findOneBy({email});
    }
    getAdminByadmin_name(admin_name): any {
        console.log(`Admin Found!`);
        return this.adminRepo.findOneBy({admin_name});
    }
    async deleteAdminByID(id: any): Promise<any> {
        const user = await this.adminRepo.findOne({
            where: {
                id: id
            }
        });
        if (user) {
            this.adminRepo.delete(id);
            return "Admin deleted!";
        }
        else
            throw new UnauthorizedException("ID not found");
    }
















    getPlanners():any {
        return this.plannerRepo.find();
    }

    getPlannersByPlannerID(id):any {
        return this.plannerRepo.find({ 
                where: {id:id},
            relations: {
                admin: true,
            },
         });
    }

    getPlannersByPlannerByName(name):any {
        return this.plannerRepo.find({ 
                where: {name:name},
            relations: {
                admin: true,
            },
         });
    }

    
    updatePlannerbyid(mydto:PlannerUpdateForm,id):any {
        return this.plannerRepo.update(id,mydto)
    }

    async deleteManagerByID(id: any): Promise<any> {
        const user = await this.plannerRepo.findOne({
            where: { id: id },
        })

        if (user)
            return this.plannerRepo.delete(id);

        else
            throw new UnauthorizedException("Manager not found");
    }

    

    }

    


















