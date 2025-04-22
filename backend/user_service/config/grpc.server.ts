import path from 'path';
import { fileURLToPath } from 'url';
import grpc, { GrpcObject } from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader'; 
import { ReflectionService } from '@grpc/reflection';
import User from '../models/user.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROTO_PATH = path.join(__dirname, 
  '..', '..', 'src', 'users', 'grpcProto', 'users.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const grpcObj = grpc.loadPackageDefinition(packageDefinition) as GrpcObject;
const usersProto = grpcObj.users as any;

const findUser = (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
  // логика
  console.log('mtav 1');
};

const createUser = (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
  // логика
  console.log('mtav 2');
};

const startUsersGrpcService = () => {
  const server: grpc.Server = new grpc.Server();
  server.addService((usersProto.UsersService as any).service, {
    FindUser: findUser,
    CreateUser: createUser,
  });

  const reflection: ReflectionService = new ReflectionService(usersProto);
  reflection.addToServer(server);
  
  const grpc_service_port: string = String(process.env.USERS_SERVICE_GRPC_PORT);
  
  server.bindAsync(`localhost:${grpc_service_port}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`gRPC user-service listen on PORT: ${grpc_service_port}`);
    server.start();
  });
};

export default startUsersGrpcService;