export function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = [];
        req.on('error', reject)
           .on('data', chunk => body.push(chunk))
           .on('end', () => {
               body = Buffer.concat(body).toString();
               try {
                   resolve(JSON.parse(body));
               }catch(e) {
                   resolve(body);
               }
           });
    });
}
