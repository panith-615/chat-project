import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BreakoutRoomModuleBase } from "./base/breakoutRoom.module.base";
import { BreakoutRoomService } from "./breakoutRoom.service";
import { BreakoutRoomController } from "./breakoutRoom.controller";
import { BreakoutRoomResolver } from "./breakoutRoom.resolver";

@Module({
  imports: [BreakoutRoomModuleBase, forwardRef(() => AuthModule)],
  controllers: [BreakoutRoomController],
  providers: [BreakoutRoomService, BreakoutRoomResolver],
  exports: [BreakoutRoomService],
})
export class BreakoutRoomModule {}
