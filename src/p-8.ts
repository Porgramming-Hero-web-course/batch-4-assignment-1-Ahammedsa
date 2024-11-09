{
    // 
    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean{

        for (let i = 0; i < length; i++) {
            const key = keys[i];
            if (!(key in obj)) {
                return false
            }
          
        }
        return true
    }




//
}