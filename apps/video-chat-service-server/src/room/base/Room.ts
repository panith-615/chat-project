/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BreakoutRoom } from "../../breakoutRoom/base/BreakoutRoom";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { Message } from "../../message/base/Message";
import { Poll } from "../../poll/base/Poll";

@ObjectType()
class Room {
  @ApiProperty({
    required: false,
    type: () => [BreakoutRoom],
  })
  @ValidateNested()
  @Type(() => BreakoutRoom)
  @IsOptional()
  breakoutRooms?: Array<BreakoutRoom>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  host!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPrivate!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => [Message],
  })
  @ValidateNested()
  @Type(() => Message)
  @IsOptional()
  messages?: Array<Message>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Poll],
  })
  @ValidateNested()
  @Type(() => Poll)
  @IsOptional()
  polls?: Array<Poll>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Room as Room };
