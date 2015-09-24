ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: "1087442274612977",
      loginStyle: "popup",
      secret: "8cab89bdeadd78e16a0847eab008292e"
    }
  }
);