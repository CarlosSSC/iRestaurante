import { environment } from 'src/environments/environment';

export abstract class BaseService {

  baseURL = environment.apiURL;

  USER_INFO = "USER_INFO";

}
