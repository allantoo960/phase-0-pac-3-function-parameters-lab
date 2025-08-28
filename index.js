function introduction(student){
    return `Hi, my name is ${student}.`;

}
function introductionWithLanguage(student, language){
    return `Hi, my name is ${student} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(student, language = "JavaScript"){
    return `Hi, my name is ${student} and I am learning to program in ${language}.`;
}