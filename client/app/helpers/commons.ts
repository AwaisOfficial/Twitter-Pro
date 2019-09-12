import { environment } from '../../environments/environment';

export class Commons {

    getFilePath(fileName: string){      
      return environment.APIEndPoint + 'files/' + fileName ;
    }

    userCompleteName(user) {
    let name = '';
    if(user){
        name += ( user.firstName ? user.firstName : '');
        name += ( user.lastName  ? ' ' + user.lastName  : '');
    }
    return name;
    }  
    
}