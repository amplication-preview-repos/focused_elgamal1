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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  ValidateNested,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { OrganizerWhereUniqueInput } from "../../organizer/base/OrganizerWhereUniqueInput";
import { ParticipantUpdateManyWithoutLotteriesInput } from "./ParticipantUpdateManyWithoutLotteriesInput";
import { RewardUpdateManyWithoutLotteriesInput } from "./RewardUpdateManyWithoutLotteriesInput";
import { SharerUpdateManyWithoutLotteriesInput } from "./SharerUpdateManyWithoutLotteriesInput";

@InputType()
class LotteryUpdateInput {
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
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => OrganizerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizerWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizerWhereUniqueInput, {
    nullable: true,
  })
  organizer?: OrganizerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ParticipantUpdateManyWithoutLotteriesInput,
  })
  @ValidateNested()
  @Type(() => ParticipantUpdateManyWithoutLotteriesInput)
  @IsOptional()
  @Field(() => ParticipantUpdateManyWithoutLotteriesInput, {
    nullable: true,
  })
  participants?: ParticipantUpdateManyWithoutLotteriesInput;

  @ApiProperty({
    required: false,
    type: () => RewardUpdateManyWithoutLotteriesInput,
  })
  @ValidateNested()
  @Type(() => RewardUpdateManyWithoutLotteriesInput)
  @IsOptional()
  @Field(() => RewardUpdateManyWithoutLotteriesInput, {
    nullable: true,
  })
  rewards?: RewardUpdateManyWithoutLotteriesInput;

  @ApiProperty({
    required: false,
    type: () => SharerUpdateManyWithoutLotteriesInput,
  })
  @ValidateNested()
  @Type(() => SharerUpdateManyWithoutLotteriesInput)
  @IsOptional()
  @Field(() => SharerUpdateManyWithoutLotteriesInput, {
    nullable: true,
  })
  sharers?: SharerUpdateManyWithoutLotteriesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

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
  title?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalRewards?: number | null;
}

export { LotteryUpdateInput as LotteryUpdateInput };