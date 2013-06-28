declare module gapi.auth {
  function setToken(authResult: any): void;
}
                   
declare module gapi.client {
  function setApiKey(key: string): void;
  function load(library: string, version: string, callback: Function): void;
}

declare module gapi.client.oauth2.userinfo {
  function get(): IUserInfoRequest;
}

declare module gapi.signin {
  function go(opt_container): void;
}

declare module gapi {
  interface IGetPeople {
    userId: string;
  }
  
  interface IEmail {
    value: string;
    type: string;
    primary: bool;
  }
  
  interface IUserInfoResponse {
    email: IEmail[];
  }
                   
  interface IUserInfoRequest {
    execute(func: (IUserInfoResponse) => void): void;
  }
                   
  interface IRequestOptions {
    path: string;
    params?: any;
  }
}