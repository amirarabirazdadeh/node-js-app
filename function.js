//exports.handler =  async function(event, context) {
  //console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  //return "Hello World!!"
//}

exports.handler = async function(context) {
    return {
        status: 200,
        body: "hello world! " + "Token presented : " + context, 
    }
}
