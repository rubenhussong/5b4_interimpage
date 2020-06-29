app.use(
    sass.middleware({
     src: __dirname + '/scss', //where the sass files are 
     dest: __dirname + '/css', //where css should go
     debug: true, // obvious
     outputStyle: 'compressed'
    })
  );
  app.use(express.static(path.join(__dirname, 'public')));