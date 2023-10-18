import { Controller, Post, Put, Get, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UserLoginDto } from './dto/user.login.dto';
import { API_STATUS_CODES, RESPONSE_MESSAGES } from 'src/constants/constants';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async registerUser(@Res() response, @Body() createUserDto: CreateUserDto) {
        try {
            const user = await this.userService.registerUser(createUserDto);
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "User Registered Successfully",
                data: user
            });
        } catch (error) {
            if (error.message == "Email already exists") {
                response.status(HttpStatus.NOT_ACCEPTABLE).json({
                    status: API_STATUS_CODES.ERROR_CODE,
                    response: RESPONSE_MESSAGES.DUPLICATE_ENTRY,
                    message: "Sorry, The provided email already exists."
                });
            }
            else {
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                    response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                    message: "Error: User not created!"
                });
            }
        }
    }

    @Post("/login")
    async userLogin(@Res() response, @Body() userLoginDto: UserLoginDto) {
        try {
            const login = await this.userService.userLogin(userLoginDto)
            response.status(HttpStatus.OK).json({
                statu: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "User Login Successfully",
                token: login.access_token,
                data: login.user
            })
        }
        catch (error) {
            if (error.message == "Email Not Exist") {
                response.status(HttpStatus.NOT_FOUND).json({
                    status: API_STATUS_CODES.NOT_FOUND,
                    response: RESPONSE_MESSAGES.EMAIL_NOT_EXIST,
                    message: "User not exist with the provided email"
                });
            }
            else if (error.message == "Password Mismatch") {
                response.status(HttpStatus.NOT_ACCEPTABLE).json({
                    status: API_STATUS_CODES.ERROR_CODE,
                    response: RESPONSE_MESSAGES.PASSWORD_MISMATCH,
                    message: "Sorry, the provided password is incorrect."
                });
            }
            else {
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                    response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                    message: "Error: Can't login!"
                });
            }
        }
    }

    @Get()
    async getAllUsers(@Res() response) {
        try {
            const users = await this.userService.getAllUsers()
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "All Users Record",
                data: users
            });
        }
        catch {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: "Error: Can't get!"
            });
        }
    }

    @Get("/:id")
    async getUserById(@Res() response, @Param('id') userId: string) {
        try {
            const users = await this.userService.getUserById(userId)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "User data found",
                data: users
            });
        }
        catch {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: "Error: Can't get!"
            });
        }
    }

    @Put("/:id")
    async updateUser(@Res() response, @Param('id') userId: string,@Body() updateUserDto: UpdateUserDto) {
        try {
            const user = await this.userService.updateUser(userId, updateUserDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "User data updated successfully",
                data: user
            });
        }
        catch {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: "Error: Can't update!"
            });
        }
    }

    @Delete("/:id")
    async deleteUser(@Res() response, @Param('id') userId: string) {
        try {
            const deleteUser = await this.userService.deleteUser(userId);
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "User deleted successfully",
                data: deleteUser
            });
        }
        catch {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: "Error: Can't delete!"
            });
        }
    }
}
