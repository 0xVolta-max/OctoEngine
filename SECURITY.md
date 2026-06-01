# Security Policy

OctoEngine orchestrates tools, agents, repositories, model routers, and MCP servers. Security boundaries must be explicit.

## Default Safety Posture

- MCP tools default to read-only.
- Write-capable actions require scoped permissions.
- Destructive actions require explicit confirmation.
- Secrets must never be stored in repository files.
- Model-router keys must be injected through environment variables or a secret manager.
- Agent outputs are advisory until verified.

## Sensitive Integrations

Special care is required for:

- Supabase/Postgres
- Mailcow
- GitHub
- CI/CD providers
- cloud credentials
- local filesystem access
- email sending
- production deployments

## Reporting Vulnerabilities

Open a private security advisory or contact the maintainers directly. Do not open public issues for active vulnerabilities.
