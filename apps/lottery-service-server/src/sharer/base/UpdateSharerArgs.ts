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
import { SharerWhereUniqueInput } from "./SharerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SharerUpdateInput } from "./SharerUpdateInput";

@ArgsType()
class UpdateSharerArgs {
  @ApiProperty({
    required: true,
    type: () => SharerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SharerWhereUniqueInput)
  @Field(() => SharerWhereUniqueInput, { nullable: false })
  where!: SharerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SharerUpdateInput,
  })
  @ValidateNested()
  @Type(() => SharerUpdateInput)
  @Field(() => SharerUpdateInput, { nullable: false })
  data!: SharerUpdateInput;
}

export { UpdateSharerArgs as UpdateSharerArgs };