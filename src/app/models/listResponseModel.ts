import { ResponseModels } from "./responseModels";

export interface ListResponseModel<T> extends ResponseModels{
data:T[];  
}