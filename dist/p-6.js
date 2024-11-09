"use strict";
{
    function updateProfile(profile, updates) {
        return Object.assign(Object.assign({}, profile), updates);
    }
    const myProfile = {
        name: "sultan",
        age: 26,
        email: "email@gmail.com"
    };
    const updatedProfile = updateProfile(myProfile, { age: 24 });
    console.log(updatedProfile);
    //
}
