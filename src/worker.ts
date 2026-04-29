type AssetFetcher = {
  fetch(request: Request): Promise<Response>;
};

type Env = {
  ASSETS: AssetFetcher;
};

const worker = {
  fetch(request: Request, env: Env): Promise<Response> | Response {
    const url = new URL(request.url);
    const forwardedProto = request.headers.get("x-forwarded-proto");
    const cfVisitor = request.headers.get("cf-visitor") ?? "";
    const visitorUsedHttp =
      forwardedProto === "http" || cfVisitor.includes('"scheme":"http"');

    if (url.protocol === "http:" || visitorUsedHttp) {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    if (url.hostname === "katalinalondono.com") {
      url.hostname = "www.katalinalondono.com";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
