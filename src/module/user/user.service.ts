import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/interface/user.interface';
import { CreateUserDto } from './dto/create.user.dto';
import { generateHash, validateHash } from 'src/common/utils';
import { UpdateUserDto } from './dto/update.user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { UserLoginDto } from './dto/user.login.dto';

@Injectable()
export class UserService {
    constructor( @InjectModel('User') private userModel: Model<User>, private jwtService: JwtService, private configurationService: ConfigurationService ){}
    
    async registerUser(createUserDto: CreateUserDto): Promise<User> {
        try {
            const { email } = createUserDto;
            const userExist = await this.userModel.find({ email })
            if(userExist?.length > 0){
                throw new HttpException("Email already exists", HttpStatus.NOT_ACCEPTABLE)
            }
            else{
                const { password } = createUserDto;
                const encryptedPassword = generateHash(password);
                createUserDto.password = encryptedPassword;    
                return await this.userModel.create(createUserDto);
            }
        } catch (error) {
            throw error;
        }
    }

    async userLogin(userLoginDto: UserLoginDto){
        try{
            const { email } = userLoginDto;
            const user = await this.userModel.find({ email })
            if(user.length > 0){
                const hashPassword = user[0].password
                const { password } = userLoginDto
                const verifyPassword = await validateHash(password, hashPassword)                
                if(verifyPassword){
                    const payload = {
                        id: user[0]._id,
                        first_name: user[0].first_name,
                        last_name: user[0].last_name,
                        email: user[0].email
                    }
                    const privateKey = this.configurationService.authConfig.privateKey
                    return {
                        access_token: await this.jwtService.signAsync(payload, { secret: privateKey }),
                        user
                      };
                }
                else{
                    throw new HttpException("Password Mismatch", HttpStatus.NOT_ACCEPTABLE)
                }
            }
            else{
                throw new HttpException("Email Not Exist", HttpStatus.NOT_FOUND)
            }
        }
        catch(error){
            throw error
        }
    }

    async getAllUsers(): Promise<User[]>{
        return await this.userModel.find();
    }

    async getUserById(userId: string): Promise<User[]>{
        return await this.userModel.findById(userId)
    }

    async updateUser( userId: string, updateUserDto: UpdateUserDto): Promise<User>{
        return await this.userModel.findByIdAndUpdate(userId, updateUserDto, { new: true });
    }

    async deleteUser( userId: string ): Promise<User>{
        return await this.userModel.findByIdAndDelete(userId)
    }
}
