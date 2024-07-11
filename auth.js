
import envImport from "../envImport/envImport";

import { Client } from "appwrite";

      export class AuthService {
          clint = new Client();
            account;

      constructor() {

            this.clint
            .setEndpoint(envImport.appWrite)
            .setProject(envImport.appWriteProjectId)
             this.account = new account(this.clint)

  }

  async createAccount({ email, password, name })
try {
  const userAccount = await this.account.create(ID.unique(), email, password, name);

  if (userAccount) {
    // call another method 
    return this.login({ email, password });

  }
  else {

    return userAccount;
  }

} catch (error) {

  throw error;

}

              async login({ email, password }){

  try {
    return await account.createEmailPasswordSession('email@example.com', 'password');


  }
  catch (error) {

    throw error;

  }


}

            async getLoggedInUser() {
  try {

    return await this.account.get();

  } catch (error) {

    throw error;
  }

  return null;
} 
                    async logOut(){
  try {

    await this.account.deleteSession();

  } catch (error) {

    throw error;

  }

}

}

const authService = new AuthService();
export default authService



/*Another Method */  

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');               // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
