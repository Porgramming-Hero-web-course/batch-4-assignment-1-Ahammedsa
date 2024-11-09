{
    //
     function removeDuplicates(arrai: number[] ): number[]{
      let result : number[] = []

      for(let i = 0 ; i < arrai.length ; i++ ) {
        if(result.indexOf(arrai[i]) === -1){
            result.push(arrai[i])
        }
      }
      return result
     
     }
     
    //
}