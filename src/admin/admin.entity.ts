
import { PlannerEntity } from "src/Planner/planner.entity";
import { Column, Entity , OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity("Admin")
export class AdminEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    admin_name : string;

    @Column()
    user_name : string;

    @Column()
    password : string;

    @Column()
    phoneNo : string;

    @Column()
    email : string;

    @Column()
    address : string;

    @Column()
    joining_year : string;

    @Column()
    birth_date : string;

    @Column()
    filename : string 

   
    

    @OneToMany(()=> PlannerEntity, (planner) => planner.admin )
    planners : PlannerEntity[]








}