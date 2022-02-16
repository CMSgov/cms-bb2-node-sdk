import app from '@server';

const port = Number(3001);
app.listen(port, () => {
  console.log(`Express server started on port: ${port}`);
});
