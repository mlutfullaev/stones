import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';

function getDatePath(date) {
  return date.getFullYear() + '/' + (date.getMonth() + 1);
}

async function getDirPath(dirPath) {
  if (!fs.existsSync(dirPath)) {
    await fs.promises.mkdir(dirPath, { recursive: true });
  }

  return dirPath;
}

function uuidRandom(file) {
  return `${uuid()}${extname(file.originalname)}`;
}

export const multerOptions = {
  fileFilter: (req: any, file: any, callback: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      callback(null, true);
    } else {
      callback(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },

  storage: diskStorage({
    destination: async (req, file, callback) => {
      callback(null, await getDirPath('public/' + getDatePath(new Date())));
    },
    filename: (req, file, callback) => {
      callback(
        null,
        new Date().toISOString().replace(/:/g, '-') + '-' + uuidRandom(file),
      );
    },
  }),
};
