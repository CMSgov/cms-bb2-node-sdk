import BlueButton from ".";
import { Environments } from "./enums/environments";

test("expect bb sdk to be created with appropriate defaults", () => {
  const CLIENT_ID = "foo";
  const CLIENT_SECRET = "bar";

  const bb = new BlueButton({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  });

  expect(bb.clientId).toBe(CLIENT_ID);
  expect(bb.clientSecret).toBe(CLIENT_SECRET);
  expect(bb.version).toBe("2");
  expect(bb.baseUrl).toBe(`https://sandbox.bluebutton.cms.gov`);
});

test("expect bb sdk to be created with the supplied version", () => {
  const CLIENT_ID = "foo";
  const CLIENT_SECRET = "bar";
  const VERSION = "1";

  const bb = new BlueButton({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    version: VERSION,
  });

  expect(bb.clientId).toBe(CLIENT_ID);
  expect(bb.clientSecret).toBe(CLIENT_SECRET);
  expect(bb.version).toBe(VERSION);
  expect(bb.baseUrl).toBe(`https://sandbox.bluebutton.cms.gov`);
});

test("expect bb sdk to be created the appropriate baseUrl that corresponds to the provided environment", () => {
  const CLIENT_ID = "foo";
  const CLIENT_SECRET = "bar";

  const bb = new BlueButton({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    environment: Environments.PRODUCTION,
  });

  expect(bb.clientId).toBe(CLIENT_ID);
  expect(bb.clientSecret).toBe(CLIENT_SECRET);
  expect(bb.version).toBe("2");
  expect(bb.baseUrl).toBe(`https://api.bluebutton.cms.gov`);
});
