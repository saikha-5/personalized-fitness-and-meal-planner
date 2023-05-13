
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AdminEntity } from 'src/admin/admin.entity';


@Entity("planner")
export class PlannerEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  adminId : number

  @ManyToOne(() => AdminEntity, (admin) => admin.planners)
  admin:AdminEntity

  
  


}
