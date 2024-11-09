{
    //
  const movieName = 'Sultan Mehmed';
  type MovieType = typeof movieName

  const newMovie : MovieType ='Sultan Mehmed'

const movie = {
    title: "Salauddin Ayyubi",
    directior: "Bozdag"
}
type Movie = typeof movie;
const bestMovie : Movie = {
    title: 'kurulus osman',
    directior : 'konur emray'
}
type DetailsLog = {
    message: string;
    level: "info" | "warn" | "error"
}

const logMessage = (input: string | number | DetailsLog)=>{
if(typeof input === "string"){
    console.log("Simple Message Info:", input)
}
else if(typeof input === "number"){
    console.log("Error Code:" , input)
} else if("message" in input && "level" in input){
    console.log(`Danger level ${input.level} instruction for next level web development  ${input.message}`)
}
}

console.log(logMessage('mahfuz'))
    //
}