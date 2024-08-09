import { Module } from "@nestjs/common";
import { DenemeModule } from "./deneme-module/deneme.module.ts";

@Module({
  imports: [DenemeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
