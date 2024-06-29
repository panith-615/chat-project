/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PollWhereInput } from "./PollWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PollListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PollWhereInput,
  })
  @ValidateNested()
  @Type(() => PollWhereInput)
  @IsOptional()
  @Field(() => PollWhereInput, {
    nullable: true,
  })
  every?: PollWhereInput;

  @ApiProperty({
    required: false,
    type: () => PollWhereInput,
  })
  @ValidateNested()
  @Type(() => PollWhereInput)
  @IsOptional()
  @Field(() => PollWhereInput, {
    nullable: true,
  })
  some?: PollWhereInput;

  @ApiProperty({
    required: false,
    type: () => PollWhereInput,
  })
  @ValidateNested()
  @Type(() => PollWhereInput)
  @IsOptional()
  @Field(() => PollWhereInput, {
    nullable: true,
  })
  none?: PollWhereInput;
}
export { PollListRelationFilter as PollListRelationFilter };
