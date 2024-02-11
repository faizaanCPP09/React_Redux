// This index.js is a file of action_creator:: Basically yeh batayega ki action ko initiate krna hai
// We need to send two things [dispatch] : `type and payload`

//We are making two functions 'depositMoney' and 'withdrawMoney'::Jo ki ek function ko return krega
//Function ke ander function ko return krna hai...

export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

//Action creator sirf itna hi hai...uska kaam sirf dispatch krne ka hai
//Action creator..action ko initiate krte hain..aur batayenge 'reducers' ko ki kya krna hai