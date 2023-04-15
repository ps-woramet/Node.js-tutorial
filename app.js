const formidable = require('formidable');
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    if (req.url == '/fileupload'){
        let form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            res.write('File uploaded and moved successfully!');
            res.end();

            // Handle the uploaded file
            // let oldPath = files.fileupload.path;
            // let newPath = 'C:\\Users\\user\\Desktop\\website\\nodejs-tutorial\\img\\' + files.fileupload.name;
            // fs.rename(oldPath, newPath, function(err){
            //     if (err) throw err;
            //     res.write('File uploaded and moved successfully!');
            //     res.end();
            // });
        });
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8000);