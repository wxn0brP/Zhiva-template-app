import "@wxn0brp/flanker-ui/html";
import { fetchApi, fetchApiJson, fetchApiPost } from "@wxn0brp/zhiva-base-lib/front/api";

// fetch secure api and parse json
fetchApiJson("hello").then(console.log);

// fetch secure api
fetchApi("hello").then(res => res.text()).then(console.log);

// post secure api
fetchApiPost("hello", { msg: "Hello from Zhiva" }).then(console.log);
