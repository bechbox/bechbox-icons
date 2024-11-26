/* AUTO CONVERTED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Info";

/**
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI4IDIxLjMzMzMzMzMzMzMzMzMzMkMxMDYuOTAzNDY2NjY2NjY2NjYgMjEuMzMzMzMzMzMzMzMzMzMyIDg2LjI4MDQyNjY2NjY2NjY2IDI3LjU4OTIyNjY2NjY2NjY2NSA2OC43MzkyIDM5LjMwOTg2NjY2NjY2NjY2NUM1MS4xOTc5NzMzMzMzMzMzMyA1MS4wMzA2MTMzMzMzMzMzMyAzNy41MjYyOTMzMzMzMzMzMyA2Ny42ODk2IDI5LjQ1MjkwNjY2NjY2NjY2NyA4Ny4xODAzNzMzMzMzMzMzMkMyMS4zNzk1MiAxMDYuNjcwOTMzMzMzMzMzMzQgMTkuMjY3MiAxMjguMTE4NCAyMy4zODI5MzMzMzMzMzMzMyAxNDguODA5NkMyNy40OTg2NjY2NjY2NjY2NjUgMTY5LjUwMDggMzcuNjU3NzA2NjY2NjY2NjYgMTg4LjUwNjY2NjY2NjY2NjY2IDUyLjU3NTM1OTk5OTk5OTk5NiAyMDMuNDI1MDY2NjY2NjY2NjhDNjcuNDkyOTA2NjY2NjY2NjcgMjE4LjM0MjQgODYuNDk5MDkzMzMzMzMzMzIgMjI4LjUwMTMzMzMzMzMzMzMyIDEwNy4xOTAzOTk5OTk5OTk5OCAyMzIuNjE2NTMzMzMzMzMzMzRDMTI3Ljg4MTU5OTk5OTk5OTk5IDIzNi43MzI4IDE0OS4zMjkwNjY2NjY2NjY2NSAyMzQuNjIwNzk5OTk5OTk5OTcgMTY4LjgxOTIgMjI2LjU0NzJDMTg4LjMxMDQgMjE4LjQ3MzU5OTk5OTk5OTk4IDIwNC45Njk2IDIwNC44MDIxMzMzMzMzMzMzIDIxNi42OTAxMzMzMzMzMzMzIDE4Ny4yNjA4MDAwMDAwMDAwMkMyMjguNDEwNjY2NjY2NjY2NjYgMTY5LjcxOTQ2NjY2NjY2NjY1IDIzNC42NjY2NjY2NjY2NjY2NiAxNDkuMDk2NTMzMzMzMzMzMzMgMjM0LjY2NjY2NjY2NjY2NjY2IDEyOEMyMzQuNjM2OCA5OS43MTkzNiAyMjMuMzg4Nzk5OTk5OTk5OTcgNzIuNjA1NjUzMzMzMzMzMzIgMjAzLjM5MiA1Mi42MDgyMTMzMzMzMzMzMjVDMTgzLjM5NDEzMzMzMzMzMzM0IDMyLjYxMDg3OTk5OTk5OTk5NSAxNTYuMjgwNTMzMzMzMzMzMzIgMjEuMzYzMiAxMjggMjEuMzMzMzMzMzMzMzMzMzMyWk0xMjcuNDY2NjY2NjY2NjY2NjUgOTkuMkMxMzQuMjQxMDY2NjY2NjY2NjUgOTkuMiAxMzkuNzMzMzMzMzMzMzMzMzIgOTMuNzA4MDUzMzMzMzMzMzQgMTM5LjczMzMzMzMzMzMzMzMyIDg2LjkzMzMzMzMzMzMzMzM0QzEzOS43MzMzMzMzMzMzMzMzMiA4MC4xNTg2MTMzMzMzMzMzNCAxMzQuMjQxMDY2NjY2NjY2NjUgNzQuNjY2NjY2NjY2NjY2NjYgMTI3LjQ2NjY2NjY2NjY2NjY1IDc0LjY2NjY2NjY2NjY2NjY2QzEyMC42OTIyNjY2NjY2NjY2NSA3NC42NjY2NjY2NjY2NjY2NiAxMTUuMiA4MC4xNTg2MTMzMzMzMzMzNCAxMTUuMiA4Ni45MzMzMzMzMzMzMzMzNEMxMTUuMiA5My43MDgwNTMzMzMzMzMzNCAxMjAuNjkyMjY2NjY2NjY2NjUgOTkuMiAxMjcuNDY2NjY2NjY2NjY2NjUgOTkuMlpNMTM2IDEyMi42NjY2NjY2NjY2NjY2NkMxMzYgMTE4LjI0ODUzMzMzMzMzMzM0IDEzMi40MTgxMzMzMzMzMzMzMiAxMTQuNjY2NjY2NjY2NjY2NjYgMTI4IDExNC42NjY2NjY2NjY2NjY2NkMxMjMuNTgxODY2NjY2NjY2NjcgMTE0LjY2NjY2NjY2NjY2NjY2IDEyMCAxMTguMjQ4NTMzMzMzMzMzMzQgMTIwIDEyMi42NjY2NjY2NjY2NjY2NlYxODEuMzMzMzMzMzMzMzMzMzFDMTIwIDE4NS43NTE0NjY2NjY2NjY2NiAxMjMuNTgxODY2NjY2NjY2NjcgMTg5LjMzMzMzMzMzMzMzMzMxIDEyOCAxODkuMzMzMzMzMzMzMzMzMzFDMTMyLjQxODEzMzMzMzMzMzMyIDE4OS4zMzMzMzMzMzMzMzMzMSAxMzYgMTg1Ljc1MTQ2NjY2NjY2NjY2IDEzNiAxODEuMzMzMzMzMzMzMzMzMzFWMTIyLjY2NjY2NjY2NjY2NjY2WiIgZmlsbD0iIzU3NTc1NyIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMjggMjEuMzMzMzMzMzMzMzMzMzMyQzEwNi45MDM0NjY2NjY2NjY2NiAyMS4zMzMzMzMzMzMzMzMzMzIgODYuMjgwNDI2NjY2NjY2NjYgMjcuNTg5MjI2NjY2NjY2NjY1IDY4LjczOTIgMzkuMzA5ODY2NjY2NjY2NjY1QzUxLjE5Nzk3MzMzMzMzMzMzIDUxLjAzMDYxMzMzMzMzMzMzIDM3LjUyNjI5MzMzMzMzMzMzIDY3LjY4OTYgMjkuNDUyOTA2NjY2NjY2NjY3IDg3LjE4MDM3MzMzMzMzMzMyQzIxLjM3OTUyIDEwNi42NzA5MzMzMzMzMzMzNCAxOS4yNjcyIDEyOC4xMTg0IDIzLjM4MjkzMzMzMzMzMzMzIDE0OC44MDk2QzI3LjQ5ODY2NjY2NjY2NjY2NSAxNjkuNTAwOCAzNy42NTc3MDY2NjY2NjY2NiAxODguNTA2NjY2NjY2NjY2NjYgNTIuNTc1MzU5OTk5OTk5OTk2IDIwMy40MjUwNjY2NjY2NjY2OEM2Ny40OTI5MDY2NjY2NjY2NyAyMTguMzQyNCA4Ni40OTkwOTMzMzMzMzMzMiAyMjguNTAxMzMzMzMzMzMzMzIgMTA3LjE5MDM5OTk5OTk5OTk4IDIzMi42MTY1MzMzMzMzMzMzNEMxMjcuODgxNTk5OTk5OTk5OTkgMjM2LjczMjggMTQ5LjMyOTA2NjY2NjY2NjY1IDIzNC42MjA3OTk5OTk5OTk5NyAxNjguODE5MiAyMjYuNTQ3MkMxODguMzEwNCAyMTguNDczNTk5OTk5OTk5OTggMjA0Ljk2OTYgMjA0LjgwMjEzMzMzMzMzMzMgMjE2LjY5MDEzMzMzMzMzMzMgMTg3LjI2MDgwMDAwMDAwMDAyQzIyOC40MTA2NjY2NjY2NjY2NiAxNjkuNzE5NDY2NjY2NjY2NjUgMjM0LjY2NjY2NjY2NjY2NjY2IDE0OS4wOTY1MzMzMzMzMzMzMyAyMzQuNjY2NjY2NjY2NjY2NjYgMTI4QzIzNC42MzY4IDk5LjcxOTM2IDIyMy4zODg3OTk5OTk5OTk5NyA3Mi42MDU2NTMzMzMzMzMzMiAyMDMuMzkyIDUyLjYwODIxMzMzMzMzMzMyNUMxODMuMzk0MTMzMzMzMzMzMzQgMzIuNjEwODc5OTk5OTk5OTk1IDE1Ni4yODA1MzMzMzMzMzMzMiAyMS4zNjMyIDEyOCAyMS4zMzMzMzMzMzMzMzMzMzJaTTEyOCAyMTguMjU2QzExMC4xNDkzMzMzMzMzMzMzMiAyMTguMjU2IDkyLjY5ODg3OTk5OTk5OTk5IDIxMi45NjMxOTk5OTk5OTk5NyA3Ny44NTYyMTMzMzMzMzMzMyAyMDMuMDQ1MzMzMzMzMzMzM0M2My4wMTM2NTMzMzMzMzMzNCAxOTMuMTI3NDY2NjY2NjY2NjMgNTEuNDQ1MzMzMzMzMzMzMzQgMTc5LjAzMTQ2NjY2NjY2NjYzIDQ0LjYxMzk3MzMzMzMzMzMzIDE2Mi41Mzk3MzMzMzMzMzMzMkMzNy43ODI3MiAxNDYuMDQ2OTMzMzMzMzMzMzMgMzUuOTk1MzA2NjY2NjY2NjY0IDEyNy44OTk3MzMzMzMzMzMzMyAzOS40Nzc4NjY2NjY2NjY2NjQgMTEwLjM5MTQ2NjY2NjY2NjY2QzQyLjk2MDQyNjY2NjY2NjY2IDkyLjg4MzgzOTk5OTk5OTk5IDUxLjU1NjU4NjY2NjY2NjY2IDc2LjgwMTcwNjY2NjY2NjY2IDY0LjE3OTA5MzMzMzMzMzMzIDY0LjE3OTA5MzMzMzMzMzMzQzc2LjgwMTcwNjY2NjY2NjY2IDUxLjU1NjQ4IDkyLjg4MzgzOTk5OTk5OTk5IDQyLjk2MDQyNjY2NjY2NjY2IDExMC4zOTE0NjY2NjY2NjY2NiAzOS40Nzc4NjY2NjY2NjY2NjRDMTI3Ljg5OTczMzMzMzMzMzMzIDM1Ljk5NTMwNjY2NjY2NjY2NCAxNDYuMDQ2OTMzMzMzMzMzMzMgMzcuNzgyNjEzMzMzMzMzMzMgMTYyLjUzOTczMzMzMzMzMzMyIDQ0LjYxMzk3MzMzMzMzMzMzQzE3OS4wMzE0NjY2NjY2NjY2MyA1MS40NDUyMjY2NjY2NjY2NiAxOTMuMTI3NDY2NjY2NjY2NjMgNjMuMDEzNjUzMzMzMzMzMzQgMjAzLjA0NTMzMzMzMzMzMzMgNzcuODU2MjEzMzMzMzMzMzNDMjEyLjk2MzE5OTk5OTk5OTk3IDkyLjY5ODc3MzMzMzMzMzMyIDIxOC4yNTYgMTEwLjE0OTMzMzMzMzMzMzMyIDIxOC4yNTYgMTI4QzIxOC4yMjkzMzMzMzMzMzMzMyAxNTEuOTI5NiAyMDguNzExNDY2NjY2NjY2NjcgMTc0Ljg3MDQwMDAwMDAwMDAyIDE5MS43OTA5MzMzMzMzMzMzMyAxOTEuNzkwOTMzMzMzMzMzMzNDMTc0Ljg3MDQwMDAwMDAwMDAyIDIwOC43MTE0NjY2NjY2NjY2NyAxNTEuOTI5NiAyMTguMjI5MzMzMzMzMzMzMzMgMTI4IDIxOC4yNTZaIiBmaWxsPSIjNTc1NzU3Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjggMTE0LjY2NjY2NjY2NjY2NjY2QzEzMi40MTgxMzMzMzMzMzMzMiAxMTQuNjY2NjY2NjY2NjY2NjYgMTM2IDExOC4yNDg1MzMzMzMzMzMzNCAxMzYgMTIyLjY2NjY2NjY2NjY2NjY2VjE4MS4zMzMzMzMzMzMzMzMzMUMxMzYgMTg1Ljc1MTQ2NjY2NjY2NjY2IDEzMi40MTgxMzMzMzMzMzMzMiAxODkuMzMzMzMzMzMzMzMzMzEgMTI4IDE4OS4zMzMzMzMzMzMzMzMzMUMxMjMuNTgxODY2NjY2NjY2NjcgMTg5LjMzMzMzMzMzMzMzMzMxIDEyMCAxODUuNzUxNDY2NjY2NjY2NjYgMTIwIDE4MS4zMzMzMzMzMzMzMzMzMVYxMjIuNjY2NjY2NjY2NjY2NjZDMTIwIDExOC4yNDg1MzMzMzMzMzMzNCAxMjMuNTgxODY2NjY2NjY2NjcgMTE0LjY2NjY2NjY2NjY2NjY2IDEyOCAxMTQuNjY2NjY2NjY2NjY2NjZaIiBmaWxsPSIjNTc1NzU3Ii8+PHBhdGggZD0iTTEzOS43MzMzMzMzMzMzMzMzMiA4Ni45MzMzMzMzMzMzMzMzNEMxMzkuNzMzMzMzMzMzMzMzMzIgOTMuNzA4MDUzMzMzMzMzMzQgMTM0LjI0MTA2NjY2NjY2NjY1IDk5LjIgMTI3LjQ2NjY2NjY2NjY2NjY1IDk5LjJDMTIwLjY5MjI2NjY2NjY2NjY1IDk5LjIgMTE1LjIgOTMuNzA4MDUzMzMzMzMzMzQgMTE1LjIgODYuOTMzMzMzMzMzMzMzMzRDMTE1LjIgODAuMTU4NjEzMzMzMzMzMzQgMTIwLjY5MjI2NjY2NjY2NjY1IDc0LjY2NjY2NjY2NjY2NjY2IDEyNy40NjY2NjY2NjY2NjY2NSA3NC42NjY2NjY2NjY2NjY2NkMxMzQuMjQxMDY2NjY2NjY2NjUgNzQuNjY2NjY2NjY2NjY2NjYgMTM5LjczMzMzMzMzMzMzMzMyIDgwLjE1ODYxMzMzMzMzMzM0IDEzOS43MzMzMzMzMzMzMzMzMiA4Ni45MzMzMzMzMzMzMzMzNFoiIGZpbGw9IiM1NzU3NTciLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Info";
export { I as Info };