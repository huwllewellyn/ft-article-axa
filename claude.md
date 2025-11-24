# Claude Code Configuration Guide

## Figma MCP Integration

This project uses the Figma MCP (Model Context Protocol) server to fetch design specifications directly from Figma, enabling automated component generation and design implementation.

### Setup

#### 1. Store Your Figma Token

Add your Figma personal access token to `.env` file in the project root:

```bash
FIGMA_TOKEN=figd_[your-token-here]
```

The `.env` file is already in `.gitignore`, so your token won't be committed to the repository.

**To get a Figma token:**
1. Go to https://www.figma.com/settings/profile
2. Scroll to "Personal access tokens"
3. Click "Create a new token"
4. Name it (e.g., "Claude Code")
5. Copy the token and paste it in your `.env` file

#### 2. Configure the Figma MCP

The Figma MCP is configured locally in your project (see `.mcp.json` if it exists, or it's configured via `claude mcp` commands).

To check the status:
```bash
claude mcp get figma
```

Expected output:
```
figma:
  Scope: Local config (private to you in this project)
  Status: ⚠ Needs authentication
  Type: http
  URL: https://mcp.figma.com/mcp
```

### Usage

#### Fetching Design Data via Curl

Use your stored token to fetch design nodes directly:

```bash
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/[FILE_ID]/nodes?ids=[NODE_ID]" \
  | python3 -m json.tool
```

**Example:**
```bash
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/OIVXhyUQ0vrsLUBuKrAPbg/nodes?ids=2591:29926" \
  | python3 -m json.tool
```

#### How to Find File and Node IDs

From any Figma design URL:
```
https://www.figma.com/design/[FILE_ID]/[PROJECT_NAME]?node-id=[NODE_ID]&m=dev
```

- **FILE_ID**: The long alphanumeric string after `/design/` (e.g., `OIVXhyUQ0vrsLUBuKrAPbg`)
- **NODE_ID**: The ID in the `node-id` parameter (e.g., `2591:29926`)

### Available Design Nodes

#### Intro Section
- **Node ID:** 2591:29926
- **Content:** Hero title with subtitle, decorative vectors, image placeholders
- **Typography:**
  - FreightBig Pro (title, mixed weights)
  - DM Sans Medium (subtitle)
- **Colors:** #0f0707 (dark brown)

#### Risks Section
- **Node ID:** 2591:29199
- **Content:** Title "Risk is all around us" with contextual paragraphs
- **Typography:** DM Sans (19px, weight 400-500)

### Response Format

The Figma API returns detailed design node data including:
- **Text content** and character styles
- **Typography** (font family, size, weight, spacing)
- **Colors** and fills
- **Positioning** (absolute bounding box)
- **Effects** and animations
- **Child elements** and hierarchy

Example output structure:
```json
{
  "nodes": {
    "2591:29926": {
      "document": {
        "id": "2591:29926",
        "name": "Frame 8664",
        "type": "FRAME",
        "children": [
          {
            "type": "TEXT",
            "characters": "...",
            "style": {
              "fontFamily": "...",
              "fontSize": 19,
              "fontWeight": 500
            }
          }
        ]
      }
    }
  }
}
```

### Troubleshooting

#### "Invalid token" error
- Verify the token is correctly stored in `.env`
- Check that your Figma token hasn't expired (regenerate if needed)
- Ensure the token is being sourced: `source .env` before running curl commands

#### MCP Still Shows "Needs authentication"
This is expected behavior. The MCP configuration is for future enhancements. Currently, use the curl method with `$FIGMA_TOKEN` environment variable instead.

#### "403 Forbidden" response
- Verify you have access to the Figma file
- Check that the FILE_ID and NODE_ID are correct
- Ensure the token has the correct permissions

### Further Reading

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code/)
