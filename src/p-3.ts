{
    // 
    function countWordOccurrences(sentence: string , word: string ): number {
        const lowerCaseSentences = sentence.toLowerCase()
        const lowerCaseWord  = word.toLowerCase()
        const words  = lowerCaseSentences.split(' ') ;
        let count = 0 ;
        for(const w of words) {
            if(w === lowerCaseWord){
                count++
            }
        
        }
        return count
    }

    //
}