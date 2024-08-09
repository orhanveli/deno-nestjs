import { Injectable } from "@nestjs/common";

@Injectable()
export class DenemeService {
  getHello(): string {
    return "Hello from DenemeService!";
  }
}
