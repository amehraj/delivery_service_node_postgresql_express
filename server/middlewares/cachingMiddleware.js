import redis from 'redis';

const cachingMiddleware = (req,res,next) => {

    const client = redis.createClient();
    const cacheKey = req.url;

    res.locals.cacheConnection = client;
    res.locals.cacheKey = cacheKey;

    if(req.method==="GET"){
        
        console.log("GET REQUEST");
        client.get(cacheKey, function (err, result) {

            if(err == null && result != null){
                console.log("No Error Found. Cache Data Available", cacheKey);
                res.status(200).send(JSON.parse(result));
            }
            else{
                console.log("Cache Data Not Found");
                next();
            }
        });
        
    }
    else{
        next();
    }

    
    
}


export default cachingMiddleware;