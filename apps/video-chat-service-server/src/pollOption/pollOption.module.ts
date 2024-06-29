import { Module } from "@nestjs/common";
import { PollOptionModuleBase } from "./base/pollOption.module.base";
import { PollOptionService } from "./pollOption.service";
import { PollOptionController } from "./pollOption.controller";
import { PollOptionResolver } from "./pollOption.resolver";

@Module({
  imports: [PollOptionModuleBase],
  controllers: [PollOptionController],
  providers: [PollOptionService, PollOptionResolver],
  exports: [PollOptionService],
})
export class PollOptionModule {}
