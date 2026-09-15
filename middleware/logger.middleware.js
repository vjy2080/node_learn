const logger = (req, res, next) => {

  const startTime = Date.now();

  console.log("\n========== INCOMING REQUEST ==========");

  console.log("Method      :", req.method);
  console.log("URL         :", req.url);
  console.log("Original URL:", req.originalUrl);
  console.log("Path        :", req.path);
  console.log("Protocol    :", req.protocol);
  console.log("Hostname    :", req.hostname);
  console.log("IP          :", req.ip);

  console.log("Query       :", req.query);
  console.log("Params      :", req.params);
  console.log("Body        :", req.body);

  console.log("Headers     :", req.headers);

  res.on("finish", () => {
    const duration = Date.now() - startTime;

    console.log("\n========== RESPONSE ==========");

    console.log("Status      :", res.statusCode);
    console.log("Duration    :", `${duration} ms`);
    console.log("Method      :", req.method);
    console.log("URL         :", req.originalUrl);

    console.log("==============================\n");
  });


  console.log("======================================\n");

  next();
};

module.exports = logger;