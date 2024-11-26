/* AUTO CONVERTED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/List";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xODQuMTYgMTUxLjM1OTk5OTk5OTk5OTk5QzE2Mi4xNTE0NjY2NjY2NjY2NiAxNTEuMzU5OTk5OTk5OTk5OTkgMTQ0LjMyIDE2OS4xOTE0NjY2NjY2NjY2NiAxNDQuMzIgMTkxLjJDMTQ0LjMyIDIxMy4yMDg1MzMzMzMzMzMzMiAxNjIuMTUxNDY2NjY2NjY2NjYgMjMxLjA0IDE4NC4xNiAyMzEuMDRDMjA2LjE2ODUzMzMzMzMzMzMgMjMxLjA0IDIyNCAyMTMuMjA4NTMzMzMzMzMzMzIgMjI0IDE5MS4yQzIyNCAxNjkuMTkxNDY2NjY2NjY2NjYgMjA2LjE1Nzg2NjY2NjY2NjY4IDE1MS4zNTk5OTk5OTk5OTk5OSAxODQuMTYgMTUxLjM1OTk5OTk5OTk5OTk5Wk0yMDUuNDgzNzMzMzMzMzMzMyAyMDQuOTE1MTk5OTk5OTk5OTdDMjA3LjQ3NjI2NjY2NjY2NjY3IDIwNi45MDc3MzMzMzMzMzMzNCAyMDcuNDc2MjY2NjY2NjY2NjcgMjEwLjE0NTA2NjY2NjY2NjY1IDIwNS40ODM3MzMzMzMzMzMzIDIxMi4xMzY1MzMzMzMzMzMzMkMyMDQuNDgzMiAyMTMuMTM3MDY2NjY2NjY2NjcgMjAzLjE3NjUzMzMzMzMzMzMgMjEzLjYyNzczMzMzMzMzMzMgMjAxLjg2ODggMjEzLjYyNzczMzMzMzMzMzNDMjAwLjU2MjEzMzMzMzMzMzM1IDIxMy42Mjc3MzMzMzMzMzMzIDE5OS4yNTQzOTk5OTk5OTk5OCAyMTMuMTI2NCAxOTguMjUzODY2NjY2NjY2NjggMjEyLjEzNjUzMzMzMzMzMzMyTDE4NC41Mjc5OTk5OTk5OTk5NiAxOTguNDEwNjY2NjY2NjY2NjZMMTcwLjgwMjEzMzMzMzMzMzMgMjEyLjEzNjUzMzMzMzMzMzMyQzE2OS44MDA1MzMzMzMzMzMzIDIxMy4xMzcwNjY2NjY2NjY2NyAxNjguNDkzODY2NjY2NjY2NjYgMjEzLjYyNzczMzMzMzMzMzMgMTY3LjE4NjEzMzMzMzMzMzMyIDIxMy42Mjc3MzMzMzMzMzMzQzE2NS44Nzk0NjY2NjY2NjY2NCAyMTMuNjI3NzMzMzMzMzMzMyAxNjQuNTcxNzMzMzMzMzMzMzMgMjEzLjEyNjQgMTYzLjU3MTE5OTk5OTk5OTk4IDIxMi4xMzY1MzMzMzMzMzMzMkMxNjEuNTc5NzMzMzMzMzMzMyAyMTAuMTQ1MDY2NjY2NjY2NjUgMTYxLjU3OTczMzMzMzMzMzMgMjA2LjkwNzczMzMzMzMzMzM0IDE2My41NzExOTk5OTk5OTk5OCAyMDQuOTE1MTk5OTk5OTk5OTdMMTc3LjI5NzA2NjY2NjY2NjY3IDE5MS4xODkzMzMzMzMzMzMzTDE2My41NzExOTk5OTk5OTk5OCAxNzcuNDYzNDY2NjY2NjY2NjVDMTYxLjU3OTczMzMzMzMzMzMgMTc1LjQ3MiAxNjEuNTc5NzMzMzMzMzMzMyAxNzIuMjM0NjY2NjY2NjY2NjQgMTYzLjU3MTE5OTk5OTk5OTk4IDE3MC4yNDMyQzE2NS41NjI2NjY2NjY2NjY2NCAxNjguMjUxNzMzMzMzMzMzMzMgMTY4Ljc5OTk5OTk5OTk5OTk4IDE2OC4yNTE3MzMzMzMzMzMzMyAxNzAuNzkxNDY2NjY2NjY2NjggMTcwLjI0MzJMMTg0LjUxNzMzMzMzMzMzMzM0IDE4My45NjkwNjY2NjY2NjY2NkwxOTguMjQzMiAxNzAuMjQzMkMyMDAuMjM0NjY2NjY2NjY2NjQgMTY4LjI1MTczMzMzMzMzMzMzIDIwMy40NzIgMTY4LjI1MTczMzMzMzMzMzMzIDIwNS40NjM0NjY2NjY2NjY2NSAxNzAuMjQzMkMyMDcuNDU0OTMzMzMzMzMzMzIgMTcyLjIzNDY2NjY2NjY2NjY0IDIwNy40NTQ5MzMzMzMzMzMzMiAxNzUuNDcyIDIwNS40NjM0NjY2NjY2NjY2NSAxNzcuNDYzNDY2NjY2NjY2NjVMMTkxLjczNzYgMTkxLjE4OTMzMzMzMzMzMzNMMjA1LjQ2MzQ2NjY2NjY2NjY1IDIwNC45MTUxOTk5OTk5OTk5N0gyMDUuNDgzNzMzMzMzMzMzM1oiIGZpbGw9IiM1NzU3NTciLz48cGF0aCBkPSJNNTMuMzMzMzMzMzMzMzMzMzMgNzQuNjY2NjY2NjY2NjY2NjZIMTkyIiBzdHJva2U9IiM1NzU3NTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTUzLjMzMzMzMzMzMzMzMzMzIDEyOEgxOTIiIHN0cm9rZT0iIzU3NTc1NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNTMuMzMzMzMzMzMzMzMzMzMgMTgxLjMzMzMzMzMzMzMzMzMxSDExNy4zMzMzMzMzMzMzMzMzMyIgc3Ryb2tlPSIjNTc1NzU3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "List";
export { I as List };