export interface IUser {
    _id? : string,
    userName? : string,
    firstName? : string,
    lastName? : string,
    email? : string,
    token? : string, 
    password? : string,
    createdAt? : Date,
    role?: string,
    about?       : string,
    avatar?      : string,   
    birthDate?   : string,  
    created_at?  : string,  
    isCelebrity? : boolean,
    isProfileReviewed? : boolean,
    reviewStatus?   : string,
    reviewComments? : string,
    isVerified?  : boolean,
    isSuspended? : boolean,
    isDefaulted? : boolean,
    location? : { 
        country : string , 
        city    : string , 
        address : string
    },
    mobileNumber?   : { 
        countryCode : number, 
        number : number 
    },
    profileBanner?  : string,
    twitterId? : string
}