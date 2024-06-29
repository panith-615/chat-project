/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PollOption } from "./PollOption";
import { PollOptionCountArgs } from "./PollOptionCountArgs";
import { PollOptionFindManyArgs } from "./PollOptionFindManyArgs";
import { PollOptionFindUniqueArgs } from "./PollOptionFindUniqueArgs";
import { DeletePollOptionArgs } from "./DeletePollOptionArgs";
import { PollOptionService } from "../pollOption.service";
@graphql.Resolver(() => PollOption)
export class PollOptionResolverBase {
  constructor(protected readonly service: PollOptionService) {}

  async _pollOptionsMeta(
    @graphql.Args() args: PollOptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PollOption])
  async pollOptions(
    @graphql.Args() args: PollOptionFindManyArgs
  ): Promise<PollOption[]> {
    return this.service.pollOptions(args);
  }

  @graphql.Query(() => PollOption, { nullable: true })
  async pollOption(
    @graphql.Args() args: PollOptionFindUniqueArgs
  ): Promise<PollOption | null> {
    const result = await this.service.pollOption(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PollOption)
  async deletePollOption(
    @graphql.Args() args: DeletePollOptionArgs
  ): Promise<PollOption | null> {
    try {
      return await this.service.deletePollOption(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
