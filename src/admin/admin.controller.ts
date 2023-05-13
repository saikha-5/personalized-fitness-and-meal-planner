import { UseInterceptors, Controller, Post, UsePipes, ValidationPipe, ParseFilePipe, UploadedFile, MaxFileSizeValidator, FileTypeValidator, Body, Get, Param, ParseIntPipe, UseGuards, Session, Patch } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express/multer/interceptors/file.interceptor";
import { diskStorage } from "multer";
import { AdminEntity } from "./admin.entity";
import { AdminService } from "./admins.service";
import { AdminEditProfile, AdminProfile } from "./adminform.dto";;
import { AdminSessionGuard } from "./session.guard";

@Controller("/admin")
export class AdminController {
    
 
    

  constructor(private adminservice:AdminService) { } 


  @Get('/index')
    getTrainer(): any 
    {
      return this.adminservice.getIndex();
    }
    @Get('/signin')
    signin(@Session() session, @Body() mydto:AdminProfile)
    {
    if(this.adminservice.signin(mydto))
    {
      session.email = mydto.email;
    
      
      return {message:"success"};
    
    }
    else
    {
      return {message:"invalid credentials"};
    }
      
    }
  

  @Post('/addAdmin')
  @UseInterceptors(FileInterceptor('myfile', {
      storage: diskStorage({
          destination: './files',
          filename: function (req, file, cb) {
              cb(null, Date.now() + "_" + file.originalname)
          }
      })
  }))
  addAdmin(@Body() admin: AdminProfile,@UploadedFile(new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator({ maxSize: 16000 }),
            new FileTypeValidator({ fileType: 'png|jpg|jpeg|'}),
        ],
    }),) file: Express.Multer.File){

        admin.filename= file.filename;  
        console.log(file)
        
        return this.adminservice.addAdmin(admin);
        
        }
    
    @Patch("/editProfile/")
    @UseInterceptors(FileInterceptor('myfile', {
        storage: diskStorage({
            destination: './data/admin/profilePictures',
            filename: function (_req, file, cb) {
                cb(null, Date.now() + "_" + file.originalname)
            }
        })
    }))
    editProfile(
        @Session() session,
        @UploadedFile() adminImage: Express.Multer.File,
        @Body('id', ParseIntPipe) id: number,
        @Body() admin: AdminEditProfile
    ): any {
        if (adminImage)
            admin.filename = adminImage.filename;
        return this.adminservice.editProfile(id, admin);
    }
    @Get("/profile/")
    @UseGuards(AdminSessionGuard)
    getAdminprofile(@Session() session): any {
        return this.adminservice.getAdminprofile(session.Id);
    }



@Get("/searchAdmin/:id")
    @UseGuards(AdminSessionGuard)
    getAdminbyid(@Param('id', ParseIntPipe) id: any): any {
        return this.adminservice.getAdminByid(id);
    }
@Get("/searchAdmin/:username")
    @UseGuards(AdminSessionGuard)
    getAdminByuser_name(@Param('user_name', ParseIntPipe) user_name: any): any {
        return this.adminservice.getAdminByuser_name(user_name);
    }
@Get("/searchAdmin/:email")
    @UseGuards(AdminSessionGuard)
    getAdminByemail(@Param('email', ParseIntPipe) email: any): any {
        return this.adminservice.getAdminByemail(email);
    }
@Get("/searchAdmin/:adminname")
    @UseGuards(AdminSessionGuard)
    getAdminByadmin_name(@Param('admin_name', ParseIntPipe)admin_name: any): any {
        return this.adminservice.getAdminByadmin_name(admin_name);
    }         

//..............admin.............//







}