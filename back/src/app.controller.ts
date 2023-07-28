import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendMailDto } from './helpers/entity';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private prismaService: PrismaService) { }

  @Post('sendmail')
  async create(@Body() sendMailDto: SendMailDto) {
    const nodemailer = require('nodemailer');

    var transporter = await nodemailer.createTransport({
      host: 'smtp.timeweb.ru',
      port: 25,
      auth: {
        user: 'ci09322@vkamne.com',
        pass: 'eV_KSjNb9T)s:T'
      }
    });

    var mailOptions = {
      from: 'ci09322@vkamne.com',
      to: 'iozxckali@gmail.com',
      subject: 'Question',
      text: `name: ${sendMailDto.name}, question: ${sendMailDto.question}, phone number: ${sendMailDto.phoneNumber}`
    };

    transporter.sendMail(mailOptions, function (error, info: any) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info);
      }
    });;
  }

  @Get('models')
  async find() {
    let services = this.prismaService.services.findMany()
    let blog = this.prismaService.blog.findMany()
    let stone = this.prismaService.stone.findMany()
    let reviews = this.prismaService.reviews.findMany()
    return {
      services: (await services).length, 
      blog: (await blog).length, 
      stone: (await stone).length, 
      reviews: (await reviews).length
    }
  }
}