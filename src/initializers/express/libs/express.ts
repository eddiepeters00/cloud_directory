export default function createServer({ app, cors, compression, helmet }) {
  return Object.freeze({ server });

  function server({
    hostname,
    port,
  }: {
    hostname: string;
    port: string | number;
  }) {
    app.use(helmet());
    app.options("*", cors({ credentials: true, origin: true }));
    app.use(cors());
    app.use(compression());

    app.use((req, res, next) => {
      console.log(
        `[EXPRESS] Connection received: ${req.ip}:${req.path}:${req.method}`
      );
      next();
    });

    app.listen(port, hostname, () => {
      console.log(`[EXPRESS] Server running at http://${hostname}:${port}/`);
      return;
    });
  }
}
