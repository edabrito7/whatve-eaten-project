import Clarifai from 'clarifai';





const clarifaiApp = new Clarifai.App({
    apiKey: process.env.REACT_APP_CLARIFAI
})


export default clarifaiApp;