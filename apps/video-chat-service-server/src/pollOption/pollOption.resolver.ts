import * as graphql from "@nestjs/graphql";
import { PollOptionResolverBase } from "./base/pollOption.resolver.base";
import { PollOption } from "./base/PollOption";
import { PollOptionService } from "./pollOption.service";

@graphql.Resolver(() => PollOption)
export class PollOptionResolver extends PollOptionResolverBase {
  constructor(protected readonly service: PollOptionService) {
    super(service);
  }
}
