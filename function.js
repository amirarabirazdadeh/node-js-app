//exports.handler =  async function(event, context) {
  //console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  //return "Hello World!!"
//}

exports.handler = async function(context) {
    console.log(context.request.headers);
    var token = context.request.headers['x-internal-token'];
    console.log("Token presented : ", token);

    // do some authn and authz based on token received

    return {
        status: 200,
        body: "hello world! " + "Token presented : ", token
    }
}
