import express from "express";
import { createBareServer } from "@tomphttp/bare-server-node";
import Ultraviolet from "@titaniumnetwork-dev/ultraviolet";

const app = express();
const bare = createBareServer("/bare/");

const uv = new Ultraviolet({
  prefix: "/uv/service/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode
});

app.use(express.static("public"));
app.use("/uv/", express.static("uv"));

export default (req, res) => {
  if (bare.shouldRoute(req)) {
    return bare.routeRequest(req, res);
  }
  return uv.routeRequest(req, res);
};
