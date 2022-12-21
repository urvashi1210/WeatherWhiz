//npm init -y :to initialize our folder with npm packages and answer yes to all of their questions 

//-y means y flag i.e. yes

// If you type npm init and it displays several questions just type ctrl+c to run out of that shit and do npm init -y

const request=require('request')

const url='http://api.weatherstack.com/current?access_key=caeffdb97362c0d68359bd3c2bc04622&query=India&units=f';

request({url:url,json:true},(error,response)=>{
    // console.log(response)
    // console.log(response.body.current);
    if(error){
   console.log('Unable to connect to weather service');
    }
    else if(response.body.error){
        console.log('Unable to find location!');
    }
    else{
        console.log(`It is currently ${response.body.current.temperature} farhenheit out though it feels like ${response.body.current.feelslike} farhenheit.`);
    }
})

