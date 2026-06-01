# Claude Desktop / Cowork Adapter

Claude Desktop and Cowork are secondary compatibility interfaces.

They may be used for:

- manual MCP access,
- simple workflow triggering,
- compatibility testing,
- fallback chat usage.

They should not be the primary orchestration UI where token cost and context growth are concerns.

## Design Rule

Claude Desktop connects to OctoEngine through MCP and command entrypoints. It should not duplicate Octogen logic.
