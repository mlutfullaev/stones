import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendMailDto } from './helpers/entity';

@Controller('sendmail')
export class AppController {
  @Post()
  async create(@Body() sendMailDto: SendMailDto) {
    const nodemailer = require('nodemailer');

    var transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'magatillo9494@gmail.com',
        pass: 'jdlehcuwqopdoorx'
      }
    });

    var mailOptions = {
      from: 'magatillo9494@gmail.com',
      to: 'iozxckali@gmail.com',
      subject: 'Question',
      text: `name: ${sendMailDto.name}, question: ${sendMailDto.question}, phone number: ${sendMailDto.phoneNumber}`
    };

    let response = await transporter.sendMail(mailOptions, await function (error, info) {
      return 'Email sent: ' + info.response;
    });

    return response
  }
}