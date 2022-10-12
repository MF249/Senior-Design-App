const app_name = 'localhost:5000/';

exports.buildPath = 
function buildPath(route)
{
    return 'https://' + app_name + route;   
}