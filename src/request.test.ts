import BlueButton from ".";

test("expect bb sdk retry config has expected parameters", () => {
    const RETRY_ENABLED = true;
    const RETRY_INIT_INTERVAL = 5;
    const RETRY_MAX_ATTEMPTS = 3;
    const RETRY_BACKOFF_EXPR = "interval * ( 2 ** i )";
    const RETRY_ENDPOINTS_PATTERN = "^/v[12]/fhir/.*";
  
    const bb = new BlueButton(
      `${__dirname}/testConfigs/.bluebutton-config.json`
    );
    
    expect(bb.retryConfig).toBeDefined;
    expect(bb.retryConfig?.enabled).toBe(RETRY_ENABLED);
    expect(bb.retryConfig?.initInterval).toBe(RETRY_INIT_INTERVAL);
    expect(bb.retryConfig?.maxAttempts).toBe(RETRY_MAX_ATTEMPTS);
    expect(bb.retryConfig?.backOffExpr).toBe(RETRY_BACKOFF_EXPR);
    expect(bb.retryConfig?.endpointPattern).toBe(RETRY_ENDPOINTS_PATTERN);
  });
    