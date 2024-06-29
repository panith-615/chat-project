import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BreakoutRoomResolverBase } from "./base/breakoutRoom.resolver.base";
import { BreakoutRoom } from "./base/BreakoutRoom";
import { BreakoutRoomService } from "./breakoutRoom.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BreakoutRoom)
export class BreakoutRoomResolver extends BreakoutRoomResolverBase {
  constructor(
    protected readonly service: BreakoutRoomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
