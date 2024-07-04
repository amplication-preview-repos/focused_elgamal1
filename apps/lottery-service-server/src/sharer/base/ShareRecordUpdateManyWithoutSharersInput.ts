/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ShareRecordWhereUniqueInput } from "../../shareRecord/base/ShareRecordWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ShareRecordUpdateManyWithoutSharersInput {
  @Field(() => [ShareRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ShareRecordWhereUniqueInput],
  })
  connect?: Array<ShareRecordWhereUniqueInput>;

  @Field(() => [ShareRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ShareRecordWhereUniqueInput],
  })
  disconnect?: Array<ShareRecordWhereUniqueInput>;

  @Field(() => [ShareRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ShareRecordWhereUniqueInput],
  })
  set?: Array<ShareRecordWhereUniqueInput>;
}

export { ShareRecordUpdateManyWithoutSharersInput as ShareRecordUpdateManyWithoutSharersInput };