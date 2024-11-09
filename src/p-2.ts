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
     console.log(removeDuplicates([1,2,2,2,3,3,3,4,5,5,5]))
    //
}