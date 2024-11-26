/* AUTO CONVERTED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/User";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNzYuODI3NzMzMzMzMzMzMzMgMTg2LjY1NzA2NjY2NjY2NjY1QzE2NS41MTE0NjY2NjY2NjY2NSAxNzcuMjU2NTMzMzMzMzMzMzIgMTUyLjgyMTMzMzMzMzMzMzMgMTcwLjUzODY2NjY2NjY2NjY0IDEzOS41MzA2NjY2NjY2NjY2NiAxNjYuMzk2Nzk5OTk5OTk5OThDMTU2LjkyMzczMzMzMzMzMzMzIDE1NS41NDU1OTk5OTk5OTk5OCAxNjguNTIyNjY2NjY2NjY2NjUgMTM2LjM3NTQ2NjY2NjY2NjY1IDE2OC41MjI2NjY2NjY2NjY2NSAxMTQuNTY1MzMzMzMzMzMzMzRDMTY4LjUyMjY2NjY2NjY2NjY1IDgwLjc5Nzc2IDE0MC43NzY1MzMzMzMzMzMzMyA1My4zMzMzMzMzMzMzMzMzMyAxMDYuNjYzNTczMzMzMzMzMzMgNTMuMzMzMzMzMzMzMzMzMzNDNzIuNTUwNCA1My4zMzMzMzMzMzMzMzMzMyA0NC44MDUwMTMzMzMzMzMzMzUgODAuNzk3NzYgNDQuODA1MDEzMzMzMzMzMzM1IDExNC41NjUzMzMzMzMzMzMzNEM0NC44MDUwMTMzMzMzMzMzMzUgMTM2LjM5MjUzMzMzMzMzMzMyIDU2LjQxMjU4NjY2NjY2NjY3IDE1NS41NzMzMzMzMzMzMzMzMiA3My44MjQgMTY2LjQxNDkzMzMzMzMzMzMyQzU0LjYzODcxOTk5OTk5OTk5IDE3Mi4zNzU0NjY2NjY2NjY2NSAzNi44OTA3NzMzMzMzMzMzMyAxODMuNjMxOTk5OTk5OTk5OTggMjMuMDM2MjY2NjY2NjY2NjY2IDE5OS45NzU0NjY2NjY2NjY2NUMyMC40NTI2OTMzMzMzMzMzMzMgMjAzLjAxODY2NjY2NjY2NjY2IDIwLjg1MzAxMzMzMzMzMzMzMyAyMDcuNTY2OTMzMzMzMzMzMyAyMy45MzY4NTMzMzMzMzMzMyAyMTAuMTIzNzMzMzMzMzMzMzVDMjUuMzAxMzMzMzMzMzMzMzMyIDIxMS4yNTg2NjY2NjY2NjY2NCAyNi45NTcwMTMzMzMzMzMzMyAyMTEuODA4IDI4LjYxMjU4NjY2NjY2NjY2NSAyMTEuODA4QzMwLjY4NjcxOTk5OTk5OTk5OCAyMTEuODA4IDMyLjc1MTY3OTk5OTk5OTk5IDIxMC45MzQzOTk5OTk5OTk5OCAzNC4xODkwMTMzMzMzMzMzMzUgMjA5LjIzMkM2Ny43MiAxNjkuNjc0NjY2NjY2NjY2NjcgMTI3LjUxMzYgMTY0LjQ5NzA2NjY2NjY2NjY1IDE2Ny40NzYyNjY2NjY2NjY2NyAxOTcuNjc4OTMzMzMzMzMzM0MxNzEuNjg3NDY2NjY2NjY2NjcgMjAxLjE4MTg2NjY2NjY2NjY4IDE3NS42MTgxMzMzMzMzMzMzMyAyMDUuMDYzNDY2NjY2NjY2NjQgMTc5LjE0NzczMzMzMzMzMzM1IDIwOS4yMzJDMTgxLjczMTE5OTk5OTk5OTk3IDIxMi4yODQ4MDAwMDAwMDAwMiAxODYuMzI0MjY2NjY2NjY2NjYgMjEyLjY4MTYgMTg5LjM5OTQ2NjY2NjY2NjY1IDIxMC4xMjM3MzMzMzMzMzMzNUMxOTIuNDc0NjY2NjY2NjY2NjUgMjA3LjU2NjkzMzMzMzMzMzMgMTkyLjg4MzIgMjAzLjAxODY2NjY2NjY2NjY2IDE5MC4yOTk3MzMzMzMzMzMzIDE5OS45NzU0NjY2NjY2NjY2NUMxODYuMjI1MDY2NjY2NjY2NjYgMTk1LjE2NjkzMzMzMzMzMzMzIDE4MS42OTQ5MzMzMzMzMzMzMiAxOTAuNjgyNjY2NjY2NjY2NjUgMTc2LjgzNjI2NjY2NjY2NjYzIDE4Ni42NDg1MzMzMzMzMzMzMkwxNzYuODI3NzMzMzMzMzMzMzMgMTg2LjY1NzA2NjY2NjY2NjY1Wk01OS4zNiAxMTQuNTY1MzMzMzMzMzMzMzRDNTkuMzYgODguNzQ5MDEzMzMzMzMzMzQgODAuNTgyOTMzMzMzMzMzMzMgNjcuNzQwOTA2NjY2NjY2NjYgMTA2LjY2MzU3MzMzMzMzMzMzIDY3Ljc0MDkwNjY2NjY2NjY2QzEzMi43NDQ1MzMzMzMzMzMzMiA2Ny43NDA5MDY2NjY2NjY2NiAxNTMuOTY2OTMzMzMzMzMzMzIgODguNzQ5MDEzMzMzMzMzMzQgMTUzLjk2NjkzMzMzMzMzMzMyIDExNC41NjUzMzMzMzMzMzMzNEMxNTMuOTY2OTMzMzMzMzMzMzIgMTQwLjM4MTg2NjY2NjY2NjY3IDEzMi43NDQ1MzMzMzMzMzMzMiAxNjEuMzg5ODY2NjY2NjY2NjUgMTA2LjY2MzU3MzMzMzMzMzMzIDE2MS4zODk4NjY2NjY2NjY2NUM4MC41ODI5MzMzMzMzMzMzMyAxNjEuMzg5ODY2NjY2NjY2NjUgNTkuMzYgMTQwLjM4MTg2NjY2NjY2NjY3IDU5LjM2IDExNC41NjUzMzMzMzMzMzMzNFoiIGZpbGw9IiM1NzU3NTciLz48cGF0aCBkPSJNMjMyLjYyNjEzMzMzMzMzMzM0IDEyOC42Nzk0NjY2NjY2NjY2NkMyMjkuODIzOTk5OTk5OTk5OTggMTI1LjgzNzg2NjY2NjY2NjY2IDIyNS4xNzU0NjY2NjY2NjY2NCAxMjUuNzMxMiAyMjIuMjM1NzMzMzMzMzMzMzEgMTI4LjQzOTQ2NjY2NjY2NjY1TDE5Ni40NjYxMzMzMzMzMzMzNSAxNTIuMjA1ODY2NjY2NjY2NjVMMTg2LjE0MDggMTQyLjY2NzczMzMzMzMzMzMzQzE4My4yMDk1OTk5OTk5OTk5NyAxMzkuOTU4Mzk5OTk5OTk5OTggMTc4LjU1MTQ2NjY2NjY2NjY3IDE0MC4wNTY1MzMzMzMzMzMzMyAxNzUuNzUwNCAxNDIuODk4MTMzMzMzMzMzM0MxNzIuOTQ4MjY2NjY2NjY2NjUgMTQ1LjczMTIgMTczLjA0ODUzMzMzMzMzMzMgMTUwLjIzNDY2NjY2NjY2NjY3IDE3NS45ODgyNjY2NjY2NjY2NSAxNTIuOTQyOTMzMzMzMzMzMzFMMTkxLjM4NTU5OTk5OTk5OTk4IDE2Ny4xNzEyQzE5Mi44MDk2IDE2OC40ODUzMzMzMzMzMzMzMyAxOTQuNjM3ODY2NjY2NjY2NjQgMTY5LjE0MjQgMTk2LjQ2NjEzMzMzMzMzMzM1IDE2OS4xNDI0QzE5OC4yOTQ0IDE2OS4xNDI0IDIwMC4xMjI2NjY2NjY2NjY2NyAxNjguNDg1MzMzMzMzMzMzMzMgMjAxLjUzODEzMzMzMzMzMzM1IDE2Ny4xNzk3MzMzMzMzMzMzM0wyMzIuMzg3MiAxMzguNzMyOEMyMzUuMzI2OTMzMzMzMzMzMzMgMTM2LjAyNDUzMzMzMzMzMzMyIDIzNS40Mzc4NjY2NjY2NjY2NSAxMzEuNTMwNjY2NjY2NjY2NjYgMjMyLjYzNTczMzMzMzMzMzMyIDEyOC42ODhMMjMyLjYyNjEzMzMzMzMzMzM0IDEyOC42Nzk0NjY2NjY2NjY2NloiIGZpbGw9IiM1NzU3NTciLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "User";
export { I as User };