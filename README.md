# yt-transcripts-mcp

MCP server that returns YouTube video transcripts, pulled from the video's captions.

## Tool

`get_transcript`

- `url`: video URL or ID (required)
- `lang`: preferred caption language, default `en`
- `timestamps`: prefix lines with `[m:ss]`, default `false`

## Setup

```sh
npm install
claude mcp add yt-transcripts -- node /path/to/yt-transcripts-mcp/src/index.js
```

Claude Desktop (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "yt-transcripts": {
      "command": "node",
      "args": ["/path/to/yt-transcripts-mcp/src/index.js"]
    }
  }
}
```

## Dev

```sh
npm test
npm run inspect
```

Uses YouTube's internal player API, so it may break if YouTube changes it. Videos without captions aren't supported.
