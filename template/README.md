# {{ name }}

To start:

```bash
npm install
```

To develop:

```bash
npm run dev{{#if electron}}
# In a new tab, run electron app
npm run app
{{/if}}
```

To build for production:

```bash
npm run build
```

{{#if eslint}}
To lint your code:

```bash
npm run lint
```

{{/if}}