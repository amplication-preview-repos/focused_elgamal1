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
import { ParticipantCreateNestedManyWithoutLotteriesInput } from "./ParticipantCreateNestedManyWithoutLotteriesInput";
import { RewardCreateNestedManyWithoutLotteriesInput } from "./RewardCreateNestedManyWithoutLotteriesInput";
import { SharerCreateNestedManyWithoutLotteriesInput } from "./SharerCreateNestedManyWithoutLotteriesInput";

@InputType()
class LotteryCreateInput {
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
    type: () => ParticipantCreateNestedManyWithoutLotteriesInput,
  })
  @ValidateNested()
  @Type(() => ParticipantCreateNestedManyWithoutLotteriesInput)
  @IsOptional()
  @Field(() => ParticipantCreateNestedManyWithoutLotteriesInput, {
    nullable: true,
  })
  participants?: ParticipantCreateNestedManyWithoutLotteriesInput;

  @ApiProperty({
    required: false,
    type: () => RewardCreateNestedManyWithoutLotteriesInput,
  })
  @ValidateNested()
  @Type(() => RewardCreateNestedManyWithoutLotteriesInput)
  @IsOptional()
  @Field(() => RewardCreateNestedManyWithoutLotteriesInput, {
    nullable: true,
  })
  rewards?: RewardCreateNestedManyWithoutLotteriesInput;

  @ApiProperty({
    required: false,
    type: () => SharerCreateNestedManyWithoutLotteriesInput,
  })
  @ValidateNested()
  @Type(() => SharerCreateNestedManyWithoutLotteriesInput)
  @IsOptional()
  @Field(() => SharerCreateNestedManyWithoutLotteriesInput, {
    nullable: true,
  })
  sharers?: SharerCreateNestedManyWithoutLotteriesInput;

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

export { LotteryCreateInput as LotteryCreateInput };
