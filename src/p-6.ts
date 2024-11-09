{
    //
    interface Profile {
        name : string ;
        age : number ;
        email : string ;
    }
    function updateProfile(profile:Profile , updates: {name?: string , age? : number , email? : string}):Profile {
        return {...profile , ...updates}
    }
    const myProfile : Profile ={
        name : "sultan" ,
        age : 26 ,
        email : "email@gmail.com"
    }

    //
}