import { terser } from "rollup-plugin-terser";
import replace from "rollup-plugin-replace";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const NODE_ENV = process.env.NODE_ENV || "development";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    },
    {
      file: "dist/index.min.js",
      format: "iife",
      name: "version",
      plugins: [terser()]
    }
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ],
  external: id => /^react|styled-jsx/.test(id)
};
