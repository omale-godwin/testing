import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { PlutofundService } from 'src/services/plutofund.service';



@Resolver(() => String)
export class PlutofundResolver {
  constructor(private readonly PlutofundService: PlutofundService,) {}


  @Mutation(() => String)
  async plutofundmutedTest(    
    @Args('email') email: string,
  ) {
     return email;
  }

 

  @Query(() => String)
  async getAllPlutofundTest() {
    const testvalue = await this.PlutofundService.getHello()
    return testvalue;
  }  
}
