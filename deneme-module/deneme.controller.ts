import { Controller, Get } from "@nestjs/common";
import { DenemeService } from "./deneme.service.ts";

@Controller("deneme")
export class DenemeController {
  constructor(private readonly denemeService: DenemeService) {}

  @Get()
  getHello(): string {
    return this.denemeService.getHello();
  }
}
