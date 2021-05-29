import * as t from "https://deno.land/std/testing/asserts.ts";
import { marked } from "../../src/marked.js";

Deno.test("heading", () => {
  const renderer = new marked.Renderer();
  const slugger = new marked.Slugger();
  const header = renderer.heading('test', 1, 'test', slugger);
  t.assertEquals(header, '<h1 id="test">test</h1>\n');
});

Deno.test("heading ja", () => {
  const renderer = new marked.Renderer();
  const slugger = new marked.Slugger();
  const header = renderer.heading('test', 1, '第1条（秘密情報の定義・開示等の方法）', slugger);
  t.assertEquals(header, '<h1 id="第1条秘密情報の定義・開示等の方法">test</h1>\n');
});
