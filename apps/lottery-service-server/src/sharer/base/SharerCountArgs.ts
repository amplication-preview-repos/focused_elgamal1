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
import { SharerWhereInput } from "./SharerWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SharerCountArgs {
  @ApiProperty({
    required: false,
    type: () => SharerWhereInput,
  })
  @Field(() => SharerWhereInput, { nullable: true })
  @Type(() => SharerWhereInput)
  where?: SharerWhereInput;
}

export { SharerCountArgs as SharerCountArgs };