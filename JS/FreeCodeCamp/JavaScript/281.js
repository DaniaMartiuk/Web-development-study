function spEng(sentence){
    var temp = sentence.toLowerCase()
    temp = temp.split('english')
    if(temp.length>1){
        return true
    }else{
        return false
    }
}