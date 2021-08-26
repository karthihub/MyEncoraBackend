import { Body, Controller, Get, Post, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('api/users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService
        ){
    }

    @UseGuards(JwtAuthGuard)
    @Get('frontend')
    async frontend(){
        return this.usersService.findOne({});
    }

    @Post('registeration')
    async registeration(@Body() users: Users){
        return this.usersService.saveUserDetails(users);
    }

    @UseGuards(JwtAuthGuard)
    @Post('updateUser')
    async updateUser(@Body() users: Users){
        return this.usersService.updateUserDetails(users);
    }

    @Post('login')
    async login(@Request() req) {
        console.log(req.body.name, req.body.password);
        const payload:any = { name: req.body.name, password: req.body.password };
        return this.usersService.findOne(payload).then(user=>{
            if(user){
                return { 
                    access_tocken : this.jwtService.sign(user.toJSON()),
                    user: user
                };
            }else{
                return { access_tocken : user};
            }
        });
    }
}
