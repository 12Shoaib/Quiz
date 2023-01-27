import {atom} from 'recoil'

export const inputValue = atom({
    key:'input',
    default: ''
})

export const isGeneralValue = atom({
    key:'general',
    default:false   
})

export const isTechnicalValue = atom({
    key:'technical',
    default:false   
})
export const isMathsValue = atom({
    key:'maths',
    default:false   
})
export const Topic1 = atom({
    key : 'Data',
    default:[
        {
            question : 'What is the capital of india ?',
            options : [
                {option: 'Mumbai' , isCorrect: false },
                {option: 'Delhi' , isCorrect: true },
                {option: 'Hyderabad' , isCorrect: false },
                {option: 'Pune' , isCorrect: false }]
        },
        {
            question : 'Who is prime minister of india ?',
            options : [
                {option: 'Rahul Gandhi' , isCorrect: false },
                {option: 'Kedrival' , isCorrect: false },
                {option: 'Kcr' , isCorrect: false },
                {option: 'Narendra Modi' , isCorrect: true }]
        },
        {
            question : 'Who is the CEO of google ?',
            options : [
                {option: 'Sundar Pichai' , isCorrect: true },
                {option: 'Nelson Mandela' , isCorrect: false },
                {option: 'Elon Musk' , isCorrect: false },
                {option: 'Mark Zuckerberg' , isCorrect: false }]
        },
        {
            question : 'Who is the richest person in india?',
            options : [
                {option: 'Mukesh Ambani' , isCorrect: false },
                {option: 'Goutam Adani' , isCorrect: true },
                {option: 'Elon Musk' , isCorrect: false },
                {option: 'Uday Kotak' , isCorrect: false }]
        },
        {
            question : 'Who is mahatma gandhi?',
            options : [
                {option: 'Freedom Fighter' , isCorrect: true },
                {option: 'Actor' , isCorrect: false },
                {option: 'Politician' , isCorrect: false },
                {option: 'Parlament Member' , isCorrect: false }]
        },]
})

export const Topic2 = atom({
    key:'Data2',
    default:[
        {
            question : 'What is React ?',
            options : [
                {option: 'Framework' , isCorrect: false },
                {option: 'Js Library' , isCorrect: true },
                {option: 'Programming Language' , isCorrect: false },
                {option: 'None Of The Above' , isCorrect: false }]

        },
        {
            question : 'What is useRecoilState ?',
            options : [
                {option: 'React Hook' , isCorrect: false },
                {option: 'Js Library' , isCorrect: false },
                {option: 'Recoil Hook' , isCorrect: true },
                {option: 'Framework' , isCorrect: false }]

        },
        {
            question : 'What is Dom ?',
            options : [
                {option: 'Copy Of Real Dom' , isCorrect: true },
                {option: 'Event' , isCorrect: false },
                {option: 'Recoil Hook' , isCorrect: false },
                {option: 'Framework' , isCorrect: false }]

        },
        {
            question : 'Why is Redux ?',
            options : [
                {option: 'State Management Library' , isCorrect: true },
                {option: 'Js Library' , isCorrect: false },
                {option: 'Rect Component' , isCorrect: false },
                {option: 'Framework' , isCorrect: false }]

        },
        {
            question : 'Why is UseEffect ?',
            options : [
                {option: 'State Management Library' , isCorrect: false },
                {option: 'Js Library' , isCorrect: false },
                {option: 'Rect Hook' , isCorrect: true },
                {option: 'Framework' , isCorrect: false }]

        }
    ]
})

export const Topic3 = atom({
    key:'data3',
    default:[
        {
            question : 'Why is the value of pie ?',
            options : [
                {option: '22/7' , isCorrect: true },
                {option: 'undefined' , isCorrect: false },
                {option: '9.28' , isCorrect: false },
                {option: '0.23' , isCorrect: false }]


        },
        {
            question : '121 divided by 11 is  ?',
            options : [
                {option: '10' , isCorrect: false },
                {option: '35' , isCorrect: false },
                {option: '45' , isCorrect: false },
                {option: '11' , isCorrect: true }]


        },
        {
            question : 'if today is monday , then find the day after 61 days?',
            options : [
                {option: 'Tuesday' , isCorrect: false },
                {option: 'Monday' , isCorrect: false },
                {option: 'Saturday' , isCorrect: true },
                {option: 'Sunday' , isCorrect: false }]
        },
        {
            question : 'Which is greater then 4',
            options : [
                {option: '5' , isCorrect: true },
                {option: '-5' , isCorrect: false },
                {option: '-1/2' , isCorrect: false },
                {option: '2.3434' , isCorrect: false }]
        },
        {
            question : 'Which is the smallest value?',
            options : [
                {option: '-1' , isCorrect: false },
                {option: '-1/2' , isCorrect: false },
                {option: 'Zero' , isCorrect: true },
                {option: '-10000' , isCorrect: false }]

        }
    ]
})