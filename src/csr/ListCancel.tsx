/* AUTO CONVERTED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ListCancel";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xODQuMTYgMTUxLjM1OTk5OTk5OTk5OTk5QzE2Mi4xNTE0NjY2NjY2NjY2NiAxNTEuMzU5OTk5OTk5OTk5OTkgMTQ0LjMyIDE2OS4xOTE0NjY2NjY2NjY2NiAxNDQuMzIgMTkxLjJDMTQ0LjMyIDIxMy4yMDg1MzMzMzMzMzMzMiAxNjIuMTUxNDY2NjY2NjY2NjYgMjMxLjA0IDE4NC4xNiAyMzEuMDRDMjA2LjE2ODUzMzMzMzMzMzMgMjMxLjA0IDIyNCAyMTMuMjA4NTMzMzMzMzMzMzIgMjI0IDE5MS4yQzIyNCAxNjkuMTkxNDY2NjY2NjY2NjYgMjA2LjE1Nzg2NjY2NjY2NjY4IDE1MS4zNTk5OTk5OTk5OTk5OSAxODQuMTYgMTUxLjM1OTk5OTk5OTk5OTk5Wk0yMDUuNDgzNzMzMzMzMzMzMyAyMDQuOTE2MjY2NjY2NjY2NjRDMjA3LjQ3NjI2NjY2NjY2NjY3IDIwNi45MDc3MzMzMzMzMzMzNCAyMDcuNDc2MjY2NjY2NjY2NjcgMjEwLjE0NTA2NjY2NjY2NjY1IDIwNS40ODM3MzMzMzMzMzMzIDIxMi4xMzY1MzMzMzMzMzMzMkMyMDQuNDgzMiAyMTMuMTM3MDY2NjY2NjY2NjcgMjAzLjE3NjUzMzMzMzMzMzMgMjEzLjYyNzczMzMzMzMzMzMgMjAxLjg2ODggMjEzLjYyNzczMzMzMzMzMzNDMjAwLjU2MjEzMzMzMzMzMzM1IDIxMy42Mjc3MzMzMzMzMzMzIDE5OS4yNTQzOTk5OTk5OTk5OCAyMTMuMTI2NCAxOTguMjUzODY2NjY2NjY2NjggMjEyLjEzNjUzMzMzMzMzMzMyTDE4NC41Mjc5OTk5OTk5OTk5NiAxOTguNDEwNjY2NjY2NjY2NjZMMTcwLjgwMjEzMzMzMzMzMzMgMjEyLjEzNjUzMzMzMzMzMzMyQzE2OS44MDA1MzMzMzMzMzMzIDIxMy4xMzcwNjY2NjY2NjY2NyAxNjguNDkzODY2NjY2NjY2NjYgMjEzLjYyNzczMzMzMzMzMzMgMTY3LjE4NjEzMzMzMzMzMzMyIDIxMy42Mjc3MzMzMzMzMzMzQzE2NS44Nzk0NjY2NjY2NjY2NCAyMTMuNjI3NzMzMzMzMzMzMyAxNjQuNTcxNzMzMzMzMzMzMzMgMjEzLjEyNjQgMTYzLjU3MTE5OTk5OTk5OTk4IDIxMi4xMzY1MzMzMzMzMzMzMkMxNjEuNTc5NzMzMzMzMzMzMyAyMTAuMTQ1MDY2NjY2NjY2NjUgMTYxLjU3OTczMzMzMzMzMzMgMjA2LjkwNzczMzMzMzMzMzM0IDE2My41NzExOTk5OTk5OTk5OCAyMDQuOTE2MjY2NjY2NjY2NjRMMTc3LjI5NzA2NjY2NjY2NjY3IDE5MS4xODkzMzMzMzMzMzMzTDE2My41NzExOTk5OTk5OTk5OCAxNzcuNDYzNDY2NjY2NjY2NjVDMTYxLjU3OTczMzMzMzMzMzMgMTc1LjQ3MiAxNjEuNTc5NzMzMzMzMzMzMyAxNzIuMjM0NjY2NjY2NjY2NjQgMTYzLjU3MTE5OTk5OTk5OTk4IDE3MC4yNDMyQzE2NS41NjI2NjY2NjY2NjY2NCAxNjguMjUxNzMzMzMzMzMzMzMgMTY4Ljc5OTk5OTk5OTk5OTk4IDE2OC4yNTE3MzMzMzMzMzMzMyAxNzAuNzkxNDY2NjY2NjY2NjggMTcwLjI0MzJMMTg0LjUxNzMzMzMzMzMzMzM0IDE4My45NjkwNjY2NjY2NjY2NkwxOTguMjQzMiAxNzAuMjQzMkMyMDAuMjM0NjY2NjY2NjY2NjQgMTY4LjI1MTczMzMzMzMzMzMzIDIwMy40NzIgMTY4LjI1MTczMzMzMzMzMzMzIDIwNS40NjM0NjY2NjY2NjY2NSAxNzAuMjQzMkMyMDcuNDU0OTMzMzMzMzMzMzIgMTcyLjIzNDY2NjY2NjY2NjY0IDIwNy40NTQ5MzMzMzMzMzMzMiAxNzUuNDcyIDIwNS40NjM0NjY2NjY2NjY2NSAxNzcuNDYzNDY2NjY2NjY2NjVMMTkxLjczNzYgMTkxLjE4OTMzMzMzMzMzMzNMMjA1LjQ2MzQ2NjY2NjY2NjY1IDIwNC45MTYyNjY2NjY2NjY2NEgyMDUuNDgzNzMzMzMzMzMzM1oiIGZpbGw9IiM1NzU3NTciLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjY2NjY2NjY2NjY2NjY2NCA3NC42NjY2NjY2NjY2NjY2NkM0Mi42NjY2NjY2NjY2NjY2NjQgNjguNzc1NjggNDcuNDQyMzQ2NjY2NjY2NjY2IDY0IDUzLjMzMzMzMzMzMzMzMzMzIDY0SDE5MkMxOTcuODkxMTk5OTk5OTk5OTcgNjQgMjAyLjY2NjY2NjY2NjY2NjY2IDY4Ljc3NTY4IDIwMi42NjY2NjY2NjY2NjY2NiA3NC42NjY2NjY2NjY2NjY2NkMyMDIuNjY2NjY2NjY2NjY2NjYgODAuNTU3NjUzMzMzMzMzMzIgMTk3Ljg5MTE5OTk5OTk5OTk3IDg1LjMzMzMzMzMzMzMzMzMzIDE5MiA4NS4zMzMzMzMzMzMzMzMzM0g1My4zMzMzMzMzMzMzMzMzM0M0Ny40NDIzNDY2NjY2NjY2NjYgODUuMzMzMzMzMzMzMzMzMzMgNDIuNjY2NjY2NjY2NjY2NjY0IDgwLjU1NzY1MzMzMzMzMzMyIDQyLjY2NjY2NjY2NjY2NjY2NCA3NC42NjY2NjY2NjY2NjY2NloiIGZpbGw9IiM1NzU3NTciLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjY2NjY2NjY2NjY2NjY2NCAxMjhDNDIuNjY2NjY2NjY2NjY2NjY0IDEyMi4xMDg3OTk5OTk5OTk5OSA0Ny40NDIzNDY2NjY2NjY2NjYgMTE3LjMzMzMzMzMzMzMzMzMzIDUzLjMzMzMzMzMzMzMzMzMzIDExNy4zMzMzMzMzMzMzMzMzM0gxOTJDMTk3Ljg5MTE5OTk5OTk5OTk3IDExNy4zMzMzMzMzMzMzMzMzMyAyMDIuNjY2NjY2NjY2NjY2NjYgMTIyLjEwODc5OTk5OTk5OTk5IDIwMi42NjY2NjY2NjY2NjY2NiAxMjhDMjAyLjY2NjY2NjY2NjY2NjY2IDEzMy44OTEyIDE5Ny44OTExOTk5OTk5OTk5NyAxMzguNjY2NjY2NjY2NjY2NjYgMTkyIDEzOC42NjY2NjY2NjY2NjY2Nkg1My4zMzMzMzMzMzMzMzMzM0M0Ny40NDIzNDY2NjY2NjY2NjYgMTM4LjY2NjY2NjY2NjY2NjY2IDQyLjY2NjY2NjY2NjY2NjY2NCAxMzMuODkxMiA0Mi42NjY2NjY2NjY2NjY2NjQgMTI4WiIgZmlsbD0iIzU3NTc1NyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuNjY2NjY2NjY2NjY2NjY0IDE4MS4zMzMzMzMzMzMzMzMzMUM0Mi42NjY2NjY2NjY2NjY2NjQgMTc1LjQ0MjEzMzMzMzMzMzM1IDQ3LjQ0MjM0NjY2NjY2NjY2NiAxNzAuNjY2NjY2NjY2NjY2NjYgNTMuMzMzMzMzMzMzMzMzMzMgMTcwLjY2NjY2NjY2NjY2NjY2SDExNy4zMzMzMzMzMzMzMzMzM0MxMjMuMjI0NTMzMzMzMzMzMzQgMTcwLjY2NjY2NjY2NjY2NjY2IDEyOCAxNzUuNDQyMTMzMzMzMzMzMzUgMTI4IDE4MS4zMzMzMzMzMzMzMzMzMUMxMjggMTg3LjIyNDUzMzMzMzMzMzMgMTIzLjIyNDUzMzMzMzMzMzM0IDE5MiAxMTcuMzMzMzMzMzMzMzMzMzMgMTkySDUzLjMzMzMzMzMzMzMzMzMzQzQ3LjQ0MjM0NjY2NjY2NjY2NiAxOTIgNDIuNjY2NjY2NjY2NjY2NjY0IDE4Ny4yMjQ1MzMzMzMzMzMzIDQyLjY2NjY2NjY2NjY2NjY2NCAxODEuMzMzMzMzMzMzMzMzMzFaIiBmaWxsPSIjNTc1NzU3Ii8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ListCancel";
export { I as ListCancel };