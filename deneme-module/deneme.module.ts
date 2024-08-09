import { Module } from "@nestjs/common";
import { DenemeService } from "./deneme.service.ts";
import { DenemeController } from "./deneme.controller.ts";

@Module({
  imports: [],
  controllers: [DenemeController],
  providers: [DenemeService],
})
export class DenemeModule {}
