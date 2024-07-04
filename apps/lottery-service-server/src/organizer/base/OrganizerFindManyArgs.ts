/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizerWhereInput } from "./OrganizerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrganizerOrderByInput } from "./OrganizerOrderByInput";

@ArgsType()
class OrganizerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrganizerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrganizerWhereInput, { nullable: true })
  @Type(() => OrganizerWhereInput)
  where?: OrganizerWhereInput;

  @ApiProperty({
    required: false,
    type: [OrganizerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrganizerOrderByInput], { nullable: true })
  @Type(() => OrganizerOrderByInput)
  orderBy?: Array<OrganizerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OrganizerFindManyArgs as OrganizerFindManyArgs };