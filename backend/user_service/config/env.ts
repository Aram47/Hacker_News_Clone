import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

export default function configEnv(): void {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  dotenv.config({
    path: path.join(__dirname, '..', '..', `.${process.env.NODE_ENV}.env`),
  });
}