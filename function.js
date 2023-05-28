//exports.handler =  async function(event, context) {
  //console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  //return "Hello World!!"
//}
var url = require('url');
exports.handler = async function(event,context) {
  var url_parts = url.parse(context.clientContext.authority, true);
    var path = url_parts.path;
    return {
        status: 200,
        //body: "hello world! " + "EVENT : " + JSON.stringify(event) + "CONTEXT : " + JSON.stringify(context.clientContext),
        body: "hello " + path + "!" 
    }
}
